import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  cell: {
    margin: 'auto',
    textAlign: 'center',
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: '#bfbfbf',
    borderRightStyle: 'solid',
    flexGrow: 1,
  },
});

interface TableCellProps {
  content: string;
}

const TableCell: React.FC<TableCellProps> = ({ content }) => (
  <Text style={styles.cell}>{content}</Text>
);

export default TableCell;
