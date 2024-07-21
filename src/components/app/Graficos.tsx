"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCotizacion } from '../../context/CotizacionContext';
import CheckBoxForm from '../../components/app/InputForm';
import { Slider } from '@mui/material';
import EChartsBarRace from './EChartsBarRace';


// Definición de las funciones de mapeo
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
    console.log("año de retorno",year)
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

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-background text-foreground p-6 rounded-lg shadow-lg border border-gray-300 mt-6 mx-auto max-w-3xl"
    >
      <h2 className="text-2xl font-bold mb-4">Gráficos y Análisis</h2>
      <p><strong>Tarifa Seleccionada:</strong> {selectedTarifa}</p>
      <p><strong>Costo Total de la Instalación:</strong> ${totalPrice.toFixed(2)}</p>
      <p><strong>Consumo Anual:</strong> {annualConsumption ? `${annualConsumption} kWh` : 'No ingresado'}</p>
      <p><strong>Tipo de Usuario:</strong> {isBusiness ? 'Negocio' : 'Residencial'}</p>
      <CheckBoxForm />
      <Slider
        value={sliderValue}
        max={100}
        onChange={handleSliderChange}
      />
      <div className="mt-4">
        <strong>Año seleccionado:</strong> {mapSliderToYears(sliderValue).toFixed(2)}
      </div>

      <EChartsBarRace sliderValue={years} costPerKWh={costPerKWh} totalPrice={totalPrice} annualConsumption={annualConsumption} />
     
    </motion.div>
  );
};

export default Graficos;
