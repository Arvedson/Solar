import React from 'react';
import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import Header from './common/Header';
import GeneralInfo from './sections/GeneralInfo';
// Importa los demás componentes de las secciones

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
});

interface PDFProps {
  nombre: string;
  direccion: string;
  fechaPropuesta: string;
  representanteVentas: string;
  // Otros props necesarios para las secciones
}

const SolarPDF: React.FC<PDFProps> = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <GeneralInfo 
        nombre={props.nombre} 
        direccion={props.direccion} 
        fechaPropuesta={props.fechaPropuesta} 
        representanteVentas={props.representanteVentas} 
      />
      {/* Renderiza los demás componentes de las secciones aquí */}
    </Page>
  </Document>
);

export default SolarPDF;
