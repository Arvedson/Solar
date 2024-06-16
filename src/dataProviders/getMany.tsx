// src/dataProviders/getMany.ts
import { fetchUtils, DataProvider } from 'ra-core';
import { stringify } from 'query-string';
console.log("hola4")

const getMany = (apiUrl: string, httpClient = fetchUtils.fetchJson): DataProvider['getMany'] => async (resource, params) => {
    const query = {
        filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return {
        data: json.data.map((record: any) => ({ ...record, id: record._id })),
    };
};

export default getMany;
