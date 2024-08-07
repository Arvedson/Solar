import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

interface EnvironmentalImpactProps {
  reduccionCO2Anual: number;
  equivalentesArbolesPlantados: number;
}

const EnvironmentalImpact: React.FC<EnvironmentalImpactProps> = ({ reduccionCO2Anual, equivalentesArbolesPlantados }) => (
  <View style={styles.section}>
    <Text>Reducción de CO2 Anual: {reduccionCO2Anual} toneladas</Text>
    <Text>Equivalente en Árboles Plantados: {equivalentesArbolesPlantados} árboles</Text>
  </View>
);

export default EnvironmentalImpact;
