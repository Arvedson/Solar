import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Header from './common/Header';
import Footer from './common/Footer';
import Title from './common/Title';
import ClientInfo from './sections/ClientInfo';
import EnergyConsumptionAnalysis from './sections/EnergyConsumptionAnalysis';
import SolarSystemDetails from './sections/SolarSystemDetails';
import EstimatedEnergyProduction from './sections/EstimatedEnergyProduction';
import CostsAndFinancing from './sections/CostsAndFinancing';
import EnvironmentalImpact from './sections/EnvironmentalImpact';
import WarrantiesAndServices from './sections/WarrantiesAndServices';
import InstallationProcess from './sections/InstallationProcess';
import AdditionalBenefits from './sections/AdditionalBenefits';
import VisualizationAndSimulations from './sections/VisualizationAndSimulations';
import CustomPage from './common/CustomPage';
import { FormValues } from '../../../types/FormValues';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
    position: 'relative',
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
    borderBottom: '1px solid #EEE',
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
});

const SolarPDF: React.FC<FormValues> = (props) => (
  <Document>
    <CustomPage>
      <Header />
      <ClientInfo {...props} />
      <EnergyConsumptionAnalysis 
        consumoAnual={props.consumoAnual} 
        costoMensualElectricidad={props.costoMensualElectricidad} 
        costoAnualElectricidad={props.costoAnualElectricidad} 
      />
    </CustomPage>

    <CustomPage>
      <SolarSystemDetails {...props} />
      <EstimatedEnergyProduction {...props} />
    </CustomPage>

    <CustomPage>
      <Title text="Costos y Financiamiento" />
      <CostsAndFinancing {...props} />
    </CustomPage>

    <CustomPage>
      <Title text="Impacto Ambiental" />
      <EnvironmentalImpact {...props} />
    </CustomPage>

    <CustomPage>
      <Title text="Garantías y Servicios" />
      <WarrantiesAndServices {...props} />
    </CustomPage>

    <CustomPage>
      <Title text="Proceso de Instalación" />
      <InstallationProcess {...props} />
    </CustomPage>

    <CustomPage>
      <Title text="Beneficios Adicionales" />
      <AdditionalBenefits {...props} />
    </CustomPage>

    <CustomPage>
      <Title text="Visualización y Simulaciones" />
      <VisualizationAndSimulations {...props} />
    </CustomPage>

    <CustomPage>
      <Footer />
    </CustomPage>
  </Document>
);

export default SolarPDF;
