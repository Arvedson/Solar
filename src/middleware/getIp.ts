import { NextRequest } from 'next/server';
import { getClientIp } from 'request-ip';

export function getClientIpWrapper(req: NextRequest) {
  // Usa requestIp para obtener la IP del cliente
  let clientIp;
  try {
    clientIp = getClientIp(req);
  } catch (error) {
    console.log("Error obteniendo la IP con request-ip:", error);
  }
  
  if (!clientIp) {
    clientIp = req.headers.get('x-forwarded-for') || req.headers.get('remote-addr') || '127.0.0.1';
  }
  console.log("IP obtenida:", clientIp);
  return clientIp;
}
