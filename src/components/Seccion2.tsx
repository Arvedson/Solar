"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Combobox } from '../components/ui/Combox';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const solarRadiationData: { [key: string]: number } = {
    Aguascalientes: 5.5,
    'Baja California': 6.0,
    'Baja California Sur': 6.5,
    Campeche: 5.5,
    Chiapas: 4.5,
    Chihuahua: 6.0,
    Coahuila: 6.0,
    Colima: 5.0,
    Durango: 5.5,
    Guanajuato: 5.5,
    Guerrero: 5.0,
    Hidalgo: 5.5,
    Jalisco: 5.5,
    'Ciudad De Mexico': 4.5,
    'Estado De Mexico': 5.0,
    Michoacán: 5.5,
    Morelos: 5.0,
    Nayarit: 5.0,
    'Nuevo León': 5.5,
    Oaxaca: 5.0,
    Puebla: 5.5,
    Querétaro: 5.5,
    'Quintana Roo': 5.0,
    'San Luis Potosí': 5.5,
    Sinaloa: 6.0,
    Sonora: 6.5,
    Tabasco: 4.5,
    Tamaulipas: 5.5,
    Tlaxcala: 5.0,
    Veracruz: 5.0,
    Yucatán: 5.5,
    Zacatecas: 5.5,
  };
  
  const calculateCostPerKWh = (monthlyCost: number): number => {
    const basicRate = 0.595;
    const lowIntermediateRate = 0.741;
    const highIntermediateRate = 0.967;
    const surplusRate = 2.859;
  
    let totalKwh = 0;
  
    if (monthlyCost <= 300 * basicRate) {
      totalKwh = monthlyCost / basicRate;
    } else if (monthlyCost <= (300 * basicRate) + (450 * lowIntermediateRate)) {
      totalKwh = 300 + ((monthlyCost - (300 * basicRate)) / lowIntermediateRate);
    } else if (monthlyCost <= (300 * basicRate) + (450 * lowIntermediateRate) + (150 * highIntermediateRate)) {
      totalKwh = 300 + 450 + ((monthlyCost - (300 * basicRate) - (450 * lowIntermediateRate)) / highIntermediateRate);
    } else {
      totalKwh = 300 + 450 + 150 + ((monthlyCost - (300 * basicRate) - (450 * lowIntermediateRate) - (150 * highIntermediateRate)) / surplusRate);
    }
  
    return monthlyCost / totalKwh;
  };
  
  const Section2 = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [monthlyCost, setMonthlyCost] = useState<number>(0);
    const [state, setState] = useState<string>('');
    const [cfeCost, setCfeCost] = useState<number>(0);
    const [solarCost, setSolarCost] = useState<number>(0);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const annualInflationRate = 0.06;
      const years = 25;
      const costPerKWh = calculateCostPerKWh(monthlyCost);
      const costPerWattSolar = 11.50; // Costo por watt en MXN
  
      const monthlyConsumption = monthlyCost / costPerKWh; // Consumo mensual en kWh
      const solarRadiation = solarRadiationData[state] || 5; // Valor por defecto si el estado no se encuentra
      const systemSizeKw = monthlyConsumption / (30 * solarRadiation); // Tamaño del sistema en kW
      const initialSolarCost = systemSizeKw * 1000 * costPerWattSolar;
  
      let totalCfeCost = 0;
      for (let i = 0; i < years; i++) {
        totalCfeCost += monthlyCost * 12 * Math.pow(1 + annualInflationRate, i);
      }
  
      setCfeCost(parseFloat(totalCfeCost.toFixed(2)));
      setSolarCost(parseFloat(initialSolarCost.toFixed(2)));
    };
  
    useEffect(() => {
        if (cfeCost > 0 && solarCost > 0) {
          const chartInstance = echarts.init(chartRef.current!, null, { renderer: 'svg' });
          const option = {
            title: {
              text: "Comparación a 25 años",
              left: 'center',
              padding: [0, 0, 50, 0],
              margin: [0, 0, 50, 0]
              
              
            },
            tooltip: {},
            xAxis: {
              data: ["Si no te cambias", "Si te cambias"],
              axisLabel: {
                rotate: 0, // Rotar etiquetas del eje X para mejor legibilidad
              },
            },
            yAxis: {
              axisLabel: {
                formatter: '{value}',
                fontSize: 12, // Ajustar el tamaño de la fuente
              },
            },
            grid: {
              left: '20%', // Ajustar los márgenes del gráfico
              right: '10%',
              bottom: '20%',
              top: '10%',
            },
            series: [
              {
                name: "Costo",
                type: "bar",
                data: [cfeCost, solarCost],
                itemStyle: {
                  color: function (params: any) {
                    return params.dataIndex === 0 ? "#e3342f" : "#38c172";
                  },
                },
              },
            ],
            responsive: true,
            maintainAspectRatio: false,
          };
          chartInstance.setOption(option);
      
          const handleResize = () => {
            chartInstance.resize();
          };
      
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
            chartInstance.dispose();
          };
        }
      }, [cfeCost, solarCost]);
      
  
    const states = Object.keys(solarRadiationData);
  
    return (
      <div className="flex  max-w-4xl mx-auto bg-card text-card-foreground shadow-md rounded-lg mt-12 mb-12 ">
        <section className="py-14 bg-background text-foreground ">
          <div className="container mx-auto px-10 text-center">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-8">
              ¿Cuánto pagas promedio al mes?
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mb-12 flex flex-col items-center gap-4 w-full md:w-1/2 mx-auto"
            >
              <Input
                type="number"
                placeholder="Ingresa tu costo mensual de promedio electricidad"
                value={monthlyCost}
                onChange={(e) => setMonthlyCost(parseFloat(e.target.value))}
                className="p-2 border border-border rounded bg-input text-foreground w-full"
              />
              <Combobox
                placeholder="Selecciona tu estado"
                items={states}
                value={state}
                onChange={(value) => setState(value)}
                className="p-2 border border-border rounded bg-input text-foreground w-full"
              />
              <Button
                type="submit"
                className="p-2 bg-primary text-primary-foreground rounded hover:bg-primary-foreground hover:text-primary transition"
              >
                Calcular
              </Button>
            </form>
            {cfeCost > 0 && solarCost > 0 && (
              <div className="flex justify-center">
                <div
                  ref={chartRef}
                  className="w-full h-64 md:h-80 lg:h-96"
                  style={{ maxWidth: "100%" }}
                ></div>
              </div>
            )}
            <p className="text-foreground text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Los datos mostrados en este grafico son un aproximado de cuanto{" "}
              <span className="text-primary font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                podrías ahorrar si decides cambiarte
              </span>
            </p>
          </div>
        </section>
      </div>

    );
  };
  
  export default Section2;