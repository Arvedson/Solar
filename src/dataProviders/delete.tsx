import { fetchUtils, DataProvider } from 'ra-core';

const deleteResource = (apiUrl: string, httpClient = fetchUtils.fetchJson): DataProvider['delete'] => async (resource, params) => {
    console.log("holadelete");
    const id = params.id;
    if (!id) {
        console.error('ID is missing in the parameters');
        throw new Error('ID is required for delete operation');
    }

    const url = `${apiUrl}/${resource}/${id}`;
    console.log('Delete URL:', url);

    try {
        const { json } = await httpClient(url, {
            method: 'DELETE',
        });

        console.log('Response JSON:', JSON.stringify(json, null, 2));
        return { data: { id } };
    } catch (error) {
        console.error('Delete error:', error);
        throw error;
    }
};

export default deleteResource;
