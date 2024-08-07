import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import SolarPDF from './SolarPDF';
import { FormValues } from '../../../types/FormValues';


interface PDFPreviewProps {
  formValues: FormValues;
  chartImage: string | null;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ formValues, chartImage }) => (
  <PDFViewer width="100%" height="1190" className='relative bottom-80'>
    <SolarPDF {...formValues} chartImage={chartImage} />
  </PDFViewer>
);

export default PDFPreview;
