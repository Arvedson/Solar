import * as React from 'react';
import { List, Datagrid, TextField, NumberField, ImageField, EditButton, DeleteButton, ListProps, TextInput, NumberInput, Filter } from 'react-admin';

const MicroinversorFilter: React.FC = (props) => (
  // ARREGLAR FILTRADO 
  <Filter {...props}>
    <TextInput label="Modelo" source="modelo" alwaysOn />
    <TextInput label="Fabricante" source="fabricante" />
    <NumberInput label="Capacidad" source="capacidadW" />
    <NumberInput label="Eficiencia" source="eficiencia" />
    <NumberInput label="Precio" source="precio" />
  </Filter>
);

const MicroinversorList: React.FC<ListProps> = (props) => (
  <List {...props} filters={<MicroinversorFilter />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="modelo" />
      <NumberField source="capacidadW" />
      <TextField source="fabricante" />
      <NumberField source="eficiencia" />
      <TextField source="dimensiones" />
      <NumberField source="peso" />
      <NumberField source="precio" />
      <ImageField source="imageUrl" title="Imagen del microinversor" />
      <NumberField source="voltajeEntrada" />
      <NumberField source="corrienteEntrada" />
      <NumberField source="corrienteSalida" />
      <NumberField source="voltajeSalida" />
      <NumberField source="fases" />
      <TextField source="temperaturaOperacion" label="Temperatura de Operación" />
      <NumberField source="garantiaProducto" label="Garantía del Producto" />
      <NumberField source="garantiaPotencia" label="Garantía de Potencia" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default MicroinversorList;
