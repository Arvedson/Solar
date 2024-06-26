import { fetchUtils } from 'react-admin';
import { CreateParams } from '../../types/dataProvider';  // Asegúrate de importar desde el archivo correcto

const apiUrl = '/api';
const httpClient = fetchUtils.fetchJson;

const create = (resource: string, params: CreateParams) => {
  console.log('Data to be sent:', params.data); // Log para verificar los datos
  return httpClient(`${apiUrl}/${resource}`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(params.data),
  }).then(({ json }) => ({
    data: { ...params.data, id: json.id },
  }));
};

export default create;
