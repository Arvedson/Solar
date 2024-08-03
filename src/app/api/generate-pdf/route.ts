import { NextRequest, NextResponse } from 'next/server';
import PDFDocument from 'pdfkit';
import { Buffer } from 'buffer';

export async function POST(req: NextRequest) {
  try {
    console.log('Recibida solicitud POST');

    const { nombre, direccion, paneles, costo } = await req.json();
    console.log('Datos recibidos:', { nombre, direccion, paneles, costo });

    // Validación de datos
    if (!nombre || !direccion || typeof paneles !== 'number' || typeof costo !== 'number') {
      console.error('Datos faltantes o inválidos:', { nombre, direccion, paneles, costo });
      return new NextResponse('Todos los campos son requeridos y deben ser válidos', { status: 400 });
    }

    console.log('Datos validados correctamente');

    // Crear un documento PDF
    const pdfDoc = new PDFDocument();
    let buffers: Buffer[] = [];
    pdfDoc.on('data', buffers.push.bind(buffers));
    pdfDoc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      console.log('PDF generado correctamente con pdfkit');

      return new NextResponse(pdfData, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename=propuesta.pdf',
        },
      });
    });

    pdfDoc.text(`Nombre: ${nombre}`, 50, 50);
    pdfDoc.text(`Dirección: ${direccion}`, 50, 70);
    pdfDoc.text(`Número de Paneles: ${paneles}`, 50, 90);
    pdfDoc.text(`Costo: $${costo}`, 50, 110);
    pdfDoc.end();

  } catch (error) {
    console.error('Error generating PDF:', error);
    return new NextResponse('Error generating PDF', { status: 500 });
  }
}
