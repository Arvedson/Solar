import * as React from 'react';
import { List, Datagrid, TextField, NumberField, ImageField, EditButton, DeleteButton, ListProps } from 'react-admin';

const PanelSolarList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="modelo" />
      <NumberField source="capacidadW" />
      <TextField source="fabricante" />
      <NumberField source="eficiencia" />
      <TextField source="dimensiones" />
      <NumberField source="peso" />
      <NumberField source="precio" />
      <ImageField source="imageUrl" title="Imagen del panel" />
      <TextField source="voltajeVoc" label="Voltaje Voc" />
      <TextField source="corrienteIsc" label="Corriente Isc" />
      <TextField source="voltajeVmp" label="Voltaje Vmp" />
      <TextField source="corrienteImp" label="Corriente Imp" />
      <TextField source="tipoCelda" label="Tipo de Celda" />
      <NumberField source="cantidadCeldas" label="Cantidad de Celdas" />
      <NumberField source="tolerancia" label="Tolerancia" />
      <TextField source="maxVoltajeSistema" label="Voltaje Máximo del Sistema" />
      <TextField source="temperaturaOperacion" label="Temperatura de Operación" />
      <NumberField source="garantiaProducto" label="Garantía del Producto" />
      <NumberField source="garantiaPotencia" label="Garantía de Potencia" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default PanelSolarList;
