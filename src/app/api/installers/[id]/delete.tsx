// app/api/installers/[id]/delete.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../../lib/mongodb';
import Installer from '../../../../models/Installer';
import mongoose from 'mongoose';

console.log("hola delete"); // Verificar que se está ejecutando

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { id } = req.query;
  console.log(`Request received with ID: ${id}`); // Verificar que el ID se recibe correctamente

  await connectToDatabase();

  try {
    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      console.log('Invalid ID format:', id); // Verificar el formato del ID
      return res.status(400).json({ success: false, error: 'Invalid ID format' });
    }

    const installer = await Installer.findByIdAndDelete(id);
    if (!installer) {
      console.log('Installer not found'); // Verificar si el instalador no se encuentra
      return res.status(404).json({ success: false, error: 'Installer not found' });
    }

    console.log('Delete successful:', installer); // Verificar la eliminación exitosa
    return res.status(200).json({ success: true, data: installer });
  } catch (error) {
    console.error('Error during deletion:', error); // Verificar si hay un error
    return res.status(400).json({ success: false, error: (error as Error).message });
  }
}
