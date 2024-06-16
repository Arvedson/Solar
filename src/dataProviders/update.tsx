import { UpdateParams, UpdateResult } from 'ra-core';
import Installer from '../models/Installer';
import dbConnect from '../lib/mongodb';

const update = (apiUrl: string, httpClient: any) => async (resource: string, params: UpdateParams): Promise<UpdateResult> => {
  await dbConnect();

  const updatedInstaller = await Installer.findByIdAndUpdate(params.id, params.data, { new: true, runValidators: true });
  if (!updatedInstaller) {
    throw new Error('Installer not found');
  }
  return { data: { ...updatedInstaller.toObject(), id: updatedInstaller._id } };
};

export default update;
