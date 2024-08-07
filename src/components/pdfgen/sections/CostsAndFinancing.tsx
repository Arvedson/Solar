import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

interface CostsAndFinancingProps {
  costoTotalSistema: number;
  subvenciones: number;
  costoNeto: number;
  financiamiento: string;
  periodoRetornoInversion: number;
}

const CostsAndFinancing: React.FC<CostsAndFinancingProps> = ({ costoTotalSistema, subvenciones, costoNeto, financiamiento, periodoRetornoInversion }) => (
  <View style={styles.section}>
    <Text>Costo Total del Sistema: ${costoTotalSistema}</Text>
    <Text>Subvenciones: ${subvenciones}</Text>
    <Text>Costo Neto: ${costoNeto}</Text>
    <Text>Financiamiento: {financiamiento}</Text>
    <Text>Periodo de Retorno de la Inversión: {periodoRetornoInversion} años</Text>
  </View>
);

export default CostsAndFinancing;
