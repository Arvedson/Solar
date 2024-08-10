import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCotizacion } from "@/context/CotizacionContext";
import { fetchPanelData } from "@/services/panelService";
import InversorCalculator from "../../components/app/InversorCalculator";
import EstructuraAproximada from "./EstructuraAproximada";
import ProteccionAproximada from "./ProteccionAproximada";
import SistemaTierras from "./SistemaTierras";
import ManoDeObra from "./ManoDeObra";
import { FaArrowRight } from "react-icons/fa";
import Graficos from "./Graficos";

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
  const {
    annualConsumption,
    setPanelCount,
    setPanelCost,
    panelCount,
    panelCost,
    totalPrice,
  } = useCotizacion();
  const [panel, setPanel] = useState<PanelSolar | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      const requiredSystemSizeKW =
        adjustedDailyConsumption / hoursOfSunlightPerDay;
      const neededPanels = Math.ceil(
        requiredSystemSizeKW / (panel.capacidadW / 1000)
      );

      setPanelCount(neededPanels);
      const panelTotalCost = neededPanels * panel.precio;
      setPanelCost(panelTotalCost);
    }
  }, [panel, annualConsumption, setPanelCount, setPanelCost]);

  const components = [
    {
      id: "cotizationResults",
      component: (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-magic-pattern text-foreground"
        >
          <div>
            <h1 className=" flex text-2xl font-bold mb-6 text-center bg-card1 p-6 rounded-lg shadow-lg border border-gray-300  flex-col items-center justify-center ">
             Un costo aproximado de
             <p className="text-white font-bold">
                ${(18 * totalPrice * 1.8).toFixed()} pesos Mexicanos.
              </p>
            </h1>
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
                        <h3 className="text-2xl font-bold mb-4">
                          Paneles Solares
                        </h3>
                        <p>
                          <strong>Consumo Anual:</strong>{" "}
                          {annualConsumption
                            ? `${annualConsumption} kWh`
                            : "No ingresado"}
                        </p>
                        {panel && (
                          <>
                            <p className="textoo">
                              <strong>Modelo del Panel: </strong> SOLAREVER{" "}
                              {panel.modelo}
                            </p>
                            <p className="textoo">
                              <strong>Cantidad de Paneles Necesarios:</strong>{" "}
                              {panelCount}
                            </p>
                            {/*                            <p className="textoo">
                              <strong>Precio Total:</strong> $
                              {panelCost.toFixed(2)}
                            </p> */}

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
              {panel && (
                <InversorCalculator panel={panel} panelCount={panelCount} />
              )}
              <EstructuraAproximada panelCount={panelCount} />
              <ProteccionAproximada panelCount={panelCount} />
              <SistemaTierras panelCount={panelCount} />
              <ManoDeObra panelCount={panelCount} />
            </div>

            <div className="flex flex-col text-center mt-12 bg-card p-6 border border-gray-300 rounded items-center gap-2 text-black max-w-[200px] mx-auto">
              <h5 className="text-white text-2xl font-bold">Posible retorno</h5 >

              <button
                className="flex items-center  justify-center text-xl text-white bg-gray-500 p-3  hover:bg-primary transition duration-300 ease-in-out rounded hover:text-black"
                onClick={() => nextComponent()}
              >
                <FaArrowRight className=" " />
              </button>
            </div>
          </div>
        </motion.div>
      ),
    },
    { id: "graficos", component: <Graficos /> },
  ];

  const nextComponent = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevComponent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    // Scroll to top when component changes
    window.scrollTo(0, 0);
  }, [currentIndex]);

  return (
    <div className=" text-foreground">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {components[currentIndex].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CotizacionResults;
