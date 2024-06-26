import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

// GET handler for a single inverter
export async function GET(req: NextRequest, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    const inversor = await prisma.inversor.findUnique({
      where: { id: Number(id) },
    });

    if (inversor) {
      return NextResponse.json(inversor, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Inverter not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching inverter', error);
    return NextResponse.json({ error: 'Error fetching inverter' }, { status: 500 });
  }
}

// PUT handler for updating a single inverter
export async function PUT(req: NextRequest, { params }) {
  const { id } = params;
  const data = await req.json();

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    const updatedInversor = await prisma.inversor.update({
      where: { id: Number(id) },
      data: {
        modelo: data.modelo,
        capacidadW: data.capacidadW,
        fabricante: data.fabricante,
        eficiencia: data.eficiencia,
        dimensiones: data.dimensiones,
        peso: data.peso,
        precio: data.precio,
        imageUrl: data.imageUrl,
        voltajeEntrada: data.voltajeEntrada,
        voltajeSalida: data.voltajeSalida,
        tipo: data.tipo,
        fases: data.fases,
      },
    });

    return NextResponse.json(updatedInversor, { status: 200 });
  } catch (error) {
    console.error('Error updating inverter', error);
    return NextResponse.json({ error: 'Error updating inverter' }, { status: 500 });
  }
}

// DELETE handler for deleting a single inverter
export async function DELETE(req: NextRequest, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    await prisma.inversor.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Inverter deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting inverter', error);
    return NextResponse.json({ error: 'Error deleting inverter' }, { status: 500 });
  }
}
