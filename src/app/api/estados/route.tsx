// src/app/api/estados/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

// Handle GET request
export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('perPage') || '10');
    const sort = searchParams.get('sort') ? JSON.parse(searchParams.get('sort')) : ['id', 'ASC'];
    const filter = searchParams.get('filter') ? JSON.parse(searchParams.get('filter')) : {};

    const orderBy: any = {};
    orderBy[sort[0]] = sort[1].toLowerCase() as 'asc' | 'desc';

    const estados = await prisma.estado.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
      where: filter,
      orderBy,
      include: {
        ciudades: true,
      },
    });

    const total = await prisma.estado.count({
      where: filter,
    });

    const response = NextResponse.json(estados);
    response.headers.set('Content-Range', `estados ${page * perPage - perPage}-${page * perPage}/${total}`);
    response.headers.set('Access-Control-Expose-Headers', 'Content-Range');
    return response;
  } catch (error) {
    console.error('Error fetching estados:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch estados' }), { status: 500 });
  }
};

// Handle POST request
export const POST = async (req: NextRequest) => {
  try {
    const { nombre } = await req.json();

    const newEstado = await prisma.estado.create({
      data: {
        nombre,
      },
    });

    return new NextResponse(JSON.stringify(newEstado), { status: 201 });
  } catch (error) {
    console.error('Error creating estado:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to create estado' }), { status: 500 });
  }
};
