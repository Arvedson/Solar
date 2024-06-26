import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const territorio = await prisma.territorio.findUnique({ where: { id: Number(id) } });
    if (!territorio) {
      return NextResponse.json({ error: 'Territory not found' }, { status: 404 });
    }
    return NextResponse.json(territorio);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching territory' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const { estado, costoPorKw, indiceRadiacion } = await req.json();
    const updatedTerritorio = await prisma.territorio.update({
      where: { id: Number(id) },
      data: { estado, costoPorKw, indiceRadiacion },
    });
    return NextResponse.json(updatedTerritorio);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating territory' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    await prisma.territorio.delete({ where: { id: Number(id) } });
    return NextResponse.json({ message: 'Territory deleted successfully' }, { status: 204 });
  } catch (error) {
    console.error(`Error deleting territory with id ${id}:`, error);
    return NextResponse.json({ error: 'Error deleting territory' }, { status: 500 });
  }
}
