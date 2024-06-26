import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { GetListParams } from '../../types/dataProvider';

const apiUrl = '/api';
const httpClient = fetchUtils.fetchJson;

const getList = (resource: string, params: GetListParams): Promise<{ data: any; total: number }> => {
  const { page, perPage } = params.pagination;
  const { field, order } = params.sort;
  const query = {
    sort: JSON.stringify([field, order]),
    range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    filter: JSON.stringify(params.filter),
  };
  const url = `${apiUrl}/${resource}?${stringify(query)}`;

  return httpClient(url).then(({ headers, json }) => {
    const contentRange = headers.get('content-range');
    if (!contentRange) {
      throw new Error('Missing content-range header');
    }
    const total = parseInt(contentRange.split('/').pop() as string, 10);

    return {
      data: json,
      total,
    };
  });
};

export default getList;
