"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCotizacion } from '@/context/CotizacionContext';

interface ManoDeObraProps {
  panelCount: number;
}

const calcularCostoManoDeObra = (panelCount: number): number => {
  if (panelCount <= 5) {
    return panelCount * 1000;
  } else if (panelCount <= 10) {
    return panelCount * 900;
  } else if (panelCount <= 30) {
    return panelCount * 800;
  } else {
    return panelCount * 700;
  }
};

const ManoDeObra: React.FC<ManoDeObraProps> = ({ panelCount }) => {
  const { setManoDeObraCost, calculateTotalPrice } = useCotizacion();

  useEffect(() => {
    const costoManoDeObraMXN = calcularCostoManoDeObra(panelCount);
    const TIPO_DE_CAMBIO = 17; // 1 USD = 17 MXN
    const costoManoDeObraUSD = costoManoDeObraMXN / TIPO_DE_CAMBIO;
    setManoDeObraCost(costoManoDeObraUSD);
    calculateTotalPrice();
  }, [panelCount, setManoDeObraCost, calculateTotalPrice]);

  const costoManoDeObraMXN = calcularCostoManoDeObra(panelCount);
  const TIPO_DE_CAMBIO = 17; // 1 USD = 17 MXN
  const costoManoDeObraUSD = costoManoDeObraMXN / TIPO_DE_CAMBIO;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-card1t   rounded-lg shadow-lg border border-gray-300   "
    >
      <h2 className=" text-2xl font-bold mb-4 self-center">Obra y Permisos</h2>
      <p><strong>Cantidad de Paneles:</strong> {panelCount}</p>
      <p className='flex flex-col items-center'><strong>Costo de la Mano de Obra y permisos:</strong> ${costoManoDeObraUSD.toFixed(2)} USD</p>
    </motion.div>
  );
};

export default ManoDeObra;
