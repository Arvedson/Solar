import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

interface Params {
  params: {
    id: string;
  };
}

// GET handler for a single panel
export const GET = async (req: NextRequest, { params }: Params) => {
  const { id } = params;

  if (!id) {
    return new NextResponse(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }

  try {
    const panel = await prisma.panelSolar.findUnique({
      where: { id: Number(id) },
    });

    if (panel) {
      return new NextResponse(JSON.stringify(panel), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ error: 'Panel not found' }), { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching panel', error);
    return new NextResponse(JSON.stringify({ error: 'Error fetching panel' }), { status: 500 });
  }
};

// PUT handler for updating a single panel
export const PUT = async (req: NextRequest, { params }: Params) => {
  const { id } = params;
  const data = await req.json();

  if (!id) {
    return new NextResponse(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }

  try {
    const updatedPanel = await prisma.panelSolar.update({
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
        voltajeVoc: data.voltajeVoc,
        corrienteIsc: data.corrienteIsc,
        voltajeVmp: data.voltajeVmp,
        corrienteImp: data.corrienteImp,
        tipoCelda: data.tipoCelda,
        cantidadCeldas: data.cantidadCeldas,
        tolerancia: data.tolerancia,
        maxVoltajeSistema: data.maxVoltajeSistema,
        temperaturaOperacion: data.temperaturaOperacion,
        garantiaProducto: data.garantiaProducto,
        garantiaPotencia: data.garantiaPotencia,
      },
    });

    return new NextResponse(JSON.stringify(updatedPanel), { status: 200 });
  } catch (error) {
    console.error('Error updating panel', error);
    return new NextResponse(JSON.stringify({ error: 'Error updating panel' }), { status: 500 });
  }
};

// DELETE handler for deleting a single panel
export const DELETE = async (req: NextRequest, { params }: Params) => {
  const { id } = params;

  if (!id) {
    return new NextResponse(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }

  try {
    await prisma.panelSolar.delete({
      where: { id: Number(id) },
    });

    return new NextResponse(JSON.stringify({ message: 'Panel deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting panel', error);
    return new NextResponse(JSON.stringify({ error: 'Error deleting panel' }), { status: 500 });
  }
};
