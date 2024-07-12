import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, ArrayInput, SimpleFormIterator, ReferenceInput, SelectInput, CreateProps } from 'react-admin';

const InstallerCreate: React.FC<CreateProps> = (props) => (
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
