import { DeleteParams, DeleteResult } from 'ra-core';
import Installer from '../models/Installer';
import dbConnect from '../lib/mongodb';

const deleteResource = (apiUrl: string, httpClient: any) => async (resource: string, params: DeleteParams): Promise<DeleteResult> => {
  await dbConnect();

  const deletedInstaller = await Installer.findByIdAndDelete(params.id);
  if (!deletedInstaller) {
    throw new Error('Installer not found');
  }
  return { data: { ...deletedInstaller.toObject(), id: deletedInstaller._id } };
};

export default deleteResource;
