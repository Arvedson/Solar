import React from 'react';
import { Field } from 'formik';

const FinanceSection: React.FC = () => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700">Costo Total del Sistema ($):</label>
      <Field
        name="costoTotalSistema"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Subvenciones ($):</label>
      <Field
        name="subvenciones"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Costo Neto ($):</label>
      <Field
        name="costoNeto"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Financiamiento:</label>
      <Field
        name="financiamiento"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Periodo de Retorno de la Inversión (años):</label>
      <Field
        name="periodoRetornoInversion"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Reducción de CO2 Anual (toneladas):</label>
      <Field
        name="reduccionCO2Anual"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Equivalentes en Árboles Plantados:</label>
      <Field
        name="equivalentesArbolesPlantados"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Garantía de Paneles:</label>
      <Field
        name="garantiaPaneles"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Garantía del Inversor:</label>
      <Field
        name="garantiaInversor"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Garantía de la Instalación:</label>
      <Field
        name="garantiaInstalacion"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
  </>
);

export default FinanceSection;
