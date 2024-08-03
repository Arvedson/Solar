import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

interface GeneralInfoProps {
  nombre: string;
  direccion: string;
  fechaPropuesta: string;
  representanteVentas: string;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ nombre, direccion, fechaPropuesta, representanteVentas }) => (
  <View style={styles.section}>
    <Text>Nombre del Cliente: {nombre}</Text>
    <Text>Dirección del Inmueble: {direccion}</Text>
    <Text>Fecha de la Propuesta: {fechaPropuesta}</Text>
    <Text>Representante de Ventas: {representanteVentas}</Text>
  </View>
);

export default GeneralInfo;
