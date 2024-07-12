import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, CreateProps } from 'react-admin';

const CityCreate: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" label="Ciudad" />
      <ReferenceInput source="estadoId" reference="estados" label="Estado">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default CityCreate;
