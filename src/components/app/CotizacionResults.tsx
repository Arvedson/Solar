import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCotizacion } from '@/context/CotizacionContext';
import { fetchPanelData } from '@/services/panelService';
import InversorCalculator from '../../components/app/InversorCalculator';
import EstructuraAproximada from './EstructuraAproximada';
import ProteccionAproximada from './ProteccionAproximada';
import SistemaTierras from './SistemaTierras';
import ManoDeObra from './ManoDeObra';
import { FaArrowRight } from 'react-icons/fa';
import Graficos from './Graficos';  // Importamos el nuevo componente

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

const CotizacionResults: React.FC = () => {
  const { annualConsumption, setPanelCount, setPanelCost, panelCount, panelCost, totalPrice } = useCotizacion();
  const [panel, setPanel] = useState<PanelSolar | null>(null);
  const [showGraficos, setShowGraficos] = useState<boolean>(false);  // Estado para manejar la navegación

  useEffect(() => {
    const getPanelData = async () => {
      const panelData = await fetchPanelData();
      setPanel(panelData);
    };

    getPanelData();
  }, []);

  useEffect(() => {
    if (panel && annualConsumption) {
      const hoursOfSunlightPerDay = 5.5; // Promedio de horas de luz solar efectiva por día
      const systemLossFactor = 1.2; // 20% de pérdida por calor y el inversor

      const dailyConsumption = annualConsumption / 365;
      const adjustedDailyConsumption = dailyConsumption * systemLossFactor;
      const requiredSystemSizeKW = adjustedDailyConsumption / hoursOfSunlightPerDay;
      const neededPanels = Math.ceil(requiredSystemSizeKW / (panel.capacidadW / 1000));

      setPanelCount(neededPanels);
      const panelTotalCost = neededPanels * panel.precio;
      setPanelCost(panelTotalCost);
    }
  }, [panel, annualConsumption, setPanelCount, setPanelCost]);

  // Si el estado `showGraficos` es verdadero, renderiza el componente `Graficos`
  if (showGraficos) {
    return <Graficos />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-background text-foreground"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Resultados de la Cotización</h2>
        <div className="gridyflex">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-card1 p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">Paneles Solares</h3>
                    <p><strong>Consumo Anual:</strong> {annualConsumption ? `${annualConsumption} kWh` : 'No ingresado'}</p>
                    {panel && (
                      <>
                        <p className="textoo"><strong>Modelo del Panel: </strong> SOLAREVER {panel.modelo}</p>
                        <p className="textoo"><strong>Cantidad de Paneles Necesarios:</strong> {panelCount}</p>
                        <p className="textoo"><strong>Precio Total:</strong> ${panelCost.toFixed(2)}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
              <div className="flip-card-back flex flex-col items-center justify-center">
                {panel && panel.imageUrl ? (
                  <Image
                    src={panel.imageUrl}
                    alt={`Imagen del panel ${panel.modelo}`}
                    width={500}
                    height={500}
                    className="maskimage w-full h-full object-contain image-rounded"
                  />
                ) : (
                  <p>Imagen no disponible</p>
                )}
                <a
                  href="https://solarever.com.mx/wp-content/uploads/2021/03/SOLAREVER-MONO-182-545560W-2278x1134x35-2022-light.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botoncards"
                >
                  Ver Ficha Técnica
                </a>
              </div>
            </div>
          </div>
          <InversorCalculator panel={panel} panelCount={panelCount} />
          <EstructuraAproximada panelCount={panelCount} />
          <ProteccionAproximada panelCount={panelCount} />
          <SistemaTierras panelCount={panelCount} />
          <ManoDeObra panelCount={panelCount} />
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold">Costo Total</h3>
          <p>${(18 * totalPrice * 1.8).toFixed(2)}</p>
          <button className="text-2xl text-blue-500" onClick={() => setShowGraficos(true)}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CotizacionResults;
