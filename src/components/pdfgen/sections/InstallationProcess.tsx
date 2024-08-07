import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

interface InstallationProcessProps {
  tiempoEstimadoInstalacion: string;
  requerimientosPermisos: string;
  procedimientoInstalacion: string;
}

const InstallationProcess: React.FC<InstallationProcessProps> = ({ tiempoEstimadoInstalacion, requerimientosPermisos, procedimientoInstalacion }) => (
  <View style={styles.section}>
    <Text>Tiempo Estimado de Instalación: {tiempoEstimadoInstalacion}</Text>
    <Text>Requerimientos de Permisos: {requerimientosPermisos}</Text>
    <Text>Procedimiento de Instalación: {procedimientoInstalacion}</Text>
  </View>
);

export default InstallationProcess;
