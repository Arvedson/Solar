import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

interface WarrantiesAndServicesProps {
  garantiaPaneles: string;
  garantiaInversor: string;
  garantiaInstalacion: string;
  mantenimiento: string;
}

const WarrantiesAndServices: React.FC<WarrantiesAndServicesProps> = ({ garantiaPaneles, garantiaInversor, garantiaInstalacion, mantenimiento }) => (
  <View style={styles.section}>
    <Text>Garantía de Paneles: {garantiaPaneles}</Text>
    <Text>Garantía del Inversor: {garantiaInversor}</Text>
    <Text>Garantía de la Instalación: {garantiaInstalacion}</Text>
    <Text>Mantenimiento: {mantenimiento}</Text>
  </View>
);

export default WarrantiesAndServices;
