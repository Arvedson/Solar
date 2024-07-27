import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET handler
export const GET = async (req: NextRequest) => {
  console.log('GET /api/microinversores - Start');
  try {
    console.log('Fetching microinversores from database');
    const microinversores = await prisma.microinversor.findMany();
    console.log('Microinversores fetched:', microinversores);

    console.log('Counting total microinversores in database');
    const totalCount = await prisma.microinversor.count();
    console.log('Total count of microinversores:', totalCount);

    const headers = new Headers({
      'Content-Range': `microinversores 0-${microinversores.length}/${totalCount}`,
      'Access-Control-Expose-Headers': 'Content-Range',
    });
    console.log('Headers set:', headers);

    return new NextResponse(JSON.stringify(microinversores), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error fetching microinversores:', error);
    return new NextResponse(JSON.stringify({ error: 'Error fetching microinversores' }), { status: 500 });
  }
};

// POST handler
export const POST = async (req: NextRequest) => {
  console.log('POST /api/microinversores - Start');
  try {
    console.log('Reading request body');
    const data = await req.json();
    console.log('Request body data:', data);

    console.log('Creating new microinversor in database');
    const newMicroinversor = await prisma.microinversor.create({
      data,
    });
    console.log('New microinversor created:', newMicroinversor);

    return new NextResponse(JSON.stringify(newMicroinversor), { status: 201 });
  } catch (error) {
    console.error('Error creating microinversor:', error);
    return new NextResponse(JSON.stringify({ error: 'Error creating microinversor' }), { status: 500 });
  }
};

