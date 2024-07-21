// components/BarRace.tsx
import React from 'react';

interface BarRaceProps {
  sliderValue: number;
  costPerKWh: number;
  totalPrice: number;
  annualConsumption: number;
}

const BarRace: React.FC<BarRaceProps> = ({ sliderValue, costPerKWh, totalPrice, annualConsumption }) => {
  const calculatePercentage = (sliderValue: number, costPerKWh: number, totalPrice: number, annualConsumption: number) => {
    let years = 0;
    if (sliderValue <= 60) {
      years = (sliderValue / 60) * 10;
    } else {
      years = 10 + ((sliderValue - 60) / 40) * 20;
    }
    const totalCost = calculateTotalCost(years, costPerKWh, annualConsumption);
    return (totalCost / totalPrice) * 100;
  };

  const calculateTotalCost = (years: number, costPerKWh: number, annualConsumption: number) => {
    let totalCost = 0;
    const inflationRate = 0.048; // Inflación anual del 4.98%
    for (let i = 1; i <= years; i++) {
      totalCost += annualConsumption * costPerKWh * Math.pow((1 + inflationRate), i);
    }
    return totalCost;
  };

  const percentage = calculatePercentage(sliderValue, costPerKWh, totalPrice, annualConsumption);

  return (
    <div className="w-full bg-gray-200 h-6 rounded-lg overflow-hidden">
      <div
        className="bg-blue-600 h-full"
        style={{ width: `${percentage}%`, transition: 'width 0.3s ease' }}
      />
    </div>
  );
};

export default BarRace;
