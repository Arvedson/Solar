"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCotizacion } from '@/context/CotizacionContext';

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
  const { setProteccionCost, calculateTotalPrice } = useCotizacion();

  useEffect(() => {
    const costoProteccionMXN = calcularCostoProteccion(panelCount);
    const TIPO_DE_CAMBIO = 17; // 1 USD = 17 MXN
    const costoProteccionUSD = costoProteccionMXN / TIPO_DE_CAMBIO;
    setProteccionCost(costoProteccionUSD);
    calculateTotalPrice();
  }, [panelCount, setProteccionCost, calculateTotalPrice]);

  const costoProteccionMXN = calcularCostoProteccion(panelCount);
  const TIPO_DE_CAMBIO = 17; // 1 USD = 17 MXN
  const costoProteccionUSD = costoProteccionMXN / TIPO_DE_CAMBIO;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-card1 p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl font-bold mb-4">Protecciones</h2>
            <p><strong>Para un sistema de</strong> {panelCount} paneles</p>
            <p><strong>Costo de las Protecciones:</strong> ${costoProteccionUSD.toFixed(2)} USD</p>
          </motion.div>
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FProteccionesElectricasSelladas%2Fproteccion.png?alt=media&token=3e9d9f0d-8ef3-4a2f-ae0f-ed50a4ea7031"
            alt="Imagen de la protección"
            layout="fill"
            className="maskimage w-full h-full object-contain image-rounded"
          />
          <a
            href="https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FProteccionesElectricasSelladas%2FProtecciones.png?alt=media&token=2871e5b4-aaf8-43ae-b587-7d31e71e320a"
            target="_blank"
            rel="noopener noreferrer"
            className="botoncards"
          >
            Ver Más
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProteccionAproximada;
