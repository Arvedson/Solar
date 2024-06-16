// pages/api/installers/[id]/put.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../../lib/mongodb';
import Installer from '../../../../models/Installer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  try {
    const installer = await Installer.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!installer) {
      return res.status(404).json({ success: false, message: 'Installer not found' });
    }
    res.status(200).json({ success: true, data: installer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
