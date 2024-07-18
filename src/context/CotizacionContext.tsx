// src/context/CotizacionContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface CotizacionContextProps {
  annualConsumption: number | null;
  selectedTarifa: string;
  setAnnualConsumption: (value: number) => void;
  setSelectedTarifa: (value: string) => void;
}

const CotizacionContext = createContext<CotizacionContextProps | undefined>(undefined);

export const CotizacionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [annualConsumption, setAnnualConsumption] = useState<number | null>(null);
  const [selectedTarifa, setSelectedTarifa] = useState<string>('');

  return (
    <CotizacionContext.Provider value={{ annualConsumption, selectedTarifa, setAnnualConsumption, setSelectedTarifa }}>
      {children}
    </CotizacionContext.Provider>
  );
};

export const useCotizacion = (): CotizacionContextProps => {
  const context = useContext(CotizacionContext);
  if (!context) {
    throw new Error('useCotizacion must be used within a CotizacionProvider');
  }
  return context;
};
