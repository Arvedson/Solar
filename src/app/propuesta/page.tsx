"use client"
import React from 'react';
import SolarForm from '../../components/pdfgen/SolarForm';

const Home = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">Generar Propuesta Solar</h1>
      <SolarForm />
    </div>
  </div>
);

export default Home;
