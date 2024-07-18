import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, ImageField, EditProps } from 'react-admin';

const MicroinversorEdit: React.FC<EditProps> = (props) => (
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
  </Edit>
);

export default MicroinversorEdit;
