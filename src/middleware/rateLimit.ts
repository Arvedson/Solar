import rateLimit from 'express-rate-limit';
import { getClientIpWrapper } from './getIp'; // Ensure this path is correct

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 3 requests per windowMs
  message: 'Has excedido el límite de 3 solicitudes en 15 minutos.',
  standardHeaders: true, // Return rate limit info in the RateLimit-* headers
  legacyHeaders: false, // Disable the X-RateLimit-* headers
  keyGenerator: (req) => {
    const ip = getClientIpWrapper(req);
    console.log(`IP utilizada para limitación: ${ip}`);
    return ip; // Use the client IP for rate limiting
  },
  handler: (req, res, next, options) => {
    console.log('Limit reached for IP:', getClientIpWrapper(req));
    res.status(options.statusCode).send(options.message);
  }
});
