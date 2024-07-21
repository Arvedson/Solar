import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCotizacion } from '@/context/CotizacionContext';

interface PanelSolar {
  id: number;
  modelo: string;
  capacidadW: number;
  fabricante: string;
  eficiencia: number;
  dimensiones: string;
  peso: number;
  precio: number;
  imageUrl?: string;
  voltajeVoc: number;
  corrienteIsc: number;
  voltajeVmp: number;
  corrienteImp: number;
  tipoCelda: string;
  cantidadCeldas: number;
  tolerancia: number;
  maxVoltajeSistema: number;
  temperaturaOperacion: string;
  garantiaProducto: number;
  garantiaPotencia: number;
}

interface Microinversor {
  modelo: string;
  capacidadW: number;
  precio: number;
  imageUrl: string;
}

const inversores: Microinversor[] = [
  { modelo: 'SUN2000-2KTL-L1', capacidadW: 2000, precio: 268.42, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN2000-2KTL-L1.webp?alt=media&token=7b3c368a-604b-4472-84bf-0cd8cb6cdb34' },
  { modelo: 'SUN2000-3KTL-L1', capacidadW: 3000, precio: 324.21, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN2000-3KTL-L1.webp?alt=media&token=19febada-f9df-4dd5-aaae-35af7107027c' },
  { modelo: 'SUN2000-4KTL-L1', capacidadW: 4000, precio: 398.54, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN2000-4KTL-L1.webp?alt=media&token=45f88c8b-9efd-41f8-a5f1-52707fcecddf' },
  { modelo: 'SUN600-5KTL-L0', capacidadW: 5000, precio: 471.58, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN600-5KTL-L0.webp?alt=media&token=c8ddbc0c-ad32-4145-ad1b-3dfd94f47829' },
  { modelo: 'SUN2000-5KTL-L1', capacidadW: 5000, precio: 503.16, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN600-5KTL-L0.webp?alt=media&token=c8ddbc0c-ad32-4145-ad1b-3dfd94f47829' },
  { modelo: 'SUN600-6KTL-L0', capacidadW: 6000, precio: 513.68, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN600-6KTL-L0.jpg?alt=media&token=1e66d1f4-1516-4415-bfc8-2698b54cbdf9' },
  { modelo: 'SUN2000-6KTL-L1', capacidadW: 6000, precio: 555.79, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN2000-6KTL-L1.jpg?alt=media&token=5ac25a20-65a4-40c8-98be-79ef22007f37' },
  { modelo: 'SUN2000-8K-LC0', capacidadW: 8000, precio: 784.21, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN2000-8K-LC0.jpg?alt=media&token=712cc8c2-7739-460d-8ce4-dcfef32d5e87' },
  { modelo: 'SUN2000-10K-LC0', capacidadW: 10000, precio: 945.26, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN2000-10K-LC0.png?alt=media&token=c2c42029-6d91-43e0-b83c-5d4574e874b0' },
  { modelo: 'SUN2000-20KTL-M3', capacidadW: 20000, precio: 1976.84, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN2000-20KTL-M3.webp?alt=media&token=b14a3a4e-7356-476a-b2dc-45fe1649acdd' },
  { modelo: 'SUN2000-50KTL-M3', capacidadW: 50000, precio: 2918.95, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN2000-50KTL-M3.jpg?alt=media&token=bdf10830-b679-4727-84d8-8fc61cff0f16' },
  { modelo: 'SUN2000-100KTL-M2-5', capacidadW: 100000, precio: 5209.47, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/componentes%2FInversores%2FSUN2000-100KTL-M2-5.jpg?alt=media&token=feb4c24b-6dea-497a-944b-623c2f5bece1' },
];

interface InversorCalculatorProps {
  panel: PanelSolar;
  panelCount: number;
}

const InversorCalculator: React.FC<InversorCalculatorProps> = ({ panel, panelCount }) => {
  const { setMicroinversorCost, calculateTotalPrice } = useCotizacion();
  const [selectedInversor, setSelectedInversor] = useState<Microinversor | null>(null);
  const dataSheetUrl = 'https://support.huawei.com/enterprise/en/doc/EDOC1100136173/b1978087/technical-specifications';

  useEffect(() => {
    const findCompatibleInversor = () => {
      if (panel) {
        const solarIndex = 5.5; // Horas efectivas diarias de luz
        const effectiveWattage = panel.capacidadW * (panel.eficiencia / 100) * solarIndex;
        const totalWattage = effectiveWattage * panelCount;

        console.log(`Total wattage required: ${totalWattage} W`);

        for (let inversor of inversores) {
          if (inversor.capacidadW >= totalWattage) {
            setSelectedInversor(inversor);
            setMicroinversorCost(inversor.precio); // Actualizar el costo del inversor en el contexto
            calculateTotalPrice(); // Calcular el precio total
            return;
          }
        }
      }
      setSelectedInversor(null);
      setMicroinversorCost(0); // Si no se encuentra un inversor compatible, el costo es 0
      calculateTotalPrice(); // Calcular el precio total
    };

    findCompatibleInversor();
  }, [panel, panelCount, setMicroinversorCost, calculateTotalPrice]);

  return (
    <div className="flip-card ">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col items-center ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-card1 p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl font-bold mb-4">Inversor Minimo</h2>
            {selectedInversor ? (
              <>
                <p className="textoo"><strong>Modelo del Inversor:</strong> {selectedInversor.modelo}</p>
                <p className="textoo"><strong>Capacidad del Inversor:</strong> {selectedInversor.capacidadW} W</p>
                <p className="textoo"><strong>Precio del Inversor:</strong> ${selectedInversor.precio.toFixed(2)}</p>
              </>
            ) : (
              <p>No se encontró un inversor compatible.</p>
            )}
          </motion.div>
        </div>
        <div className=" flip-card-back flex flex-col items-center justify-center">
          {selectedInversor && selectedInversor.imageUrl ? (
            <Image
              src={selectedInversor.imageUrl}
              alt={`Imagen del inversor ${selectedInversor.modelo}`}
              width={500}
              height={500}
              className=" maskimage w-full h-full object-contain image-rounded"
            />
          ) : (
            <p>Imagen no disponible</p>
          )}
          <a
            href={dataSheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="botoncards "
          >
            Ver Ficha Técnica
          </a>
        </div>
      </div>
    </div>
  );
};

export default InversorCalculator;
