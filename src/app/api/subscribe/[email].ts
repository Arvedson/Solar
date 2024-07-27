import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;
  console.log('Received request for email:', email);

  if (req.method === 'GET') {
    try {
      console.log('Handling GET request...');
      const subscription = await prisma.subscription.findUnique({
        where: { email: email as string },
      });

      if (subscription) {
        console.log('Subscription found:', subscription);
        return res.status(200).json(subscription);
      } else {
        console.log('Subscription not found');
        return res.status(404).json({ error: 'Subscription not found' });
      }
    } catch (error) {
      console.error('Error finding subscription:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    console.log('Method not allowed');
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
