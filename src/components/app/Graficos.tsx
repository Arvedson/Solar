"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCotizacion } from '../../context/CotizacionContext';
import CheckBoxForm from '../../components/app/InputForm';
import { Slider } from '@mui/material';
import EChartsBarRace from './EChartsBarRace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTools, faLightbulb, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Separator } from '../ui/separator';

// Definición de las funciones de mapeo para categorizar los años
const mapSliderToYears = (sliderValue: number) => {
  if (sliderValue <= 60) {
    return (sliderValue / 60) * 10;
  } else {
    return 10 + ((sliderValue - 60) / 40) * 20;
  }
};

const mapYearsToSlider = (years: number) => {
  if (years <= 10) {
    return (years / 10) * 60;
  } else {
    return 60 + ((years - 10) / 20) * 40;
  }
};

const Graficos: React.FC = () => {
  const { selectedTarifa, totalPrice, annualConsumption, isBusiness, costPerKWh } = useCotizacion();
  const inflationRate = 0.048; // Inflación anual del 4.98%
  const [years, setYears] = useState(3);
  const [sliderValue, setSliderValue] = useState(mapYearsToSlider(3));
  const [returnYear, setReturnYear] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const calculateTotalCost = (years: number) => {
    let totalCost = 0;
    for (let i = 1; i <= years; i++) {
      totalCost += annualConsumption * costPerKWh * Math.pow((1 + inflationRate), i);
    }
    return totalCost;
  };

  const calculateReturnYear = () => {
    let year = 0;
    let cumulativeCost = 0;
    while (cumulativeCost < totalPrice * 18) { // Ajusta este valor si es necesario
      year++;
      cumulativeCost += annualConsumption * costPerKWh * Math.pow((1 + inflationRate), year);
    }
    console.log("año de retorno", year)
    return year;
  };

  useEffect(() => {
    const returnYearCalculated = calculateReturnYear();
    setReturnYear(returnYearCalculated);
  }, [totalPrice, annualConsumption, costPerKWh]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const newSliderValue = newValue as number;
    setSliderValue(newSliderValue);
    const newYears = mapSliderToYears(newSliderValue);
    setYears(newYears);
    console.log(`Slider value: ${newSliderValue}, Years: ${newYears}`);
  };

  const totalCost = calculateTotalCost(years);

  const components = [
    {
      id: 'graficos',
      component: (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="contenedor-graficos text-foreground "
        >
          <div className='info '>
            <h2 className=" text-3xl">Gráficos y Análisis</h2>
            <ul className='lista'>
              <li><FontAwesomeIcon icon={faDollarSign} className="icon-padding" /><strong> Tarifa Seleccionada:</strong> {selectedTarifa}</li>
              <li><FontAwesomeIcon icon={faTools} className="icon-padding" /><strong> Costo Total de la Instalación:</strong> ${(18 * totalPrice * 1.8).toFixed(0)} pesos</li>
              <li><FontAwesomeIcon icon={faLightbulb} className="icon-padding" /><strong> Consumo Anual:</strong> {annualConsumption ? `${annualConsumption} kWh` : 'No ingresado'}</li>
              <li><FontAwesomeIcon icon={faUser} className="icon-padding" /><strong> Tipo de Usuario:</strong> {isBusiness ? 'Negocio' : 'Residencial'}</li>
            </ul>

            <div className='botones '>
            <a href="https://wa.me/528715668027" target="_blank" rel="noopener noreferrer" className="wa bg-primary text-secondary px-4 py-2 rounded-lg shadow-lg hover:bg-primary-foreground hover:text-primary transition gap-3 flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="icon-contact" /> Contáctanos
            </a>
              <div className="dropdown">
              </div>

              <button className="btn-dropdown">
                <FontAwesomeIcon icon={faChevronDown} className="icon-padding" /> Más Información
              </button>
              <div className="dropdown-content">
                <p>Información detallada adicional aquí.</p>
              </div>
            </div>

            <Separator className='mt-8 mb-1 p-1 lg:hidden rounded max-w-auto'/>

            
          </div>

          
          

          <div className='barras'>
            <CheckBoxForm />
            <Slider
              value={sliderValue}
              max={100}
              onChange={handleSliderChange}
            />
            <div className="mt-4 p-2">
              <strong>Año actual:</strong> {2024 + Math.floor(mapSliderToYears(sliderValue))}
            </div>
            <EChartsBarRace sliderValue={years} costPerKWh={costPerKWh} totalPrice={totalPrice} annualConsumption={annualConsumption} />
          </div>
        </motion.div>
      )
    },
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

  return (
    <div className='wtf'>
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

export default Graficos;
