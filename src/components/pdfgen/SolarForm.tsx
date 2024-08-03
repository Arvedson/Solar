import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SolarPDF from './SolarPDF';

interface FormValues {
  nombre: string;
  direccion: string;
  fechaPropuesta: string;
  representanteVentas: string;
  // Otros campos necesarios
}

const SolarForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues | null>(null);

  return (
    <Formik
      initialValues={{ nombre: '', direccion: '', fechaPropuesta: '', representanteVentas: '' }}
      onSubmit={(values) => {
        setFormValues(values);
      }}
    >
      {({ handleChange, values }) => (
        <Form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre:</label>
            <Field
              name="nombre"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
              onChange={handleChange}
              value={values.nombre}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Dirección:</label>
            <Field
              name="direccion"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
              onChange={handleChange}
              value={values.direccion}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha de la Propuesta:</label>
            <Field
              name="fechaPropuesta"
              type="date"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
              onChange={handleChange}
              value={values.fechaPropuesta}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Representante de Ventas:</label>
            <Field
              name="representanteVentas"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
              onChange={handleChange}
              value={values.representanteVentas}
            />
          </div>
          {/* Añadir otros campos según sea necesario */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Generar PDF
          </button>

          {formValues && (
            <div className="mt-4">
              <PDFDownloadLink
                document={<SolarPDF {...formValues} />}
                fileName="propuesta.pdf"
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Generando PDF...' : 'Descargar PDF'
                }
              </PDFDownloadLink>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SolarForm;
