import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
    borderBottomStyle: 'solid',
    backgroundColor: '#f3f3f3',
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
  },
  headerCell: {
    margin: 'auto',
    textAlign: 'center',
    padding: 5,
  },
});

interface TableHeaderProps {
  headers: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => (
  <View style={styles.header}>
    {headers.map((header, index) => (
      <Text key={index} style={styles.headerCell}>{header}</Text>
    ))}
  </View>
);

export default TableHeader;
