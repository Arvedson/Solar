import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

interface Params {
  params: {
    id: string;
  };
}

// GET handler for a single microinverter
export const GET = async (req: NextRequest, { params }: Params) => {
  const { id } = params;

  if (!id) {
    return new NextResponse(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }

  try {
    const microinversor = await prisma.microinversor.findUnique({
      where: { id: Number(id) },
    });

    if (microinversor) {
      return new NextResponse(JSON.stringify(microinversor), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ error: 'Microinverter not found' }), { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching microinverter', error);
    return new NextResponse(JSON.stringify({ error: 'Error fetching microinverter' }), { status: 500 });
  }
};

// PUT handler for updating a single microinverter
export const PUT = async (req: NextRequest, { params }: Params) => {
  const { id } = params;
  const data = await req.json();

  if (!id) {
    return new NextResponse(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }

  try {
    const updatedMicroinversor = await prisma.microinversor.update({
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
        fases: data.fases,
      },
    });

    return new NextResponse(JSON.stringify(updatedMicroinversor), { status: 200 });
  } catch (error) {
    console.error('Error updating microinverter', error);
    return new NextResponse(JSON.stringify({ error: 'Error updating microinverter' }), { status: 500 });
  }
};

// DELETE handler for deleting a single microinverter
export const DELETE = async (req: NextRequest, { params }: Params) => {
  const { id } = params;

  if (!id) {
    return new NextResponse(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }

  try {
    await prisma.microinversor.delete({
      where: { id: Number(id) },
    });

    return new NextResponse(JSON.stringify({ message: 'Microinverter deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting microinverter', error);
    return new NextResponse(JSON.stringify({ error: 'Error deleting microinverter' }), { status: 500 });
  }
};
