import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

// GET handler
export async function GET(req: NextApiRequest) {
  try {
    const microinversores = await prisma.microinversor.findMany();
    const totalCount = await prisma.microinversor.count();
    const headers = {
      'Content-Range': `microinversores 0-${microinversores.length}/${totalCount}`,
    };

    return NextResponse.json(microinversores, { status: 200, headers });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching microinversores' }, { status: 500 });
  }
}

// POST handler
export async function POST(req: NextApiRequest) {
  const data = await req.json();
  try {
    const newMicroinversor = await prisma.microinversor.create({
      data,
    });
    return NextResponse.json(newMicroinversor, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating microinversor' }, { status: 500 });
  }
}
