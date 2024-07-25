import rateLimit from 'express-rate-limit';
import { getClientIpWrapper } from './getIp'; // Asegúrate de que la ruta sea correcta

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 3, // Limite cada IP a 3 solicitudes por "windowMs"
  message: 'Has excedido el límite de 3 solicitudes en 15 minutos.',
  standardHeaders: true, // Devolver información de limitación en las cabeceras `RateLimit-*`
  legacyHeaders: false, // Deshabilitar las cabeceras `X-RateLimit-*`
  keyGenerator: (req) => {
    const ip = getClientIpWrapper(req);
    console.log(`IP utilizada para limitación: ${ip}`);
    return ip; // Usa la IP del cliente para la limitación
  },

});
