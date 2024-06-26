import { Create, SimpleForm, TextInput, NumberInput, ArrayInput, SimpleFormIterator, ReferenceInput, SelectInput } from 'react-admin';

const InstallerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <NumberInput source="cost_per_kw" />
      <ArrayInput source="serviceAreas">
        <SimpleFormIterator>
          <ReferenceInput source="cityId" reference="cities">
            <SelectInput optionText="name" />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export default InstallerCreate;
