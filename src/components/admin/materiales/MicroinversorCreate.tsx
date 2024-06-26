import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, CreateProps } from 'react-admin';

const MicroinversorCreate: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="modelo" />
      <NumberInput source="capacidadW" />
      <TextInput source="fabricante" />
      <NumberInput source="eficiencia" />
      <TextInput source="dimensiones" />
      <NumberInput source="peso" />
      <NumberInput source="precio" />
      <TextInput source="imageUrl" label="URL de la Imagen" />
      <NumberInput source="voltajeEntrada" />
      <NumberInput source="voltajeSalida" />
      <NumberInput source="fases" />
    </SimpleForm>
  </Create>
);

export default MicroinversorCreate;
