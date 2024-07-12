import getList from './getList';
import getOne from './getOne';
import create from './create';
import update from './update';
import deleteResource from './delete';
import getMany from './getMany';
import getManyReference from './getManyReference';
import { DataProvider } from '../../types/dataProvider';

const updateMany = async (resource: string, params: any) => {
  // Implementación dummy para cumplir con la interfaz
  return Promise.resolve({ data: [] });
};

const deleteMany = async (resource: string, params: any) => {
  // Implementación dummy para cumplir con la interfaz
  return Promise.resolve({ data: [] });
};

const dataProvider: DataProvider = {
  getList,
  getOne,
  create,
  update,
  delete: deleteResource,
  getMany,
  getManyReference,
  updateMany,
  deleteMany,
};

export default dataProvider;
