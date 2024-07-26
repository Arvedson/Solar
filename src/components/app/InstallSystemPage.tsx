'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCotizacion } from '@/context/CotizacionContext';
import AnnualConsumptionForm from './AnnualConsumptionForm';
import BimonthlyConsumptionForm from './BimonthlyConsumptionForm';
import MonthlyConsumptionForm from './MonthlyConsumptionForm';
import FileUpload from './FileUpload';
import ComboboxTarifas from './ComboboxTarifas';
import TarifasInfo from './TarifasInfo';
import ImageReader from './ImageReader';
import AnnualConsumptionComponent from './AnnualConsumptionComponent ';
import CotizacionResults from './CotizacionResults';
import Graficos from './Graficos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const InstallSystemPage: React.FC = () => {
  const { annualConsumption, setAnnualConsumption, selectedTarifa, setSelectedTarifa } = useCotizacion();
  const [selectedForm, setSelectedForm] = useState<'annual' | 'bimonthly' | 'monthly' | null>(null);
  const [showTarifasInfo, setShowTarifasInfo] = useState<boolean>(false);
  const [showAnnualConsumptionComponent, setShowAnnualConsumptionComponent] = useState<boolean>(false);
  const [highlightAnnualInput, setHighlightAnnualInput] = useState<boolean>(false);
  const [calculated, setCalculated] = useState(false);
  const [showCalculateButton, setShowCalculateButton] = useState(true);
  const [showTarifaWarning, setShowTarifaWarning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      nextComponent();
    }
  };

  const continueWithoutTarifa = () => {
    setShowTarifaWarning(false);
    console.log("Cotizar clicked");
    console.log("Consumo anual:", annualConsumption);
    console.log("Tarifa no seleccionada");
    nextComponent();
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
    setAnnualConsumption(0); // Establece a 0 en lugar de null
    setHighlightAnnualInput(false);
    setSelectedForm(null);
    setCalculated(false);
    setShowCalculateButton(true);
    setShowTarifaWarning(false);
  };

  const components = [
    {
      id: 'initial',
      component: (
        <div className="bg-card p-6 rounded-lg shadow-lg border border-gray-300">
          <h1 className="text-3xl font-bold mb-6 text-center">Instala tu Sistema</h1>
          <div className="">
            <label className="block text-lg font-semibold mb-4 text-center">Consumo Eléctrico</label>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
              <div className="flex items-center space-x-2 bg-muted p-2 rounded-lg border">
                <input
                  type="checkbox"
                  id="cbx-annual"
                  style={{ display: "none" }}
                  checked={selectedForm === 'annual'}
                  onChange={() => handleCheckboxChange('annual')}
                  disabled={calculated}
                />
                <label htmlFor="cbx-annual" className="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <label>Ingresar consumo anual</label>
              </div>
              <div className="flex items-center space-x-2 bg-muted p-2 rounded-lg border">
                <input
                  type="checkbox"
                  id="cbx-bimonthly"
                  style={{ display: "none" }}
                  checked={selectedForm === 'bimonthly'}
                  onChange={() => handleCheckboxChange('bimonthly')}
                  disabled={calculated}
                />
                <label htmlFor="cbx-bimonthly" className="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <label>Ingresar consumo bimensual</label>
              </div>
              <div className="flex items-center space-x-2 bg-muted p-2 rounded-lg border">
                <input
                  type="checkbox"
                  id="cbx-monthly"
                  style={{ display: "none" }}
                  checked={selectedForm === 'monthly'}
                  onChange={() => handleCheckboxChange('monthly')}
                  disabled={calculated}
                />
                <label htmlFor="cbx-monthly" className="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <label>Ingresar consumo mensual</label>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-muted-foreground text-center mt-6">
                Selecciona una opción para <span className="highlight">ingresar tu consumo eléctrico.</span>
              </p>
              <p className="text-muted-foreground text-center mt-4">
                <span className="highlight">Ingresa tu consumo eléctrico</span> mensual, bimensual o anual.
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
                  className="bg-primary text-black px-6 py-2 rounded-lg shadow-lg hover:bg-primary-foreground hover:text-primary transition flex items-center justify-center"
                >
                  Cotizar
                </button>
              </div>
            )}
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg ">
            {selectedForm === 'annual' && <AnnualConsumptionForm annualConsumption={annualConsumption} setAnnualConsumption={handleAnnualSubmit} highlight={highlightAnnualInput} showCalculateButton={showCalculateButton} />}
            {selectedForm === 'bimonthly' && <BimonthlyConsumptionForm setBimonthlyConsumption={handleBimonthlySubmit} />}
            {selectedForm === 'monthly' && <MonthlyConsumptionForm setMonthlyConsumption={handleMonthlySubmit} />}
          </div>

          <ImageReader onAnnualKwhChange={handleImageReaderSubmit} />
         

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
      )
    },
    { id: 'cotizationResults', component: <CotizacionResults /> },
    { id: 'graficos', component: <Graficos /> },
  ];

  const nextComponent = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevComponent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 bg-background text-foreground flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {components[currentIndex].component}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-row justify-between navigation-buttons gap-10 mt-6">
        <button onClick={prevComponent} disabled={currentIndex === 0}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={nextComponent} disabled={currentIndex === components.length - 1}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default InstallSystemPage;
