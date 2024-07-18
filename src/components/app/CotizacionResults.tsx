import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCotizacion } from '@/context/CotizacionContext';
import { fetchPanelData } from '@/services/panelService';
import InversorCalculator from '../../components/app/InversorCalculator';
import EstructuraAproximada from './EstructuraAproximada';
import ProteccionAproximada from './ProteccionAproximada';
import SistemaTierras from './SistemaTierras';
import ManoDeObra from './ManoDeObra';

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
  const { annualConsumption, selectedTarifa } = useCotizacion();
  const [panel, setPanel] = useState<PanelSolar | null>(null);
  const [panelCount, setPanelCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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

      // Consumo anual dividido por los días del año para obtener el consumo diario
      const dailyConsumption = annualConsumption / 365;
      console.log(`Consumo diario: ${dailyConsumption} kWh`);

      // Ajuste del consumo diario para tener en cuenta las pérdidas del sistema
      const adjustedDailyConsumption = dailyConsumption * systemLossFactor;
      console.log(`Consumo diario ajustado: ${adjustedDailyConsumption} kWh`);

      // Tamaño del sistema necesario en kW
      const requiredSystemSizeKW = adjustedDailyConsumption / hoursOfSunlightPerDay;
      console.log(`Tamaño del sistema requerido: ${requiredSystemSizeKW} kW`);

      // Número de paneles necesarios, redondeado hacia arriba
      const neededPanels = Math.ceil(requiredSystemSizeKW / (panel.capacidadW / 1000));
      console.log(`Número de paneles necesarios: ${neededPanels}`);

      setPanelCount(neededPanels);
      setTotalPrice(neededPanels * panel.precio);
    }
  }, [panel, annualConsumption]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="container mx-auto p-6 bg-background text-foreground"
    >
            <h2 className="text-2xl font-bold mb-6 text-center">Resultados de la Cotización</h2>
      


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-card p-6 rounded-lg shadow-lg border border-gray-300 mt-6">

        <h3 className="text-2xl mb-4">Costo de Paneles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p><strong>Consumo Anual:</strong> {annualConsumption ? `${annualConsumption} kWh` : 'No ingresado'}</p>
       
          {panel && (
            <>
              <p><strong>Modelo del Panel: </strong> SOLAREVER {panel.modelo}</p>
              <p><strong>Cantidad de Paneles Necesarios:</strong> {panelCount}</p>
              <p><strong>Precio Total:</strong> ${totalPrice.toFixed(2)}</p>
            </>
          )}
        </div>
      </div>
        <InversorCalculator panel={panel} panelCount={panelCount} />
        <EstructuraAproximada panelCount={panelCount} />
        <ProteccionAproximada panelCount={panelCount} />
        <SistemaTierras panelCount={panelCount} />
        <ManoDeObra panelCount={panelCount} />
      </div>
    </motion.div>
  );
};

export default CotizacionResults;
