import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';
import { limiter } from '@/middleware/rateLimit';
import { getClientIpWrapper } from '@/middleware/getIp';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileTypeFromBuffer } from 'file-type';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

const readFile = promisify(fs.readFile);

async function readFileAsBase64(filePath: string): Promise<string> {
  const fileBuffer = await readFile(filePath);
  return fileBuffer.toString('base64');
}

async function getFileType(filePath: string): Promise<string> {
  const fileBuffer = await readFile(filePath);
  const type = await fileTypeFromBuffer(fileBuffer);
  return type?.mime || 'application/octet-stream';
}

class MockResponse {
  headers: { [key: string]: string } = {};
  statusCode?: number;
  body?: any;

  setHeader(name: string, value: string) {
    this.headers[name] = value;
  }

  getHeader(name: string) {
    return this.headers[name];
  }

  status(code: number) {
    this.statusCode = code;
    return this;
  }

  send(body: any) {
    this.body = body;
    return this;
  }

  json(body: any) {
    this.body = JSON.stringify(body);
    return this;
  }
}

export async function POST(req: NextRequest) {
  const ip = getClientIpWrapper(req);
  console.log("IP obtenida en POST:", ip);

  const res = new MockResponse();

  const response = await new Promise((resolve, reject) => {
    console.log('Antes de llamar al limiter');
    console.log(ip);
    limiter(req as any, res as any, (result: any) => {
      console.log('Dentro del callback del limiter');
      if (result instanceof Error) {
        console.log('Error en limiter:', result);
        reject(result);
      } else {
        console.log('Limiter exitoso');
        resolve(result);
      }
    });
  }).catch((error) => {
    console.log('Catch en limiter:', error);
    return NextResponse.json({ error: error.message }, { status: 429 });
  });

  if (response instanceof NextResponse) {
    return response;
  }

  console.log("Request received:", req.method);
  const { name, email, message, files } = await req.json();
  console.log("Request body:", { name, email, message, files });

  const attachments = await Promise.all(
    files.map(async (file: { path: string }) => {
      const content = await readFileAsBase64(file.path);
      const mimeType = await getFileType(file.path);
      return {
        content,
        filename: path.basename(file.path),
        type: mimeType,
        disposition: 'attachment',
      };
    })
  );

  const msg = {
    to: 'admin@ququlkan-solar.com',
    from: 'admin@ququlkan-solar.com',
    subject: 'Nuevo mensaje de contacto',
    text: `
      Nombre: ${name}\n
      Email: ${email}\n
      Mensaje: ${message}
    `,
    attachments,
  };

  try {
    console.log("Sending email with SendGrid options:", msg);
    await sendgrid.send(msg);
    console.log("Email sent successfully with SendGrid");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email with SendGrid:", error);
    return NextResponse.json({ error: 'Error enviando el correo' }, { status: 500 });
  }
}
