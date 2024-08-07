import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import Card from '../common/Card';
import Title from '../common/Title';
import pdfStyles from '../styles/pdfStyles';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});

interface SolarSystemDetailsProps {
  tamanoSistema: number;
  panelesSolares: string;
  inversor: string;
  orientacionPaneles: string;
}

const SolarSystemDetails: React.FC<SolarSystemDetailsProps> = ({ tamanoSistema, panelesSolares, inversor, orientacionPaneles }) => (
  <Card title=''>
    <Title text="Detalles del Sistema Solar" />
    <Text style={pdfStyles.text}>Tamaño del Sistema: {tamanoSistema} kW</Text>
    <Text style={pdfStyles.text}>Paneles Solares: {panelesSolares}</Text>
    <Text style={pdfStyles.text}>Inversor: {inversor}</Text>
    <Text style={pdfStyles.text}>Orientación de los Paneles: {orientacionPaneles}</Text>
  </Card>
);

export default SolarSystemDetails;
