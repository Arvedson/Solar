import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const range = url.searchParams.get('range') ? JSON.parse(url.searchParams.get('range')!) : [0, 9];
    const sort = url.searchParams.get('sort') ? JSON.parse(url.searchParams.get('sort')!) : ['id', 'ASC'];
    const filter = url.searchParams.get('filter') ? JSON.parse(url.searchParams.get('filter')!) : {};

    const [rangeStart, rangeEnd] = range;
    const [sortField, sortOrder] = sort;

    const total = await prisma.installer.count({
      where: filter,
    });

    const installers = await prisma.installer.findMany({
      where: filter,
      orderBy: {
        [sortField]: sortOrder.toLowerCase(),
      },
      skip: rangeStart,
      take: rangeEnd - rangeStart + 1,
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
