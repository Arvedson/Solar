import { fetchUtils } from 'react-admin';
import { DeleteParams } from '../types/dataProvider';  // Importa la interfaz adecuada

const apiUrl = '/api';
const httpClient = fetchUtils.fetchJson;

const deleteResource = (resource: string, params: DeleteParams): Promise<{ data: any }> => {
  const url = `${apiUrl}/${resource}/${params.id}`;

  return httpClient(url, {
    method: 'DELETE',
  }).then(({ json }) => ({ data: json }));
};

export default deleteResource;
