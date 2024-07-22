// components/EChartsBarRace.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface EChartsBarRaceProps {
  sliderValue: number;
  costPerKWh: number;
  totalPrice: number;
  annualConsumption: number;
}

const EChartsBarRace: React.FC<EChartsBarRaceProps> = ({ sliderValue, costPerKWh, totalPrice, annualConsumption }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const calculateTotalCost = (years: number, costPerKWh: number, annualConsumption: number) => {
        let totalCost = 0;
        const inflationRate = 0.05; // Inflación anual del 5%
        for (let i = 1; i <= years; i++) {
          totalCost += annualConsumption * costPerKWh * Math.pow((1 + inflationRate), i);
        }
        return Math.round(totalCost); // Redondear el resultado
      };

      const calculateIndirectCost = (years: number, totalPrice: number) => {
        const inflationRate = 0.048; // Inflación anual del 4.8%
        let indirectCost = 0;
        let remainingValue = totalPrice;

        for (let i = 1; i <= years; i++) {
          const yearlyIndirectCost = Math.round(remainingValue * inflationRate);
          indirectCost += yearlyIndirectCost;
          // Deducir el valor del sistema año con año
          remainingValue = Math.round(remainingValue - remainingValue * 0.05);
        }
        return Math.round(indirectCost); // Redondear el resultado
      };

      const updateChart = () => {
        const years = sliderValue;
        const cfeCost = calculateTotalCost(years, costPerKWh, annualConsumption);
        const systemCost = Math.round(totalPrice * 18 *1.8); // Redondear el resultado
        const indirectCost = calculateIndirectCost(years, totalPrice);
        console.log('precio del sistema', totalPrice * 18);
        console.log("CFE", cfeCost);
        console.log("perdida por inflacion / costo del sistema", indirectCost * 18);
        const noActionCost = Math.round(cfeCost + indirectCost * 18); // Redondear el resultado
        console.log("no hacer nada", noActionCost);

        const option = {
          title: {
            text: 'El costo de no cambiar',
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['Sin paneles', 'Con paneles'],
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              show: false, // Oculta las etiquetas del eje Y
            },
          },
          series: [
            {
              name: 'Cost',
              type: 'bar',
              data: [
                { value: noActionCost, itemStyle: { color: noActionCost > systemCost ? 'hsl(0, 70%, 40%)' : 'hsl(0 0% 80%)' } }, // Rojo brillante o Verde brillante
                { value: systemCost, itemStyle: { color: systemCost < noActionCost ? 'hsl(144, 100%, 70%)' : 'hsl(174, 100%, 47%)' } }, // Turquesa claro
              ],
              label: {
                show: true,
                position: 'top',
                color: 'hsl(0, 0%, 100%)', // Blanco puro
                formatter: (params: any) => `$${params.value}`, // Mostrar valores enteros con el signo de pesos
              },
            },
          ],
        };

        chart.setOption(option);
      };

      updateChart();

      return () => {
        chart.dispose();
      };
    }
  }, [sliderValue, costPerKWh, totalPrice, annualConsumption]);

  return <div className='graficobarra' ref={chartRef}  />;
};

export default EChartsBarRace;
