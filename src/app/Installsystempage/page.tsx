'use client';
import React, { useState } from 'react';
import AnnualConsumptionForm from '../../components/app/AnnualConsumptionForm';
import BimonthlyConsumptionForm from '../../components/app/BimonthlyConsumptionForm';
import MonthlyConsumptionForm from '../../components/app/MonthlyConsumptionForm';
import FileUpload from '@/components/app/FileUpload';
import ComboboxTarifas from '../../components/app/ComboboxTarifas';
import TarifasInfo from '../../components/app/TarifasInfo';
import ImageReader from '@/components/app/ImageReader';
import AnnualConsumptionComponent from '../../components/app/AnnualConsumptionComponent ';
import CotizarButton from '../../components/app/CotizarButton';

const InstallSystemPage: React.FC = () => {
  const [selectedForm, setSelectedForm] = useState<'annual' | 'bimonthly' | 'monthly' | null>(null);
  const [annualConsumption, setAnnualConsumption] = useState<number | null>(null);
  const [selectedTarifa, setSelectedTarifa] = useState<string>("");
  const [showTarifasInfo, setShowTarifasInfo] = useState<boolean>(false);
  const [showAnnualConsumptionComponent, setShowAnnualConsumptionComponent] = useState<boolean>(false);
  const [highlightAnnualInput, setHighlightAnnualInput] = useState<boolean>(false);
  const [calculated, setCalculated] = useState(false);
  const [showCalculateButton, setShowCalculateButton] = useState(true);
  const [showTarifaWarning, setShowTarifaWarning] = useState(false);

  const handleCheckboxChange = (formType: 'annual' | 'bimonthly' | 'monthly') => {
    setSelectedForm((prevForm) => (prevForm === formType ? null : formType));
  };

  const handleSelectTarifa = (value: string) => {
    setSelectedTarifa(value);
    setShowTarifaWarning(false);
    console.log("Tarifa seleccionada:", value);
  };

  const toggleTarifasInfo = () => {
    setShowTarifasInfo(!showTarifasInfo);
  };

  const toggleAnnualConsumptionComponent = () => {
    setShowAnnualConsumptionComponent(!showAnnualConsumptionComponent);
  };

  const handleCotizar = () => {
    if (!selectedTarifa) {
      setShowTarifaWarning(true);
    } else {
      console.log("Cotizar clicked");
      console.log("Consumo anual:", annualConsumption);
      console.log("Tarifa seleccionada:", selectedTarifa);
    }
  };

  const continueWithoutTarifa = () => {
    setShowTarifaWarning(false);
    console.log("Cotizar clicked");
    console.log("Consumo anual:", annualConsumption);
    console.log("Tarifa no seleccionada");
  };

  const handleBimonthlySubmit = (consumption: number) => {
    const totalAnnual = consumption;
    setAnnualConsumption(totalAnnual);
    setHighlightAnnualInput(true);
    setSelectedForm('annual');
    setCalculated(true);
    setShowCalculateButton(false);
  };

  const handleMonthlySubmit = (consumption: number) => {
    const totalAnnual = consumption;
    setAnnualConsumption(totalAnnual);
    setHighlightAnnualInput(true);
    setSelectedForm('annual');
    setCalculated(true);
    setShowCalculateButton(false);
  };

  const handleImageReaderSubmit = (annualKwh: number) => {
    setAnnualConsumption(annualKwh);
    setHighlightAnnualInput(true);
    setSelectedForm('annual');
    setCalculated(true);
    setShowCalculateButton(false);
  };

  const handleAnnualSubmit = (consumption: number) => {
    setAnnualConsumption(consumption);
    setHighlightAnnualInput(true);
    setCalculated(true);
    setShowCalculateButton(false);
  };

  const resetAnnualConsumption = () => {
    setAnnualConsumption(null);
    setHighlightAnnualInput(false);
    setSelectedForm(null);
    setCalculated(false);
    setShowCalculateButton(true);
    setShowTarifaWarning(false);
  };

  return (
    <div className="container mx-auto p-6 bg-background text-foreground">
      <div className="bg-card p-6 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-3xl font-bold mb-6 text-center">Instala tu Sistema</h1>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-4 text-center">Consumo Eléctrico</label>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <div className="border flex items-center space-x-2 bg-muted p-2 rounded-lg">
              <input
                type="checkbox"
                checked={selectedForm === 'annual'}
                onChange={() => handleCheckboxChange('annual')}
                className="mr-2"
                disabled={calculated} // Desactivar checkbox si se ha calculado
              />
              <label>Ingresar consumo anual</label>
            </div>
            <div className="flex items-center space-x-2 bg-muted p-2 rounded-lg border">
              <input
                type="checkbox"
                checked={selectedForm === 'bimonthly'}
                onChange={() => handleCheckboxChange('bimonthly')}
                className="mr-2"
                disabled={calculated} // Desactivar checkbox si se ha calculado
              />
              <label>Ingresar consumo bimensual</label>
            </div>
            <div className="flex border items-center space-x-2 bg-muted p-2 rounded-lg">
              <input
                type="checkbox"
                checked={selectedForm === 'monthly'}
                onChange={() => handleCheckboxChange('monthly')}
                className="mr-2"
                disabled={calculated} // Desactivar checkbox si se ha calculado
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

          {showTarifaWarning && (
            <div className="bg-red-200 text-red-800 p-4 rounded-lg mt-4 ">
              <p>No has ingresado tu tarifa, esto no afecta tu cotización pero sí afecta en poder darte una comparativa de tu antes y después.</p>
              <button
                onClick={continueWithoutTarifa}
                className="bg-primary text-primary-foreground mt-2 px-4 py-2 rounded-lg shadow-lg hover:bg-primary-foreground hover:text-primary transition"
              >
                Continuar sin tarifa
              </button>
            </div>
          )}

{highlightAnnualInput && (
  <div className="flex justify-center mt-4 space-x-4">
    <button
      onClick={resetAnnualConsumption}
      className="bg-destructive text-destructive-foreground px-6 py-2 rounded-lg shadow-lg hover:bg-destructive-foreground hover:text-destructive transition flex items-center justify-center"
    >
      Eliminar
    </button>

    <button
      onClick={handleCotizar}
      className="bg-primary text-primary-foreground px-6 py-2 rounded-lg shadow-lg hover:bg-primary-foreground hover:text-primary transition flex items-center justify-center"
    >
      Cotizar
    </button>
  </div>
)}

        </div>

        <div className="bg-card p-4 rounded-lg shadow-lg mt-6">
          {selectedForm === 'annual' && <AnnualConsumptionForm annualConsumption={annualConsumption} setAnnualConsumption={handleAnnualSubmit} highlight={highlightAnnualInput} showCalculateButton={showCalculateButton} />}
          {selectedForm === 'bimonthly' && <BimonthlyConsumptionForm setBimonthlyConsumption={handleBimonthlySubmit} />}
          {selectedForm === 'monthly' && <MonthlyConsumptionForm setMonthlyConsumption={handleMonthlySubmit} />}
        </div>
        <ImageReader onAnnualKwhChange={handleImageReaderSubmit} />
        <FileUpload />

        <div className="mt-6 gap-6 flex flex-col sm:flex-row justify-center items-center">
  <button onClick={toggleTarifasInfo} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-lg mb-4 sm:mb-0 hover:bg-muted hover:text-muted-foreground transition">
    {showTarifasInfo ? 'Ocultar Información de Tarifas' : 'Mostrar Información de Tarifas'}
  </button>
  <button onClick={toggleAnnualConsumptionComponent} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-lg hover:bg-muted hover:text-muted-foreground transition">
    {showAnnualConsumptionComponent ? 'Ocultar como interpretar mi recibo' : 'Como interpretar mi recibo?'}
  </button>
</div>


        {showTarifasInfo && <TarifasInfo />}
        {showAnnualConsumptionComponent && <AnnualConsumptionComponent />}
      </div>

    </div>
  );
};

export default InstallSystemPage;
