"use client"
import React, { useState } from 'react';
import SolarForm from '../../components/pdfgen/SolarForm';
import PDFPreview from '../../components/pdfgen/PDFPreview';

const PropuestaPage = () => {
  const [formValues, setFormValues] = useState(null);
  const [chartImage, setChartImage] = useState('');

  const handleFormSubmit = (values) => {
    console.log('Form values on submit:', values);
    setFormValues(values);
  };

  const handleGenerateChart = (image) => {
    console.log('Generated chart image:', image);
    setChartImage(image);
  };

  return (
    <div className="min-h-screen flex flex-row items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md mb-8">
        <h1 className="text-2xl font-bold mb-6">Generar Propuesta Solar</h1>
        <SolarForm onFormSubmit={handleFormSubmit} onGenerateChart={handleGenerateChart} />
      </div>
      {formValues && (
        <div className="w-full max-w-4xl h-full mb-8">
          <PDFPreview formValues={formValues} chartImage={chartImage} />
        </div>
      )}
    </div>
  );
};

export default PropuestaPage;
