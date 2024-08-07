import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
  },
});

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => (
  <View>
    <Text style={styles.subtitle}>{text}</Text>
  </View>
);

export default Subtitle;
