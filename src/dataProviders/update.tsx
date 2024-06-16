import { fetchUtils, DataProvider } from 'ra-core';
console.log("holaupdate")

const update = (apiUrl: string, httpClient = fetchUtils.fetchJson): DataProvider['update'] => async (resource, params) => {
    const id = params?.data?._id || params.id;
    if (!id) {
        console.error('ID is missing in the parameters');
        throw new Error('ID is required for update operation');
    }

    const url = `${apiUrl}/${resource}/${id}`;
    const { json } = await httpClient(url, {
        method: 'PUT',
        body: JSON.stringify(params.data),
        headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    return { data: { ...json.data, id: json.data._id } };
};

export default update;
