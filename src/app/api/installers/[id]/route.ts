import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
    try {
      const { pathname } = new URL(req.url);
      const id = parseInt(pathname.split('/').pop() || '0'); // Extrae el ID desde la URL
  
      if (isNaN(id) || id === 0) {
        return new NextResponse(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
      }
  
      const installer = await prisma.installer.findUnique({
        where: { id },
      });
  
      if (!installer) {
        return new NextResponse(JSON.stringify({ error: 'Installer not found' }), { status: 404 });
      }
  
      return new NextResponse(JSON.stringify(installer), { status: 200 });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: 'Failed to fetch installer' }), { status: 500 });
    }
  };

export const PUT = async (req: NextRequest) => {
    try {
      const { pathname } = new URL(req.url);
      const id = parseInt(pathname.split('/').pop() || '0');
      const data = await req.json();
  
      if (isNaN(id) || id === 0) {
        return new NextResponse(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
      }
  
      const updatedInstaller = await prisma.installer.update({
        where: { id },
        data,
      });
  
      return new NextResponse(JSON.stringify(updatedInstaller), { status: 200 });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: 'Failed to update installer' }), { status: 400 });
    }
  };


export const DELETE = async (req: NextRequest) => {
    try {
      const { pathname } = new URL(req.url);
      const id = parseInt(pathname.split('/').pop() || '0');
  
      if (isNaN(id) || id === 0) {
        return new NextResponse(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
      }
  
      await prisma.installer.delete({
        where: { id },
      });
  
      return new NextResponse(null, { status: 204 });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: 'Failed to delete installer' }), { status: 400 });
    }
  };
