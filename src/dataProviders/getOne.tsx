import { GetOneParams, GetOneResult } from 'ra-core';
import Installer from '../models/Installer';
import dbConnect from '../lib/mongodb';

const getOne = (apiUrl: string, httpClient: any) => async (resource: string, params: GetOneParams): Promise<GetOneResult> => {
  await dbConnect();

  const installer = await Installer.findById(params.id);
  if (!installer) {
    throw new Error('Installer not found');
  }
  return { data: { ...installer.toObject(), id: installer._id } };
};

export default getOne;
