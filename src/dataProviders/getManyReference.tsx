import { GetManyReferenceParams, GetManyReferenceResult } from 'ra-core';
import Installer from '../models/Installer';
import dbConnect from '../lib/mongodb';

const getManyReference = (apiUrl: string, httpClient: any) => async (resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult> => {
  await dbConnect();

  const { page, perPage } = params.pagination;
  const { field, order } = params.sort;
  const sort = { [field]: order === 'ASC' ? 1 : -1 };
  
  const total = await Installer.countDocuments({ [params.target]: params.id });
  const installers = await Installer.find({ [params.target]: params.id })
    .sort(sort)
    .skip((page - 1) * perPage)
    .limit(perPage);

  return { data: installers.map(installer => ({ ...installer.toObject(), id: installer._id })), total };
};

export default getManyReference;
