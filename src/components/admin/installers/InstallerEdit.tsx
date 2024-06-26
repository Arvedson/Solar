import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const InstallersEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <NumberInput source="cost_per_kw" />
    </SimpleForm>
  </Edit>
);

export default InstallersEdit;
