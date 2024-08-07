import React from 'react';
import { Field } from 'formik';

const VisualizationSection: React.FC = () => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700">Renderizado 3D:</label>
      <Field
        name="renderizado3D"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Simulación de Producción:</label>
      <Field
        name="simulacionProduccion"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
  </>
);

export default VisualizationSection;
