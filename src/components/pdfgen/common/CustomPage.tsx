import React, { ReactNode } from 'react';
import { Page, View, StyleSheet, Image } from '@react-pdf/renderer';

// Define los estilos
const styles = StyleSheet.create({
  page: {
    position: 'relative',
    width: '100%',
    height: '100vh',
  },
  borderTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
  },
  borderBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    zIndex: "100"
  },
  watermarkContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '60%',
    opacity: 0.1,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    paddingTop: 60,  // Asegúrate de ajustar el padding para no solapar las imágenes
    paddingBottom: 60,  // Asegúrate de ajustar el padding para no solapar las imágenes
    paddingHorizontal: 20,
  },
});

interface CustomPageProps {
  children: ReactNode;
}

// Componente CustomPage
const CustomPage: React.FC<CustomPageProps> = ({ children }) => (
  <Page size="A4" style={styles.page}>
    <View>
      <Image src="/images/borde arriba.png" style={styles.borderTop} />
    </View>
    <View>
      <Image src="/images/borde abajo.png" style={styles.borderBottom} />
    </View>
    <View style={styles.watermarkContainer}>
      <Image src="/images/(Español).png" style={styles.watermark} />
    </View>
    <View style={styles.content}>
      {children}
    </View>
  </Page>
);

export default CustomPage;
