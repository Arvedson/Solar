// src/app/api/test/route.tsx
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const user = { message: 'API funcionando correctamente' };
  return new Response(JSON.stringify(user), { status: 200 });
}
