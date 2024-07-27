import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

interface Params {
  params: {
    id: string;
  };
}

// GET handler for a single microinverter
export const GET = async (req: NextRequest, { params }: Params) => {
  console.log('GET /api/microinversores/:id - Start');
  const { id } = params;
  console.log('Fetching microinversor with ID:', id);

  if (!id) {
    console.error('ID is required');
    return new NextResponse(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }

  try {
    const microinversor = await prisma.microinversor.findUnique({
      where: { id: Number(id) },
    });

    if (microinversor) {
      console.log('Microinversor fetched:', microinversor);
      return new NextResponse(JSON.stringify(microinversor), { status: 200 });
    } else {
      console.error('Microinversor not found');
      return new NextResponse(JSON.stringify({ error: 'Microinversor not found' }), { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching microinversor:', error);
    return new NextResponse(JSON.stringify({ error: 'Error fetching microinversor' }), { status: 500 });
  }
};

// PUT handler for updating a single microinverter
export const PUT = async (req: NextRequest, { params }: Params) => {
  console.log('PUT /api/microinversores/:id - Start');
  const { id } = params;
  const data = await req.json();
  console.log('Updating microinversor with ID:', id);
  console.log('Request body data:', data);

  if (!id) {
    console.error('ID is required');
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
        DangerMppzone: data.DangerMppzone,
        SafeMppzone: data.SafeMppzone,
        MppTrackers: data.MppTrackers,
        voltajeMinstart: data.voltajeMinstart,
        voltajeEntrada: data.voltajeEntrada,
        voltajeNomina: data.voltajeNomina,
        corrienteEntrada: data.corrienteEntrada,
        corrienteSalida: data.corrienteSalida,
        voltajeSalida: data.voltajeSalida,
        capacidadWsalida: data.capacidadWsalida,
        fases: data.fases,
        temperaturaOperacion: data.temperaturaOperacion,
        garantiaProducto: data.garantiaProducto,
        garantiaPotencia: data.garantiaPotencia,
      },
    });

    console.log('Microinversor updated:', updatedMicroinversor);
    return new NextResponse(JSON.stringify(updatedMicroinversor), { status: 200 });
  } catch (error) {
    console.error('Error updating microinversor:', error);
    return new NextResponse(JSON.stringify({ error: 'Error updating microinversor' }), { status: 500 });
  }
};

// DELETE handler for deleting a single microinverter
export const DELETE = async (req: NextRequest, { params }: Params) => {
  console.log('DELETE /api/microinversores/:id - Start');
  const { id } = params;
  console.log('Deleting microinversor with ID:', id);

  if (!id) {
    console.error('ID is required');
    return new NextResponse(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }

  try {
    await prisma.microinversor.delete({
      where: { id: Number(id) },
    });

    console.log('Microinversor deleted successfully');
    return new NextResponse(JSON.stringify({ message: 'Microinversor deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting microinversor:', error);
    return new NextResponse(JSON.stringify({ error: 'Error deleting microinversor' }), { status: 500 });
  }
};
