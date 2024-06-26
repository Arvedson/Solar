import { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined;
    }
  }
}

// Para convertir este archivo en un módulo y evitar errores de declaración duplicada
export {};
