import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

const Header: React.FC = () => (
  <View>
    <Text style={styles.header}>Propuesta de Instalación de Paneles Solares</Text>
  </View>
);

export default Header;
