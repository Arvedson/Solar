import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, CreateProps } from 'react-admin';

const PanelSolarCreate: React.FC<CreateProps> = (props) => (
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
  </Create>
);

export default PanelSolarCreate;
