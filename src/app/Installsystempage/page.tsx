'use client';

import React, { useState } from 'react';
import AnnualConsumptionForm from '../../components/AnnualConsumptionForm';
import BimonthlyConsumptionForm from '../../components/BimonthlyConsumptionForm';
import MonthlyConsumptionForm from '../../components/MonthlyConsumptionForm';
import FileUpload from '@/components/FileUpload';
import ComboboxTarifas from '../../components/ComboboxTarifas';
import TarifasInfo from '../../components/TarifasInfo';

import ImageReader from '@/components/ImageReader';

const InstallSystemPage: React.FC = () => {
  const [selectedForm, setSelectedForm] = useState<'annual' | 'bimonthly' | 'monthly' | null>(null);
  const [annualConsumption, setAnnualConsumption] = useState<number | null>(null);
  const [bimonthlyConsumption, setBimonthlyConsumption] = useState<number | null>(null);
  const [monthlyConsumption, setMonthlyConsumption] = useState<number | null>(null);
  const [selectedTarifa, setSelectedTarifa] = useState<string>("");
  const [showTarifasInfo, setShowTarifasInfo] = useState<boolean>(false);

  const handleCheckboxChange = (formType: 'annual' | 'bimonthly' | 'monthly') => {
    setSelectedForm((prevForm) => (prevForm === formType ? null : formType));
  };

  const handleSelectTarifa = (value: string) => {
    setSelectedTarifa(value);
    console.log("Tarifa seleccionada:", value);
  };

  const toggleTarifasInfo = () => {
    setShowTarifasInfo(!showTarifasInfo);
  };

  return (
    <div className="container mx-auto p-6 bg-background text-foreground">
      <div className="bg-card p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Instala tu Sistema</h1>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-4 text-center">Consumo Eléctrico</label>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <div className="flex items-center space-x-2 bg-muted p-2 rounded-lg">
              <input
                type="checkbox"
                checked={selectedForm === 'annual'}
                onChange={() => handleCheckboxChange('annual')}
                className="mr-2"
              />
              <label>Ingresar consumo anual</label>
            </div>
            <div className="flex items-center space-x-2 bg-muted p-2 rounded-lg">
              <input
                type="checkbox"
                checked={selectedForm === 'bimonthly'}
                onChange={() => handleCheckboxChange('bimonthly')}
                className="mr-2"
              />
              <label>Ingresar consumo bimensual</label>
            </div>
            <div className="flex items-center space-x-2 bg-muted p-2 rounded-lg">
              <input
                type="checkbox"
                checked={selectedForm === 'monthly'}
                onChange={() => handleCheckboxChange('monthly')}
                className="mr-2"
              />
              <label>Ingresar consumo mensual</label>
            </div>
          </div>
          <div className="flex flex-col items-center">
            
            <p className="text-muted-foreground text-center mt-6">
              Selecciona una opción para ingresar tu consumo eléctrico.
            </p>
            <p className="text-muted-foreground text-center mt-4">
              Ingresa tu consumo eléctrico mensual, bimensual o anual.
            </p>
            <ComboboxTarifas className="mt-6" onSelectTarifa={handleSelectTarifa} />
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg shadow-lg mt-6">
          {selectedForm === 'annual' && <AnnualConsumptionForm annualConsumption={annualConsumption} setAnnualConsumption={setAnnualConsumption} />}
          {selectedForm === 'bimonthly' && <BimonthlyConsumptionForm bimonthlyConsumption={bimonthlyConsumption} setBimonthlyConsumption={setBimonthlyConsumption} />}
          {selectedForm === 'monthly' && <MonthlyConsumptionForm monthlyConsumption={monthlyConsumption} setMonthlyConsumption={setMonthlyConsumption} />}
        </div>
        <ImageReader/>
        <FileUpload />
        
        <div className="  mt-6 gap-12 ">

          <div className='flex flex-row gap-12'>
          <button onClick={toggleTarifasInfo} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
          {showTarifasInfo ? 'Ocultar Información de Tarifas' : 'Mostrar Información de Tarifas'}
        </button>

        <button onClick={toggleTarifasInfo} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
          {showTarifasInfo ? 'Ocultar Información de Tarifas' : 'Mostrar Información de Tarifas'}
        </button>

        

          </div>

          



        {showTarifasInfo && <TarifasInfo />}
        
      </div>
      </div>

    </div>
  );
};

export default InstallSystemPage;
