import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// GET handler
export const GET = async (req: NextRequest) => {
  try {
    const microinversores = await prisma.microinversor.findMany();
    const totalCount = await prisma.microinversor.count();
    const headers = new Headers({
      'Content-Range': `microinversores 0-${microinversores.length}/${totalCount}`,
      'Access-Control-Expose-Headers': 'Content-Range',
    });

    return new NextResponse(JSON.stringify(microinversores), {
      status: 200,
      headers,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Error fetching microinversores' }), { status: 500 });
  }
};

// POST handler
export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const newMicroinversor = await prisma.microinversor.create({
      data,
    });
    return new NextResponse(JSON.stringify(newMicroinversor), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Error creating microinversor' }), { status: 500 });
  }
};
