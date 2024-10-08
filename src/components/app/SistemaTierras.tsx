"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCotizacion } from '@/context/CotizacionContext';

interface SistemaTierrasProps {
  panelCount: number;
}

const sistemaTierrasCostos = [
  3000,  // 1-5 paneles
  5000,  // 6-10 paneles
  7000,  // 11-15 paneles
  9000,  // 16-20 paneles
  11000, // 21-25 paneles
  13000, // 26-30 paneles
];

const calcularCostoSistemaTierras = (panelCount: number): number => {
  if (panelCount <= 30) {
    const index = Math.ceil(panelCount / 5) - 1;
    return sistemaTierrasCostos[index];
  } else {
    const extraPanels = panelCount - 30;
    const extraCost = Math.ceil(extraPanels / 5) * 2000; // Incremento de 2000 MXN por cada 5 paneles adicionales
    return sistemaTierrasCostos[5] + extraCost;
  }
};

const SistemaTierras: React.FC<SistemaTierrasProps> = ({ panelCount }) => {
  const { setSistemaTierrasCost, calculateTotalPrice } = useCotizacion();

  useEffect(() => {
    const costoSistemaTierrasMXN = calcularCostoSistemaTierras(panelCount);
    const TIPO_DE_CAMBIO = 18; // 1 USD = 17 MXN
    const costoSistemaTierrasUSD = costoSistemaTierrasMXN / TIPO_DE_CAMBIO;
    setSistemaTierrasCost(costoSistemaTierrasUSD);
    calculateTotalPrice();
  }, [panelCount, setSistemaTierrasCost, calculateTotalPrice]);

  const costoSistemaTierrasMXN = calcularCostoSistemaTierras(panelCount);
  const TIPO_DE_CAMBIO = 18; // 1 USD = 17 MXN
  const costoSistemaTierrasUSD = costoSistemaTierrasMXN / TIPO_DE_CAMBIO;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-card1t   rounded-lg shadow-lg border border-gray-300  flex flex-col p-6  items-center justify-center "
    >
      <h2 className="text-2xl font-bold mb-4">Costos de operacion</h2>
      <p className='items-center justify-center'>Necesarios para la planificación, control y coordinación de las operaciones. </p>
      {/*
      <p className=''><strong>Costo del Sistema de Tierras:</strong> ${costoSistemaTierrasUSD.toFixed(2)} USD</p>*/ }
      
    </motion.div>
  );
};

export default SistemaTierras;
