import { fetchUtils } from 'react-admin';
import { GetManyParams } from '../types/dataProvider';  // Importa la interfaz adecuada
import { stringify } from 'query-string';

const apiUrl = '/api';
const httpClient = fetchUtils.fetchJson;

const getMany = (resource: string, params: GetManyParams): Promise<{ data: any[] }> => {
  const query = {
    filter: JSON.stringify({ id: params.ids }),
  };
  const url = `${apiUrl}/${resource}?${stringify(query)}`;

  return httpClient(url).then(({ json }) => ({ data: json }));
};

export default getMany;
