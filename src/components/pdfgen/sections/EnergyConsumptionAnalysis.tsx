import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import generateChartImage from '../charts/generateChartImage'; // Asegúrate de que la ruta es correcta
import Card from './../common/Card';
import Title from '../common/Title';
import pdfStyles from '../styles/pdfStyles';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  analysisImage: {
    width: 100,
    height: 100,
    transform: "translateY(-25px)",
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  chartContainer: {
    height: "auto",
    marginTop: 10,
    width: '100%',
  },
});

interface EnergyConsumptionAnalysisProps {
  consumoAnual: number;
  costoMensualElectricidad: number[];
  costoAnualElectricidad: number;
}

const EnergyConsumptionAnalysis: React.FC<EnergyConsumptionAnalysisProps> = ({ consumoAnual, costoMensualElectricidad, costoAnualElectricidad }) => {
  const [chartImage, setChartImage] = useState<string>('');

  useEffect(() => {
    const generateImage = async () => {
      console.log('Generating image in EnergyConsumptionAnalysis for monthly costs:', costoMensualElectricidad);
      try {
        const image = await generateChartImage(costoMensualElectricidad);
        console.log('Generated chart image in EnergyConsumptionAnalysis:', image);
        setChartImage(image);
      } catch (error) {
        console.error('Error generating chart image in EnergyConsumptionAnalysis:', error);
      }
    };

    generateImage();
  }, [costoMensualElectricidad]);

  return (
    <Card title="">
      <Title text="Análisis de Costo de Electricidad" />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={pdfStyles.text}>Consumo Anual: {consumoAnual} kWh</Text>
          <Text style={pdfStyles.text}>Costo Anual de Electricidad: ${costoAnualElectricidad} MXN</Text>
        </View>
        <Image src="/images/analisis.png" style={styles.analysisImage} />
      </View>
      {chartImage && (
        <View style={styles.chartContainer}>
          <Image style={styles.image} src={chartImage} />
        </View>
      )}
    </Card>
  );
};

export default EnergyConsumptionAnalysis;
