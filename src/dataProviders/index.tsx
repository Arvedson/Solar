import { fetchUtils, DataProvider } from 'ra-core';
import getList from './getList';
import getOne from './getOne';
import create from './create';
import update from './update';
import deleteResource from './delete';

const createDataProvider = (apiUrl: string): DataProvider => ({
  getList: getList(apiUrl, fetchUtils.fetchJson),
  getOne: getOne(apiUrl, fetchUtils.fetchJson),
  create: create(apiUrl, fetchUtils.fetchJson),
  update: update(apiUrl, fetchUtils.fetchJson),
  delete: deleteResource(apiUrl, fetchUtils.fetchJson),
});

export default createDataProvider;
