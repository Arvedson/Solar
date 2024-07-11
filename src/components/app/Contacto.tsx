"use client";
import React from 'react';

const Contacto: React.FC = () => {
  return (
    <section id="contacto" className="bg-background text-foreground py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contactanos Directamente</h2>
          <p className="text-lg mb-6">Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
              <input type="text" id="name" className="w-full p-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico</label>
              <input type="email" id="email" className="w-full p-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea id="message" rows={4} className="w-full p-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-primary text-tertiary rounded hover:bg-primary-foreground hover:text-primary transition">Enviar</button>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
          <p className="text-lg mb-2"><strong>Teléfono:</strong> +1 6666666</p>
          <p className="text-lg mb-2"><strong>Correo Electrónico:</strong> contacto@ququlcan.com.mx</p>
          <p className="text-lg mb-6"><strong>Dirección:</strong> Tu corazon</p>
          <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
            {/* Aquí puedes integrar un mapa, como Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019852702058!2d-122.42177808468316!3d37.77492977975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c77c2f233%3A0x75127d3d17a4a32f!2sMarket%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sus!4v1580397282368!5m2!1sen!2sus"
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
