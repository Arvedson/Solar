import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('perPage') || '10');
    const sort = searchParams.get('sort') ? JSON.parse(searchParams.get('sort')) : ['id', 'ASC'];
    const filter = searchParams.get('filter') ? JSON.parse(searchParams.get('filter')) : {};

    const installers = await prisma.installer.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
      where: filter,
      orderBy: {
        [sort[0]]: sort[1].toLowerCase(),
      },
    });

    const total = await prisma.installer.count({
      where: filter,
    });

    const response = new NextResponse(JSON.stringify(installers), { status: 200 });
    response.headers.set('Content-Range', `installers ${page * perPage - perPage}-${page * perPage}/${total}`);
    return response;
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch installers' }), { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { name, cost_per_kw, email, phone, serviceAreas } = body;

    if (!name || !cost_per_kw || !email || !phone || !serviceAreas) {
      return new NextResponse(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    const installer = await prisma.installer.create({
      data: { name, cost_per_kw, email, phone, serviceAreas },
    });

    return new NextResponse(JSON.stringify(installer), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Installer creation failed' }), { status: 400 });
  }
};
