// app/api/installers/post.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../../lib/mongodb';
import Installer from '../../../../models/Installer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  try {
    const body = await req.json();
    const installer = await Installer.create(body);
    res.status(201).json({ success: true, data: installer });
  } catch (error) {
    res.status(400).json({ success: false, error: (error as Error).message });
  }
}
