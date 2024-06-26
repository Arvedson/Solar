import * as React from 'react';
import { List, Datagrid, TextField, NumberField, ImageField, EditButton, DeleteButton, ListProps } from 'react-admin';

const MicroinversorList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="modelo" />
      <NumberField source="capacidadW" />
      <TextField source="fabricante" />
      <NumberField source="eficiencia" />
      <TextField source="dimensiones" />
      <NumberField source="peso" />
      <NumberField source="precio" />
      <ImageField source="imageUrl" title="Imagen del microinversor" />
      <NumberField source="voltajeEntrada" />
      <NumberField source="voltajeSalida" />
      <NumberField source="fases" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default MicroinversorList;
