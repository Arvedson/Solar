import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

// GET handler
export async function GET(req: NextApiRequest) {
  console.log('GET request received');
  try {
    console.log('Fetching panels from the database');
    const paneles = await prisma.panelSolar.findMany();
    const totalCount = await prisma.panelSolar.count();
    console.log('Panels fetched successfully', paneles);

    const headers = {
      'Content-Range': `paneles 0-${paneles.length}/${totalCount}`,
    };

    return NextResponse.json(paneles, { status: 200, headers });
  } catch (error) {
    console.error('Error fetching panels', error);
    return NextResponse.json({ error: 'Error fetching panels' }, { status: 500 });
  }
}

// POST handler
export async function POST(req: NextApiRequest) {
  const data = await req.json();
  const { modelo, capacidadW, fabricante, eficiencia, dimensiones, peso, precio, imageUrl, voltajeVoc, corrienteIsc, voltajeVmp, corrienteImp, tipoCelda, cantidadCeldas, tolerancia, maxVoltajeSistema, temperaturaOperacion, garantiaProducto, garantiaPotencia } = data;
  console.log('POST request received with data:', { modelo, capacidadW, fabricante, eficiencia, dimensiones, peso, precio, imageUrl, voltajeVoc, corrienteIsc, voltajeVmp, corrienteImp, tipoCelda, cantidadCeldas, tolerancia, maxVoltajeSistema, temperaturaOperacion, garantiaProducto, garantiaPotencia });
  try {
    console.log('Creating new panel in the database');
    const newPanel = await prisma.panelSolar.create({
      data: { modelo, capacidadW, fabricante, eficiencia, dimensiones, peso, precio, imageUrl, voltajeVoc, corrienteIsc, voltajeVmp, corrienteImp, tipoCelda, cantidadCeldas, tolerancia, maxVoltajeSistema, temperaturaOperacion, garantiaProducto, garantiaPotencia }
    });
    console.log('Panel created successfully', newPanel);
    return NextResponse.json(newPanel, { status: 201 });
  } catch (error) {
    console.error('Error creating panel', error);
    return NextResponse.json({ error: 'Error creating panel' }, { status: 500 });
  }
}
