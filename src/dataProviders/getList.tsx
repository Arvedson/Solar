import { fetchUtils, DataProvider } from 'ra-core';
console.log("holagetlist")

const getList = (apiUrl: string, httpClient = fetchUtils.fetchJson): DataProvider['getList'] => async (resource, params) => {
    console.log("holagetlist")
    const url = `${apiUrl}/${resource}?${params}`;
    const { json } = await httpClient(url);
    return {
        data: json.data.map((item: any) => ({ ...item, id: item._id })), // Mapear _id a id
        total: json.total,
    };
};

export default getList;
