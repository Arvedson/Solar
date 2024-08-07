import React from 'react';
import { Field } from 'formik';

const SystemDetailsSection: React.FC = () => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700">Consumo Anual (kWh):</label>
      <Field
        name="consumoAnual"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((month, index) => (
      <div key={index}>
        <label className="block text-sm font-medium text-gray-700">Costo {month} ($):</label>
        <Field
          name={`costoMensualElectricidad[${index}]`}
          type="number"
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
        />
      </div>
    ))}
    <div>
      <label className="block text-sm font-medium text-gray-700">Tamaño del Sistema (kW):</label>
      <Field
        name="tamanoSistema"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Paneles Solares:</label>
      <Field
        name="panelesSolares"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Inversor:</label>
      <Field
        name="inversor"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Orientación de los Paneles:</label>
      <Field
        name="orientacionPaneles"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Producción Anual (kWh):</label>
      <Field
        name="produccionAnual"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Ahorro Anual Estimado ($):</label>
      <Field
        name="ahorroAnualEstimado"
        type="number"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
  </>
);

export default SystemDetailsSection;
