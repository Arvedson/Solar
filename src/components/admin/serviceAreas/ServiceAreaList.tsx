import { FC } from 'react';
import { List, Datagrid, ReferenceField, TextField, ListProps } from 'react-admin';

const ServiceAreaList: FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="installerId" reference="installers">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="cityId" reference="cities">
        <TextField source="nombre" /> {/* Cambiado a "nombre" */}
      </ReferenceField>
    </Datagrid>
  </List>
);

export default ServiceAreaList;
