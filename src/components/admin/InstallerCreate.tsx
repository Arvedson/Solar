// components/InstallerCreate.js
import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const InstallerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="cost_per_kw" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="serviceAreas" />
    </SimpleForm>
  </Create>
);

export default InstallerCreate;
