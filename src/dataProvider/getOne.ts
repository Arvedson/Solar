import { fetchUtils } from 'react-admin';
import { GetOneParams } from '../types/dataProvider';  // Asegúrate de importar desde el archivo correcto

const apiUrl = '/api';
const httpClient = fetchUtils.fetchJson;

const getOne = (resource: string, params: GetOneParams) =>
  httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
    data: json,
  }));

export default getOne;
