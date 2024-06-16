// src/dataProviders/getOne.ts
import { fetchUtils, DataProvider } from 'ra-core';

const getOne = (apiUrl: string, httpClient = fetchUtils.fetchJson): DataProvider['getOne'] => async (resource, params) => {
    const url = `${apiUrl}/${resource}?id=${params.id}`;
    const { json } = await httpClient(url);
    return { data: { ...json.data, id: json.data._id } };
};

export default getOne;
