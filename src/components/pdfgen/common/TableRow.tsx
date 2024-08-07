import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

const TableRow: React.FC = ({ children }) => (
  <View style={styles.row}>
    {children}
  </View>
);

export default TableRow;
