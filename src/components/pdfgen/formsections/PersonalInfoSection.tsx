import React from 'react';
import { Field } from 'formik';

const PersonalInfoSection: React.FC = () => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700">Nombre:</label>
      <Field
        name="nombre"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Dirección:</label>
      <Field
        name="direccion"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Fecha de la Propuesta:</label>
      <Field
        name="fechaPropuesta"
        type="date"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Representante de Ventas:</label>
      <Field
        name="representanteVentas"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Contacto:</label>
      <Field
        name="contacto"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
  </>
);

export default PersonalInfoSection;
