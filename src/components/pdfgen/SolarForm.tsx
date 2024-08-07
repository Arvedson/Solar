import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SolarPDF from './SolarPDF';
import generateChartImage from './charts/generateChartImage';
import PersonalInfoSection from './formsections/PersonalInfoSection';
import SystemDetailsSection from './formsections/SystemDetailsSection';
import FinanceSection from './formsections/FinanceSection';
import MaintenanceSection from './formsections/MaintenanceSection';
import VisualizationSection from './formsections/VisualizationSection';

interface FormValues {
  nombre: string;
  direccion: string;
  fechaPropuesta: string;
  representanteVentas: string;
  contacto: string;
  consumoAnual: number;
  costoMensualElectricidad: number[];
  costoAnualElectricidad: number;
  tamanoSistema: number;
  panelesSolares: string;
  inversor: string;
  orientacionPaneles: string;
  produccionAnual: number;
  ahorroAnualEstimado: number;
  costoTotalSistema: number;
  subvenciones: number;
  costoNeto: number;
  financiamiento: string;
  periodoRetornoInversion: number;
  reduccionCO2Anual: number;
  equivalentesArbolesPlantados: number;
  garantiaPaneles: string;
  garantiaInversor: string;
  garantiaInstalacion: string;
  mantenimiento: string;
  tiempoEstimadoInstalacion: string;
  requerimientosPermisos: string;
  procedimientoInstalacion: string;
  programaReferidos: string;
  bateriaAlmacenamiento: string;
  posibilidadExpansion: string;
  renderizado3D: string;
  simulacionProduccion: string;
  chartImage?: string;
}

interface SolarFormProps {
  onFormSubmit: (values: FormValues) => void;
  onGenerateChart: (chartImage: string) => void;
}

const SolarForm: React.FC<SolarFormProps> = ({ onFormSubmit, onGenerateChart }) => {
  const [formValues, setFormValues] = useState<FormValues | null>(null);

  const handleGenerateChart = async (values: FormValues) => {
    console.log('Generating chart image in handleGenerateChart for values:', values);
    try {
      const chartImage = await generateChartImage(values.costoMensualElectricidad);
      console.log('Generated chart image in handleGenerateChart:', chartImage);
      setFormValues({ ...values, chartImage });
      onGenerateChart(chartImage);
    } catch (error) {
      console.error('Error generating chart image in handleGenerateChart:', error);
    }
  };

  return (
    <Formik
      initialValues={{
        nombre: '',
        direccion: '',
        fechaPropuesta: '',
        representanteVentas: '',
        contacto: '',
        consumoAnual: 0,
        costoMensualElectricidad: Array(12).fill(0),
        costoAnualElectricidad: 0,
        tamanoSistema: 0,
        panelesSolares: '',
        inversor: '',
        orientacionPaneles: '',
        produccionAnual: 0,
        ahorroAnualEstimado: 0,
        costoTotalSistema: 0,
        subvenciones: 0,
        costoNeto: 0,
        financiamiento: '',
        periodoRetornoInversion: 0,
        reduccionCO2Anual: 0,
        equivalentesArbolesPlantados: 0,
        garantiaPaneles: '',
        garantiaInversor: '',
        garantiaInstalacion: '',
        mantenimiento: '',
        tiempoEstimadoInstalacion: '',
        requerimientosPermisos: '',
        procedimientoInstalacion: '',
        programaReferidos: '',
        bateriaAlmacenamiento: '',
        posibilidadExpansion: '',
        renderizado3D: '',
        simulacionProduccion: '',
      }}
      onSubmit={(values) => {
        const costoAnualElectricidad = values.costoMensualElectricidad.reduce((acc, curr) => acc + curr, 0);
        const updatedValues = { ...values, costoAnualElectricidad };
        console.log('Form values on submit:', updatedValues);
        setFormValues(updatedValues);
        onFormSubmit(updatedValues);
      }}
    >
      {({ handleChange, values }) => (
        <div className="flex w-full">
          <Form className="flex flex-col space-y-4 w-1/2 p-4">
            <PersonalInfoSection />
            <SystemDetailsSection />
            <FinanceSection />
            <MaintenanceSection />
            <VisualizationSection />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Generar PDF
            </button>
            <button type="button" className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => handleGenerateChart(values)}>
              Generar Gráfico
            </button>
            {formValues && (
              <div className="mt-4">
                <PDFDownloadLink
                  document={<SolarPDF {...formValues} />}
                  fileName="propuesta.pdf"
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? 'Generando PDF...' : 'Descargar PDF'
                  }
                </PDFDownloadLink>
              </div>
            )}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SolarForm;
