import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InflationData {
  inflationRates: number[];
  solarReturn: number[];
}

interface InflationContextType {
  scenario: string;
  setScenario: (scenario: string) => void;
  inflationData: Record<string, InflationData>;
  calculateReturns: (baseRate: number) => number[];
}

const InflationContext = createContext<InflationContextType | undefined>(undefined);

export const useInflationContext = () => {
  const context = useContext(InflationContext);
  if (!context) {
    throw new Error('useInflationContext must be used within an InflationProvider');
  }
  return context;
};

interface InflationProviderProps {
  children: ReactNode;
}

export const InflationProvider: React.FC<InflationProviderProps> = ({ children }) => {
  const [scenario, setScenario] = useState('usaWins');

  const inflationData: Record<string, InflationData> = {
    usaWins: {
      inflationRates: [5, 4.5, 4, 3.5, 3, 2.5], // Inflación anual para el escenario "USA Wins"
      solarReturn: [] // Será calculado
    },
    chinaWins: {
      inflationRates: [5, 5.5, 6, 6.5, 7, 7.5], // Inflación anual para el escenario "China Wins"
      solarReturn: [] // Será calculado
    },
    collapse: {
      inflationRates: [5, 15, 25, 20, 15, 15], // Inflación anual para el escenario "Collapse"
      solarReturn: [] // Será calculado
    }
  };

  const calculateReturns = (baseRate: number) => {
    const rates = inflationData[scenario].inflationRates;
    let currentRate = baseRate;
    const returns = [];
    for (let year = 0; year < 25; year++) {
      const yearlyReturn = 27000 * currentRate;
      returns.push(yearlyReturn);
      currentRate *= (1 + rates[Math.min(year, rates.length - 1)] / 100);
    }
    return returns;
  };

  return (
    <InflationContext.Provider value={{ scenario, setScenario, inflationData, calculateReturns }}>
      {children}
    </InflationContext.Provider>
  );
};
