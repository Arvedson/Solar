import { NextRequest, NextResponse } from 'next/server';
import { getClientIp } from 'request-ip';

export function getClientIpWrapper(req: NextRequest | any): string {
  let clientIp: string | null = null;
  try {
    clientIp = getClientIp(req); // Casting here because request-ip doesn't have types for NextRequest
  } catch (error) {
    console.log("Error obtaining IP with request-ip:", error);
  }

  if (!clientIp) {
    clientIp = req.headers['x-forwarded-for'] || req.headers['remote-addr'] || '127.0.0.1';
  }
  console.log("IP obtained:", clientIp);
  return clientIp as string;
}

function rateLimit(windowMs: number, max: number, message: string) {
  const hits = new Map<string, number[]>();

  return async (req: NextRequest | any, res: any, next: () => void) => {
    const ip = getClientIpWrapper(req);
    const currentTime = Date.now();

    if (!hits.has(ip)) {
      hits.set(ip, []);
    }

    const timestamps = hits.get(ip) || [];
    hits.set(ip, timestamps.filter(timestamp => currentTime - timestamp < windowMs));

    if (hits.get(ip)!.length >= max) {
      console.log(`Limit reached for IP: ${ip}`);
      return { status: 429, message };
    } else {
      hits.get(ip)!.push(currentTime);
      if (next) next();
      return { status: 200 };
    }
  };
}

const minuteLimiter = rateLimit(60 * 1000, 2, 'You have exceeded the limit of 2 requests per minute.');
const hourlyLimiter = rateLimit(60 * 60 * 1000, 5, 'You have exceeded the limit of 5 requests per hour.');
const dailyLimiter = rateLimit(24 * 60 * 60 * 1000, 10, 'You have exceeded the limit of 10 requests per day.');

export { minuteLimiter, hourlyLimiter, dailyLimiter };
