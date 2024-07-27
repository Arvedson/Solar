import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const range = searchParams.get('range') ? JSON.parse(searchParams.get('range')!) : [0, 9];
    const sort = searchParams.get('sort') ? JSON.parse(searchParams.get('sort')!) : ['id', 'ASC'];
    const filter = searchParams.get('filter') ? JSON.parse(searchParams.get('filter')!) : {};

    const [rangeStart, rangeEnd] = range;
    const [sortField, sortOrder] = sort;

    const orderBy: any = {};
    if (sortField === 'serviceAreas') {
      orderBy[sortField] = {
        _count: sortOrder.toLowerCase() as 'asc' | 'desc',
      };
    } else {
      orderBy[sortField] = sortOrder.toLowerCase() as 'asc' | 'desc';
    }

    const installers = await prisma.installer.findMany({
      skip: rangeStart,
      take: rangeEnd - rangeStart + 1,
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
    response.headers.set('Content-Range', `installers ${rangeStart}-${rangeEnd}/${total}`);
    response.headers.set('Access-Control-Expose-Headers', 'Content-Range');
    return response;
  } catch (error) {
    console.error('Error fetching installers:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch installers' }), { status: 500 });
  }
};
