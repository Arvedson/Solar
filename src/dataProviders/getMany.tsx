import { GetManyParams, GetManyResult } from 'ra-core';
import Installer from '../models/Installer';
import dbConnect from '../lib/mongodb';

const getMany = (apiUrl: string, httpClient: any) => async (resource: string, params: GetManyParams): Promise<GetManyResult> => {
  await dbConnect();

  const installers = await Installer.find({ _id: { $in: params.ids } });
  return { data: installers.map(installer => ({ ...installer.toObject(), id: installer._id })) };
};

export default getMany;
