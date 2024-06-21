import { fetchUtils } from 'react-admin';
import { UpdateParams } from '../types/dataProvider';  // Importa la interfaz adecuada

const apiUrl = '/api';
const httpClient = fetchUtils.fetchJson;

const update = (resource: string, params: UpdateParams): Promise<{ data: any }> => {
  const url = `${apiUrl}/${resource}/${params.id}`;

  return httpClient(url, {
    method: 'PUT',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(params.data),
  }).then(({ json }) => ({ data: json }));
};

export default update;
