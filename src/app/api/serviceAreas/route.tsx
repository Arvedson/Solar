import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export const GET = async (req: NextRequest) => {
  console.log("try")
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('perPage') || '10');
    const sort = searchParams.get('sort') ? JSON.parse(searchParams.get('sort')) : ['id', 'ASC'];
    const filter = searchParams.get('filter') ? JSON.parse(searchParams.get('filter')) : {};

    const orderBy: any = {};
    orderBy[sort[0]] = sort[1].toLowerCase() as 'asc' | 'desc';

    const serviceAreas = await prisma.serviceArea.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
      where: filter,
      orderBy,
      include: {
        installer: true,
        city: true,
      },
    });

    const total = await prisma.serviceArea.count({
      where: filter,
    });

    const response = NextResponse.json(serviceAreas);
    response.headers.set('Content-Range', `serviceAreas ${page * perPage - perPage}-${page * perPage}/${total}`);
    response.headers.set('Access-Control-Expose-Headers', 'Content-Range');
    return response;
  } catch (error) {
    console.error('Error fetching service areas:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch service areas' }), { status: 500 });
  }
};
