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
      <NumberInput source="DangerMppzone" />
      <NumberInput source="SafeMppzone" />
      <NumberInput source="MppTrackers" />
      <NumberInput source="voltajeMinstart" />
      <NumberInput source="voltajeEntrada" />
      <NumberInput source="voltajeNomina" />
      <NumberInput source="corrienteEntrada" />
      <NumberInput source="corrienteSalida" />
      <NumberInput source="voltajeSalida" />
      <NumberInput source="capacidadWsalida" />
      <NumberInput source="fases" />
      <TextInput source="temperaturaOperacion" label="Temperatura de Operación" />
      <NumberInput source="garantiaProducto" label="Garantía del Producto" />
      <NumberInput source="garantiaPotencia" label="Garantía de Potencia" />
    </SimpleForm>
  </Create>
);

export default MicroinversorCreate;
