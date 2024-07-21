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
        return totalCost;
      };

      const calculateIndirectCost = (years: number, totalPrice: number) => {
        const inflationRate = 0.048; // Inflación anual del 4.8%
        let indirectCost = 0;
        let remainingValue = totalPrice;

        for (let i = 1; i <= years; i++) {
          const yearlyIndirectCost = remainingValue * inflationRate;
          indirectCost += yearlyIndirectCost;
          // Deducir el valor del sistema año con año
          remainingValue -= remainingValue * inflationRate;
        }
        return indirectCost;
      };

      const updateChart = () => {
        const years = sliderValue;
        const cfeCost = calculateTotalCost(years, costPerKWh, annualConsumption);
        const systemCost = totalPrice * 18;
        const indirectCost = calculateIndirectCost(years, totalPrice);
        console.log('precio del sistema', totalPrice * 18);
        console.log("CFE", cfeCost)
        console.log("perdida por inflacion / costo del sistema",indirectCost * 18);
        const noActionCost = cfeCost + indirectCost * 18;
        console.log("no hacer nada", noActionCost)

        const option = {
          title: {
            text: 'Cost Over Time',
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['No hacer nada', 'System Cost'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: 'Cost',
              type: 'bar',
              data: [
                { value: noActionCost, itemStyle: { color: noActionCost > systemCost ? 'hsl(0, 70%, 40%)' : 'hsl(144, 70%, 38%)' } }, // Rojo brillante o Verde brillante
                { value: systemCost, itemStyle: { color: 'hsl(174, 100%, 47%)' } }, // Turquesa claro
              ],
              label: {
                show: true,
                position: 'top',
                color: 'hsl(0, 0%, 100%)' // Blanco puro
              },
            },
          ],
        };

        chart.setOption(option);
      };

      updateChart();

      // Si es necesario actualizar constantemente, puedes mantener el intervalo
      // Si no, comenta o elimina estas líneas
      // const intervalId = setInterval(updateChart, updateFrequency);

      return () => {
        // clearInterval(intervalId);
        chart.dispose();
      };
    }
  }, [sliderValue, costPerKWh, totalPrice, annualConsumption]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartsBarRace;
