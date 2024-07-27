import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// GET handler
export const GET = async (req: NextRequest) => {
  console.log('GET request received');
  try {
    console.log('Fetching panels from the database');
    const paneles = await prisma.panelSolar.findMany();
    const totalCount = await prisma.panelSolar.count();
    console.log('Panels fetched successfully', paneles);

    const headers = new Headers({
      'Content-Range': `paneles 0-${paneles.length}/${totalCount}`,
      'Access-Control-Expose-Headers': 'Content-Range',
    });

    return new NextResponse(JSON.stringify(paneles), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error fetching panels', error);
    return new NextResponse(JSON.stringify({ error: 'Error fetching panels' }), { status: 500 });
  }
};

// POST handler
export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const {
    modelo,
    capacidadW,
    fabricante,
    eficiencia,
    dimensiones,
    peso,
    precio,
    imageUrl,
    voltajeVoc,
    corrienteIsc,
    voltajeVmp,
    corrienteImp,
    tipoCelda,
    cantidadCeldas,
    tolerancia,
    maxVoltajeSistema,
    temperaturaOperacion,
    garantiaProducto,
    garantiaPotencia,
  } = data;
  console.log('POST request received with data:', {
    modelo,
    capacidadW,
    fabricante,
    eficiencia,
    dimensiones,
    peso,
    precio,
    imageUrl,
    voltajeVoc,
    corrienteIsc,
    voltajeVmp,
    corrienteImp,
    tipoCelda,
    cantidadCeldas,
    tolerancia,
    maxVoltajeSistema,
    temperaturaOperacion,
    garantiaProducto,
    garantiaPotencia,
  });
  try {
    console.log('Creating new panel in the database');
    const newPanel = await prisma.panelSolar.create({
      data: {
        modelo,
        capacidadW,
        fabricante,
        eficiencia,
        dimensiones,
        peso,
        precio,
        imageUrl,
        voltajeVoc,
        corrienteIsc,
        voltajeVmp,
        corrienteImp,
        tipoCelda,
        cantidadCeldas,
        tolerancia,
        maxVoltajeSistema,
        temperaturaOperacion,
        garantiaProducto,
        garantiaPotencia,
      },
    });
    console.log('Panel created successfully', newPanel);
    return new NextResponse(JSON.stringify(newPanel), { status: 201 });
  } catch (error) {
    console.error('Error creating panel', error);
    return new NextResponse(JSON.stringify({ error: 'Error creating panel' }), { status: 500 });
  }
};
