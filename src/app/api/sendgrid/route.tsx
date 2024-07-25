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

export async function POST(req: NextRequest) {
  const ip = getClientIpWrapper(req);
  console.log("IP obtenida en POST:", ip);

  // Aplica el middleware de limitación de velocidad
  const response = await new Promise((resolve, reject) => {
    limiter({ ...req, ip }, {} as any, (result: any) => {
      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  }).catch((error) => {
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
