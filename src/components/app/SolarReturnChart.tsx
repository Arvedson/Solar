import React, { useEffect, useState } from 'react';
import { useInflationContext } from '../../context/InflationContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Slider from '@mui/material/Slider';

// Registrar los componentes necesarios de chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SolarReturnChart: React.FC = () => {
  const { scenario, setScenario, calculateReturns } = useInflationContext();
  const [baseRate, setBaseRate] = useState(1.0); // Inicialmente 1 peso por kWh
  const [returns, setReturns] = useState<number[]>([]);

  useEffect(() => {
    setReturns(calculateReturns(baseRate));
  }, [scenario, baseRate]);

  const handleScenarioChange = (event: any, newValue: number | number[]) => {
    const scenarios = ['usaWins', 'chinaWins', 'collapse'];
    setScenario(scenarios[newValue as number]);
  };

  const data = {
    labels: Array.from({ length: 25 }, (_, i) => 2024 + i),
    datasets: [
      {
        label: 'Solar Panel Return (Pesos)',
        data: returns,
        borderColor: 'green',
        fill: false
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col container mx-auto p-4 items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Solar Panel Return and Inflation Rate</h2>
      <div className="mb-4">
        <div className="relative w-full h-96 sm:h-112 md:h-128 lg:h-144 xl:h-160">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Base Rate (Pesos per kWh): {baseRate.toFixed(2)}</label>
        <Slider
          value={baseRate}
          min={0.82}
          max={3.0}
          step={0.01}
          onChange={(e, value) => setBaseRate(value as number)}
          valueLabelDisplay="auto"
          aria-labelledby="base-rate-slider"
          className="w-full "
        />
      </div>
      <Slider
        defaultValue={0}
        aria-labelledby="scenario-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={[
          { value: 0, label: 'USA Wins' },
          { value: 1, label: 'China Wins' },
          { value: 2, label: 'Collapse' }
        ]}
        min={0}
        max={2}
        onChange={handleScenarioChange}
        className="w-2/4 "
      />
    </div>
  );
};

export default SolarReturnChart;
