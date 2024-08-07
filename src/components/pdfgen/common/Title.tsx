import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import Card from './Card';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <View>
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default Title;
