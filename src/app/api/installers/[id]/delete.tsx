import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/mongodb';
import Installer from '../../../../models/Installer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case 'DELETE':
      try {
        const deletedInstaller = await Installer.findByIdAndDelete(id);
        if (!deletedInstaller) {
          return res.status(404).json({ success: false, message: 'Installer not found' });
        }
        res.status(200).json({ success: true, data: deletedInstaller });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
