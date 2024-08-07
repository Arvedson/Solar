import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 20,
  },
});

const Footer: React.FC = () => (
  <View>
    <Text style={styles.footer}>© Qukulkan Solar. Todos los derechos reservados.</Text>
  </View>
);

export default Footer;
