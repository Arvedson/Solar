import React from 'react';
import { List, Datagrid, TextField, ListProps } from 'react-admin';

const EstadoList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nombre" label="Estado" />
    </Datagrid>
  </List>
);

export default EstadoList;
