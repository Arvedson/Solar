import { List, Datagrid, TextField } from 'react-admin';

const EstadoList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nombre" label="Estado" />
    </Datagrid>
  </List>
);

export default EstadoList;
