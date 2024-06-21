import getList from './getList';
import getOne from './getOne';
import create from './create';
import update from './update';
import deleteResource from './delete';
import getMany from './getMAny';
import getManyReference from './getManyReference';
import { DataProvider } from '../types/dataProvider';

const dataProvider: DataProvider = {
  getList,
  getOne,
  create,
  update,
  delete: deleteResource,
  getMany,
  getManyReference,
};

export default dataProvider;
