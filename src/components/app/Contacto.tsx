// src/app/Contacto.tsx

import React, { useState } from 'react';
import FileUpload from './FileUpload';

interface FormData {
  name: string;
  email: string;
  message: string;
  files: { name: string; content: string }[];
}

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    files: []
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFiles = (acceptedFiles: { name: string; content: string }[]) => {
    setFormData({ ...formData, files: acceptedFiles });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          files: []
        });
      } else {
        setError('Error enviando el correo');
      }
    } catch (error) {
      console.error(error);
      setError('Error enviando el correo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="bg-background text-foreground py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contáctanos Directamente</h2>
          <p className="text-lg mb-6">Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.</p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-white rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico ó Teléfono</label>
              <input type="text" id="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-white rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea id="message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-3 border border-white rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>
            <FileUpload onFilesAccepted={handleFiles} />
            <button type="submit" className="w-20 py-3 bg-primary text-tertiary rounded hover:bg-primary-foreground hover:text-primary transition self-center" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
            {success && <p className="text-green-500 mt-2">¡Correo enviado con éxito!</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.485451501998!2d-103.3767416!3d25.573315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdadc7e25883b%3A0x72375708d061f4cb!2sTabachines%2C%20Quintas%20Campestres%20los%20Laureles%2C%2027053%20Torre%C3%B3n%2C%20Coah.!5e0!3m2!1ses!2smx!4v1580397282368!5m2!1ses!2smx"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
