import React from 'react';
import { Field } from 'formik';

const MaintenanceSection: React.FC = () => (
  <>
    <div>
      <label className="block text-sm font-medium text-gray-700">Mantenimiento:</label>
      <Field
        name="mantenimiento"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Tiempo Estimado de Instalación:</label>
      <Field
        name="tiempoEstimadoInstalacion"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Requerimientos de Permisos:</label>
      <Field
        name="requerimientosPermisos"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Procedimiento de Instalación:</label>
      <Field
        name="procedimientoInstalacion"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Programa de Referidos:</label>
      <Field
        name="programaReferidos"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Batería de Almacenamiento:</label>
      <Field
        name="bateriaAlmacenamiento"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Posibilidad de Expansión:</label>
      <Field
        name="posibilidadExpansion"
        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
      />
    </div>
  </>
);

export default MaintenanceSection;
