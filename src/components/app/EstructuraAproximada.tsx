"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface EstructuraAproximadaProps {
  panelCount: number;
}

const estructuraCostos = [
  1000, 1800, 2500, 3200, 3800, 4500, 5000, 5500, 6000, 6500,
  7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500,
  12000, 12500, 13000, 13500, 14000, 14500, 15000, 15500, 16000, 16500
];

const TIPO_DE_CAMBIO = 17; // 1 USD = 17 MXN

const calcularCostoEstructura = (panelCount: number): number => {
  if (panelCount <= 30) {
    return estructuraCostos[panelCount - 1] || 0;
  }
  return estructuraCostos[29] + ((panelCount - 30) * 500);
};

const EstructuraAproximada: React.FC<EstructuraAproximadaProps> = ({ panelCount }) => {
  const costoEstructuraMXN = calcularCostoEstructura(panelCount);
  const costoEstructuraUSD = costoEstructuraMXN / TIPO_DE_CAMBIO;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-card p-6 rounded-lg shadow-lg border border-gray-300 mt-6"
    >
      <h2 className="text-2xl font-bold mb-4">Costo de Estructura</h2>
      <p><strong>Estructura para</strong> {panelCount} paneles</p>
      <p><strong>Costo de la Estructura:</strong> ${costoEstructuraUSD.toFixed(2)} USD</p>
    </motion.div>
  );
};

export default EstructuraAproximada;
