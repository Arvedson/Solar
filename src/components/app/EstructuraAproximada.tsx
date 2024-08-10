"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCotizacion } from '@/context/CotizacionContext';

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
  const { setEstructuraCost, calculateTotalPrice } = useCotizacion();

  useEffect(() => {
    const costoEstructuraMXN = calcularCostoEstructura(panelCount);
    const costoEstructuraUSD = costoEstructuraMXN / TIPO_DE_CAMBIO;
    setEstructuraCost(costoEstructuraUSD);
    calculateTotalPrice();
  }, [panelCount, setEstructuraCost, calculateTotalPrice]);

  const costoEstructuraMXN = calcularCostoEstructura(panelCount);
  const costoEstructuraUSD = costoEstructuraMXN / TIPO_DE_CAMBIO;

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
            <h2 className="text-2xl font-bold mb-4">Estructura</h2>
            <p><strong>Para {panelCount} paneles</strong>: estructura de aluminio sobre una base especifica para techo laminado, concreto, teja y entre otros.</p>
                            {/*   
                             <p><strong>Costo de la Estructura:</strong> ${costoEstructuraUSD.toFixed(2)} USD</p>
                                */}
                                <p></p>
           
          </motion.div>
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FEstructuras%20de%20Montaje%2Festiloestrucruraejemplo.png?alt=media&token=ab6a5290-f1a1-4c34-be73-85a8ba2b56a5"
            alt="Imagen de la estructura"
            width={500}
            height={500}
            className="maskimage w-full h-full object-contain image-rounded"
          />
          <a
            href="https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FEstructuras%20de%20Montaje%2Festructura.png?alt=media&token=5f6b19e7-2399-4f03-843e-0b709d7f03b2"
            target="_blank"
            rel="noopener noreferrer"
            className="botoncards"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default EstructuraAproximada;
