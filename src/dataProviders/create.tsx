import { fetchUtils } from 'ra-core';
console.log("holacreate")

const create = (apiUrl: string, httpClient = fetchUtils.fetchJson) => async (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}`;
    const { json } = await httpClient(url, {
        method: 'POST',
        body: JSON.stringify(params.data),
    });
    return {
        data: { ...params.data, id: json.data._id },
    };
};

export default create;
