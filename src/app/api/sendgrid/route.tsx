import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';
import fs from 'fs';
import path from 'path';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  console.log("Request received:", req.method);

  const { name, email, message, files } = await req.json();
  console.log("Request body:", { name, email, message, files });

  const attachments = files.map((file: { name: string, content: string }) => ({
    content: file.content.split('base64,')[1],
    filename: file.name,
    type: file.content.split(';')[0].split(':')[1],
    disposition: 'attachment',
  }));

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
