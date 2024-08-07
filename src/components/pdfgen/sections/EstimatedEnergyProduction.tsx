import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import Card from '../common/Card';
import Title from '../common/Title';
import pdfStyles from '../styles/pdfStyles';


const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

interface EstimatedEnergyProductionProps {
  produccionAnual: number;
  ahorroAnualEstimado: number;
}

const EstimatedEnergyProduction: React.FC<EstimatedEnergyProductionProps> = ({ produccionAnual, ahorroAnualEstimado }) => (
  <Card title=''>
    <Title text="Producción Energética Estimada" />
    <Text style={pdfStyles.text}>Producción Anual: {produccionAnual} kWh</Text>
    <Text style={pdfStyles.text}>Ahorro Anual Estimado: ${ahorroAnualEstimado}</Text>
  </Card>
);

export default EstimatedEnergyProduction;
