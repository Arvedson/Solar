import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, ImageField } from 'react-admin';

const PanelSolarEdit: React.FC = (props) => (
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
      <ImageField source="imageUrl" title="Imagen del panel" />
      <NumberInput source="voltajeVoc" label="Voltaje Voc" />
      <NumberInput source="corrienteIsc" label="Corriente Isc" />
      <NumberInput source="voltajeVmp" label="Voltaje Vmp" />
      <NumberInput source="corrienteImp" label="Corriente Imp" />
      <TextInput source="tipoCelda" label="Tipo de Celda" />
      <NumberInput source="cantidadCeldas" label="Cantidad de Celdas" />
      <NumberInput source="tolerancia" label="Tolerancia" />
      <NumberInput source="maxVoltajeSistema" label="Voltaje Máximo del Sistema" />
      <TextInput source="temperaturaOperacion" label="Temperatura de Operación" />
      <NumberInput source="garantiaProducto" label="Garantía del Producto" />
      <NumberInput source="garantiaPotencia" label="Garantía de Potencia" />
    </SimpleForm>
  </Edit>
);

export default PanelSolarEdit;
