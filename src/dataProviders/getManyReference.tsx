// src/dataProviders/getManyReference.ts
import { fetchUtils, DataProvider } from 'ra-core';
import { stringify } from 'query-string';

const getManyReference = (apiUrl: string, httpClient = fetchUtils.fetchJson, countHeader: string = 'Content-Range'): DataProvider['getManyReference'] => async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const rangeStart = (page - 1) * perPage;
    const rangeEnd = page * perPage - 1;

    const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([rangeStart, rangeEnd]),
        filter: JSON.stringify({
            ...params.filter,
            [params.target]: params.id,
        }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const options = countHeader === 'Content-Range'
        ? {
            headers: new Headers({
                Range: `${resource}=${rangeStart}-${rangeEnd}`,
            }),
        }
        : {};

    const { headers, json } = await httpClient(url, options);
    if (!headers.has(countHeader)) {
        throw new Error(
            `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`,
        );
    }
    return {
        data: json.data.map((record: any) => ({ ...record, id: record._id })),
        total: countHeader === 'Content-Range'
            ? parseInt(headers.get('content-range')!.split('/').pop()!, 10)
            : parseInt(headers.get(countHeader.toLowerCase())!),
    };
};

export default getManyReference;
