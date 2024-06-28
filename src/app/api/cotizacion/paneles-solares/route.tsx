// src/app/api/cotizacion/paneles-solares/route.tsx
import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { consumoAnual } = await req.json();

    // Realiza los cálculos necesarios para generar la cotización
    const panelesSolares = await prisma.panelSolar.findMany();

    const cotizacion = panelesSolares.map(panel => {
      const cantidadPaneles = Math.ceil(consumoAnual / panel.capacidadW);
      const costo = cantidadPaneles * panel.precio;
      return {
        modelo: panel.modelo,
        capacidad: panel.capacidadW,
        cantidadPaneles,
        costo,
      };
    });

    return new Response(JSON.stringify(cotizacion), { status: 200 });
  } catch (error) {
    console.log("Error al calcular la cotización:", error);
    return new Response(JSON.stringify({ message: 'Error al calcular la cotización', error }), { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const panelesSolares = await prisma.panelSolar.findMany();
    return new Response(JSON.stringify(panelesSolares), { status: 200 });
  } catch (error) {
    console.log("Error al obtener datos de los paneles solares:", error);
    return new Response(JSON.stringify({ message: 'Error al recuperar los datos de los paneles solares', error }), { status: 500 });
  }
}
