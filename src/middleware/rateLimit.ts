import rateLimit from 'express-rate-limit';
import { getClientIpWrapper } from './getIp'; // Ensure this path is correct

const minuteLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 2, // Limit each IP to x requests per minute
  message: 'Has excedido el límite de 5 solicitudes en 1 minuto.',
  standardHeaders: true, // Return rate limit info in the RateLimit-* headers
  legacyHeaders: false, // Disable the X-RateLimit-* headers
  keyGenerator: (req) => {
    const ip = getClientIpWrapper(req);
    console.log(`IP utilizada para limitación: ${ip}`);
    return ip; // Use the client IP for rate limiting
  },
  handler: (req, res, next, options) => {
    console.log('Minute limit reached for IP:', getClientIpWrapper(req));
    res.status(options.statusCode).send(options.message);
  }
});

const hourlyLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to x requests per hour
  message: 'Has excedido el límite de 30 solicitudes en 1 hora.',
  standardHeaders: true, // Return rate limit info in the RateLimit-* headers
  legacyHeaders: false, // Disable the X-RateLimit-* headers
  keyGenerator: (req) => {
    const ip = getClientIpWrapper(req);
    console.log(`IP utilizada para limitación: ${ip}`);
    return ip; // Use the client IP for rate limiting
  },
  handler: (req, res, next, options) => {
    console.log('Hourly limit reached for IP:', getClientIpWrapper(req));
    res.status(options.statusCode).send(options.message);
  }
});

const dailyLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 1 day
  max: 10, // Limit each IP to x requests per day
  message: 'Has excedido el límite de 100 solicitudes en 1 día.',
  standardHeaders: true, // Return rate limit info in the RateLimit-* headers
  legacyHeaders: false, // Disable the X-RateLimit-* headers
  keyGenerator: (req) => {
    const ip = getClientIpWrapper(req);
    console.log(`IP utilizada para limitación: ${ip}`);
    return ip; // Use the client IP for rate limiting
  },
  handler: (req, res, next, options) => {
    console.log('Daily limit reached for IP:', getClientIpWrapper(req));
    res.status(options.statusCode).send(options.message);
  }
});

export { minuteLimiter, hourlyLimiter, dailyLimiter };
