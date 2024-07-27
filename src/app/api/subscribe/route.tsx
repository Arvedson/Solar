import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { minuteLimiter, hourlyLimiter, dailyLimiter } from '../../../middleware/rateLimit';
import { getClientIpWrapper } from '@/middleware/getIp';
import { sendEmail } from '@/utils/sendEmail';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const clientIp = getClientIpWrapper(req);
  console.log('Client IP:', clientIp);

  const next = () => {};

  const minuteLimit = await minuteLimiter(req, new NextResponse(), next);
  if (minuteLimit.status !== 200) {
    return NextResponse.json({ error: minuteLimit.message }, { status: minuteLimit.status });
  }

  const hourlyLimit = await hourlyLimiter(req, new NextResponse(), next);
  if (hourlyLimit.status !== 200) {
    return NextResponse.json({ error: hourlyLimit.message }, { status: hourlyLimit.status });
  }

  const dailyLimit = await dailyLimiter(req, new NextResponse(), next);
  if (dailyLimit.status !== 200) {
    return NextResponse.json({ error: dailyLimit.message }, { status: dailyLimit.status });
  }

  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const subscription = await prisma.subscription.create({
      data: {
        email,
      },
    });

    await sendEmail({
      to: email,
      subject: 'Bienvenido a Ququlkan Solar',
      text: `Hola, gracias por suscribirte a Ququlkan Solar. Si deseas desinscribirte, responde a este correo con la palabra "desinscribir".`,
      html: `<p>Hola,</p><p>Gracias por suscribirte a Ququlkan Solar.</p><p>Si deseas desinscribirte, responde a este correo con la palabra <strong>"desinscribir"</strong>.</p>`,
    });

    return NextResponse.json(subscription, { status: 201 });
  } catch (error) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Email is already subscribed' }, { status: 409 });
    }
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
