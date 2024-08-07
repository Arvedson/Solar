import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

const Header: React.FC = () => (
  <View>
    <Text style={styles.header}>Propuesta de instalacion</Text>
  </View>
);

export default Header;
