import { CreateParams, CreateResult } from 'ra-core';
import Installer from '../models/Installer';
import dbConnect from '../lib/mongodb';

const create = (apiUrl: string, httpClient: any) => async (resource: string, params: CreateParams): Promise<CreateResult> => {
  await dbConnect();

  const createdInstaller = await Installer.create(params.data);
  return { data: { ...createdInstaller.toObject(), id: createdInstaller._id } };
};

export default create;
