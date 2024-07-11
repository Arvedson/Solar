import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const estado = await prisma.estado.findUnique({ where: { id: Number(id) } });
    if (!estado) {
      return NextResponse.json({ error: 'Estado not found' }, { status: 404 });
    }
    return NextResponse.json(estado);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching estado' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const { nombre } = await req.json(); // Solo se actualiza el campo `nombre`
    const updatedEstado = await prisma.estado.update({
      where: { id: Number(id) },
      data: { nombre },
    });
    return NextResponse.json(updatedEstado);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating estado' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    await prisma.estado.delete({ where: { id: Number(id) } });
    return NextResponse.json({ message: 'Estado deleted successfully' }, { status: 204 });
  } catch (error) {
    console.error(`Error deleting estado with id ${id}:`, error);
    return NextResponse.json({ error: 'Error deleting estado' }, { status: 500 });
  }
}
