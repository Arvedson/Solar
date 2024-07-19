// src/context/CotizacionContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface CotizacionContextProps {
  annualConsumption: number | null;
  selectedTarifa: string;
  panelCount: number;
  panelCost: number;
  microinversorCost: number;
  estructuraCost: number;
  proteccionCost: number;
  sistemaTierrasCost: number;
  manoDeObraCost: number;
  totalPrice: number;
  setAnnualConsumption: (value: number) => void;
  setSelectedTarifa: (value: string) => void;
  setPanelCount: (value: number) => void;
  setPanelCost: (value: number) => void;
  setMicroinversorCost: (value: number) => void;
  setEstructuraCost: (value: number) => void;
  setProteccionCost: (value: number) => void;
  setSistemaTierrasCost: (value: number) => void;
  setManoDeObraCost: (value: number) => void;
  calculateTotalPrice: () => void;
}

const CotizacionContext = createContext<CotizacionContextProps | undefined>(undefined);

export const CotizacionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [annualConsumption, setAnnualConsumption] = useState<number | null>(null);
  const [selectedTarifa, setSelectedTarifa] = useState<string>('');
  const [panelCount, setPanelCount] = useState<number>(0);
  const [panelCost, setPanelCost] = useState<number>(0);
  const [microinversorCost, setMicroinversorCost] = useState<number>(0);
  const [estructuraCost, setEstructuraCost] = useState<number>(0);
  const [proteccionCost, setProteccionCost] = useState<number>(0);
  const [sistemaTierrasCost, setSistemaTierrasCost] = useState<number>(0);
  const [manoDeObraCost, setManoDeObraCost] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotalPrice = () => {
    setTotalPrice(panelCost + microinversorCost + estructuraCost + proteccionCost + sistemaTierrasCost + manoDeObraCost);
  };

  return (
    <CotizacionContext.Provider value={{
      annualConsumption,
      selectedTarifa,
      panelCount,
      panelCost,
      microinversorCost,
      estructuraCost,
      proteccionCost,
      sistemaTierrasCost,
      manoDeObraCost,
      totalPrice,
      setAnnualConsumption,
      setSelectedTarifa,
      setPanelCount,
      setPanelCost,
      setMicroinversorCost,
      setEstructuraCost,
      setProteccionCost,
      setSistemaTierrasCost,
      setManoDeObraCost,
      calculateTotalPrice
    }}>
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
