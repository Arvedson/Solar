import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const EstadoEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" label="Estado" />
      <DateInput source="createdAt" label="Fecha de Creación" disabled />
      <DateInput source="updatedAt" label="Última Actualización" disabled />
    </SimpleForm>
  </Edit>
);

export default EstadoEdit;
