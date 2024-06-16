import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/mongodb';
import Installer from '../../../../models/Installer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const installer = new Installer(req.body);
        await installer.save();
        res.status(201).json({ success: true, data: installer });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
