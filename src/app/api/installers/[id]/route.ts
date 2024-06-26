import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../../lib/prisma';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { range = '[0,9]', sort = '["id","ASC"]', filter = '{}' } = req.query;
    const [rangeStart, rangeEnd] = JSON.parse(range as string);
    const [sortField, sortOrder] = JSON.parse(sort as string);
    const filters = JSON.parse(filter as string);

    const total = await prisma.installer.count({
      where: filters,
    });

    const installers = await prisma.installer.findMany({
      where: filters,
      orderBy: {
        [sortField]: sortOrder.toLowerCase(),
      },
      skip: rangeStart,
      take: rangeEnd - rangeStart + 1,
    });

    res.setHeader('Content-Range', `installers ${rangeStart}-${rangeEnd}/${total}`);
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.status(200).json(installers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching installers' });
  }
}
