import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

interface VisualizationAndSimulationsProps {
  renderizado3D: string;
  simulacionProduccion: string;
}

const VisualizationAndSimulations: React.FC<VisualizationAndSimulationsProps> = ({ renderizado3D, simulacionProduccion }) => (
  <View style={styles.section}>
    <Text>Renderizado 3D: {renderizado3D}</Text>
    <Text>Simulación de Producción: {simulacionProduccion}</Text>
  </View>
);

export default VisualizationAndSimulations;
