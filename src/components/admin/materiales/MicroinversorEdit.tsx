import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, ImageField } from 'react-admin';

const MicroinversorEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="modelo" />
      <NumberInput source="capacidadW" />
      <TextInput source="fabricante" />
      <NumberInput source="eficiencia" />
      <TextInput source="dimensiones" />
      <NumberInput source="peso" />
      <NumberInput source="precio" />
      <TextInput source="imageUrl" />
      <ImageField source="imageUrl" title="Imagen del microinversor" />
      <NumberInput source="voltajeEntrada" />
      <NumberInput source="voltajeSalida" />
      <NumberInput source="fases" />
    </SimpleForm>
  </Edit>
);

export default MicroinversorEdit;
