import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('perPage') || '10');
    const sort = searchParams.get('sort') ? JSON.parse(searchParams.get('sort')) : ['id', 'ASC'];
    const filter = searchParams.get('filter') ? JSON.parse(searchParams.get('filter')) : {};

    const orderBy: any = {};
    if (sort[0] === 'serviceAreas') {
      orderBy[sort[0]] = {
        _count: sort[1].toLowerCase() as 'asc' | 'desc'
      };
    } else {
      orderBy[sort[0]] = sort[1].toLowerCase() as 'asc' | 'desc';
    }

    const installers = await prisma.installer.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
      where: filter,
      orderBy,
      include: {
        serviceAreas: true,
      },
    });

    const total = await prisma.installer.count({
      where: filter,
    });

    const response = NextResponse.json(installers);
    response.headers.set('Content-Range', `installers ${page * perPage - perPage}-${page * perPage}/${total}`);
    response.headers.set('Access-Control-Expose-Headers', 'Content-Range');
    return response;
  } catch (error) {
    console.error('Error fetching installers:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch installers' }), { status: 500 });
  }
};
