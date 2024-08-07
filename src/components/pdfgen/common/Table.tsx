import React, { ReactNode } from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  table: {
    display: 'flex', // 'table' no es un valor aceptado por ReactPDF, usamos 'flex' en su lugar
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
});

interface TableProps {
  children: ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => (
  <View style={styles.table}>
    {children}
  </View>
);

export default Table;
