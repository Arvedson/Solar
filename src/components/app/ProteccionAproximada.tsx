"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ProteccionAproximadaProps {
  panelCount: number;
}

const proteccionCostos = [
  2000,  // 1-5 paneles
  4000,  // 6-10 paneles
  6000,  // 11-15 paneles
  8000,  // 16-20 paneles
  10000, // 21-25 paneles
  12000, // 26-30 paneles
];

const calcularCostoProteccion = (panelCount: number): number => {
  if (panelCount <= 30) {
    const index = Math.ceil(panelCount / 5) - 1;
    return proteccionCostos[index];
  } else {
    const extraPanels = panelCount - 30;
    const extraCost = Math.ceil(extraPanels / 5) * 2000; // Incremento de 2000 MXN por cada 5 paneles adicionales
    return proteccionCostos[5] + extraCost;
  }
};

const ProteccionAproximada: React.FC<ProteccionAproximadaProps> = ({ panelCount }) => {
  const costoProteccionMXN = calcularCostoProteccion(panelCount);
  const TIPO_DE_CAMBIO = 17; // 1 USD = 17 MXN
  const costoProteccionUSD = costoProteccionMXN / TIPO_DE_CAMBIO;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-card p-6 rounded-lg shadow-lg border border-gray-300 mt-6 "
    >
      <h2 className="text-2xl font-bold mb-4">Costo de Protecciones</h2>
      <p><strong>Para un sistema de</strong> {panelCount} paneles</p>
      <p><strong>Costo de las Protecciones:</strong> ${costoProteccionUSD.toFixed(2)} USD</p>
    </motion.div>
  );
};

export default ProteccionAproximada;
