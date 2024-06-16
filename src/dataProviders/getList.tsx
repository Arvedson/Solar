import { GetListParams, GetListResult } from 'ra-core';
import Installer from '../models/Installer';
import dbConnect from '../lib/mongodb';

const getList = (apiUrl: string, httpClient: any) => async (resource: string, params: GetListParams): Promise<GetListResult> => {
  await dbConnect();

  const { page, perPage } = params.pagination;
  const { field, order } = params.sort;
  const sort = { [field]: order === 'ASC' ? 1 : -1 };
  
  const total = await Installer.countDocuments();
  const installers = await Installer.find()
    .sort(sort)
    .skip((page - 1) * perPage)
    .limit(perPage);
  
  return { data: installers.map(installer => ({ ...installer.toObject(), id: installer._id })), total };
};

export default getList;
