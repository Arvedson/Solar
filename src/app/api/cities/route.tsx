import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('perPage') || '10');
    const sort = searchParams.get('sort') ? JSON.parse(searchParams.get('sort')!) : ['id', 'ASC'];
    const filter = searchParams.get('filter') ? JSON.parse(searchParams.get('filter')!) : {};

    const orderBy: any = {};
    orderBy[sort[0]] = sort[1].toLowerCase();

    const cities = await prisma.city.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
      where: filter,
      orderBy,
      include: {
        estado: true,  // Corrige el nombre de la propiedad a estado
      },
    });

    const total = await prisma.city.count({
      where: filter,
    });

    const response = NextResponse.json(cities);
    response.headers.set('Content-Range', `cities ${page * perPage - perPage}-${page * perPage}/${total}`);
    response.headers.set('Access-Control-Expose-Headers', 'Content-Range');
    return response;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch cities' }), { status: 500 });
  }
};
