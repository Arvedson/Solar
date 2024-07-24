import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface CotizacionContextProps {
  annualConsumption: number;
  selectedTarifa: string;
  panelCount: number;
  panelCost: number;
  microinversorCost: number;
  estructuraCost: number;
  proteccionCost: number;
  sistemaTierrasCost: number;
  manoDeObraCost: number;
  totalPrice: number;
  isBusiness: boolean;
  costPerKWh: number;
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
  setIsBusiness: (value: boolean) => void;
  setCostPerKWh: (value: number) => void;
 
}

const CotizacionContext = createContext<CotizacionContextProps | undefined>(undefined);

export const CotizacionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [annualConsumption, setAnnualConsumption] = useState<number>(0);
  const [selectedTarifa, setSelectedTarifa] = useState<string>('');
  const [panelCount, setPanelCount] = useState<number>(0);
  const [panelCost, setPanelCost] = useState<number>(0);
  const [microinversorCost, setMicroinversorCost] = useState<number>(0);
  const [estructuraCost, setEstructuraCost] = useState<number>(0);
  const [proteccionCost, setProteccionCost] = useState<number>(0);
  const [sistemaTierrasCost, setSistemaTierrasCost] = useState<number>(0);
  const [manoDeObraCost, setManoDeObraCost] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isBusiness, setIsBusiness] = useState<boolean>(false);
  const [costPerKWh, setCostPerKWh] = useState<number>(0);




  // precio del sistema
  const calculateTotalPrice = () => {
    setTotalPrice(panelCost + microinversorCost + estructuraCost + proteccionCost + sistemaTierrasCost + manoDeObraCost);
  };



  // tarifa a la fuerza
/*   const determinarTarifaCFE = (consumoAnual: number, isBusiness: boolean): string => {
    const consumoMensual = consumoAnual / 12;
    console.log(consumoMensual, "consumo mensual")
    if (isBusiness) {
      if (consumoMensual <= 25000) {
        return 'Tarifa PDBT';
      } else {
        return 'Tarifa GDBT';
      }
    } else {
      if (consumoAnual <= 3000) {
        return 'Tarifa 1';
      } else if (consumoAnual <= 3600) {
        return 'Tarifa 1A';
      } else if (consumoAnual <= 4800) {
        return 'Tarifa 1B';
      } else if (consumoAnual <= 9600) {
        return 'Tarifa 1C';
      } else if (consumoAnual <= 12000) {
        return 'Tarifa 1D';
      } else if (consumoAnual <= 24000) {
        return 'Tarifa 1E';
      } else if (consumoAnual <= 30000) {
        return 'Tarifa 1F';
      } else {
        return 'Tarifa DAC';
      }
    }
  }; */

  // función para determinar la tarifa CFE
  const determinarTarifaCFE = (consumoAnual: number, isBusiness: boolean): string => {
    const consumoMensual = consumoAnual / 12;
    console.log(consumoMensual, "consumo mensual");
    if (isBusiness) {
      if (consumoMensual <= 25000) {
        return 'Tarifa PDBT';
      } else {
        return 'Tarifa GDBT';
      }
    } else {
      return 'Tarifa 1C'; // Tarifa por defecto para residenciales en Torreón
    }
  };

  // función para actualizar la tarifa seleccionada
  const actualizarTarifa = () => {
    const tarifaDeducida = determinarTarifaCFE(annualConsumption, isBusiness);
    setSelectedTarifa(tarifaDeducida);
    console.log(`Tarifa deducida: ${tarifaDeducida}`);
  };

  useEffect(() => {
    actualizarTarifa();
  }, [annualConsumption, isBusiness]);




// calcular el costo promedio por kWh
const calculateCostPerKWh = (consumoAnual: number) => {
  let costoTotal = 0;
  const consumoMensual = consumoAnual / 12;

  if (isBusiness) {
    if (consumoMensual <= 25000) {
      costoTotal = consumoMensual * 4.5; // Tarifa PDBT, por ejemplo
      console.log(`Consumo Bajo (Negocio): ${consumoMensual} kWh/mes, Costo: $4.5/kWh`);
    } else {
      costoTotal = consumoMensual * 5.5; // Tarifa GDBT, por ejemplo
      console.log(`Consumo Alto (Negocio): ${consumoMensual} kWh/mes, Costo: $5.5/kWh`);
    }
  } else {
    if (consumoMensual <= 175) {
      costoTotal = consumoMensual * 0.793; // costo básico
      console.log(`Consumo Bajo (Residencial): ${consumoMensual} kWh/mes, Costo: $0.793/kWh`);
    } else if (consumoMensual <= 400) {
      costoTotal = (175 * 0.793) + ((consumoMensual - 175) * 0.956); // costo intermedio
      console.log(`Consumo Medio (Residencial): ${consumoMensual} kWh/mes, Costo: $0.956/kWh`);
    } else {
      costoTotal = (175 * 0.793) + (225 * 0.956) + ((consumoMensual - 400) * 2.802); // costo excedente
      console.log(`Consumo Alto (Residencial): ${consumoMensual} kWh/mes, Costo: $2.802/kWh`);
    }
  }

  setCostPerKWh(costoTotal / consumoMensual);
  console.log(`Costo Promedio por kWh: $${(costoTotal / consumoMensual).toFixed(2)}/kWh`);
};

useEffect(() => {
  calculateCostPerKWh(annualConsumption);
}, [annualConsumption, isBusiness]);

useEffect(() => {
  const tarifaDeducida = determinarTarifaCFE(annualConsumption, isBusiness);
  setSelectedTarifa(tarifaDeducida);
  console.log(`Tarifa deducida: ${tarifaDeducida}`);
}, [annualConsumption, isBusiness]);







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
      isBusiness,
      costPerKWh,
      
      
      setAnnualConsumption,
      setSelectedTarifa,
      setPanelCount,
      setPanelCost,
      setMicroinversorCost,
      setEstructuraCost,
      setProteccionCost,
      setSistemaTierrasCost,
      setManoDeObraCost,
      setIsBusiness,
      calculateTotalPrice,
      setCostPerKWh
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
