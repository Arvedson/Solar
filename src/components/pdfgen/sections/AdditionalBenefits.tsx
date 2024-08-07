import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

interface AdditionalBenefitsProps {
  programaReferidos: string;
  bateriaAlmacenamiento: string;
  posibilidadExpansion: string;
}

const AdditionalBenefits: React.FC<AdditionalBenefitsProps> = ({ programaReferidos, bateriaAlmacenamiento, posibilidadExpansion }) => (
  <View style={styles.section}>
    <Text>Programa de Referidos: {programaReferidos}</Text>
    <Text>Batería de Almacenamiento: {bateriaAlmacenamiento}</Text>
    <Text>Posibilidad de Expansión: {posibilidadExpansion}</Text>
  </View>
);

export default AdditionalBenefits;
