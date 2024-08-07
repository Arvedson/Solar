import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import pdfStyles from '../styles/pdfStyles';

interface CardProps {
  title: string;
  children: React.ReactNode;
  
}

const Card: React.FC<CardProps> = ({ title, children }) => (
  <View style={pdfStyles.card}>
    <Text style={pdfStyles.title}>{title}</Text>
    {children}
  </View>
);

export default Card;
