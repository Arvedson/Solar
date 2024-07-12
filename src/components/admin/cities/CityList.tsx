import { List, Datagrid, TextField, ReferenceField, ListProps } from 'react-admin';

const CityList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nombre" label="Ciudad" />
      <ReferenceField source="estadoId" reference="estados" label="Estado">
        <TextField source="nombre" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default CityList;
