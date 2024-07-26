import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 p-4">
            <h2 className="text-lg font-bold text-gray-700">Ququlkan Solar</h2>
            <p className="text-sm text-gray-700">&copy; 2024 Ququlkan Solar. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-black">Política de Privacidad</a>
            <a href="#" className="hover:text-black">Términos de Servicio</a>
            <a href="#" className="hover:text-black">Contáctanos</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
          <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-0 gap-6">
            <h4 className="text-md font-semibold text-gray-700">Mantente Conectado</h4>
            <form className="flex flex-col md:flex-row md:items-center gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="p-2 border border-gray-300 rounded-md" 
              />
              <button className="p-2 bg-gray-700 text-white rounded-md hover:bg-black">
                Suscribirse
              </button>
            </form>
            <p className="text-sm text-gray-700 mt-2 md:mt-0">Si te suscribes, recibirás ofertas y noticias.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-black"><FaFacebook size="1.5em" className="md:size-2em lg:size-2.5em" /></a>
            <a href="#" className="text-gray-700 hover:text-black"><FaTwitter size="1.5em" className="md:size-2em lg:size-2.5em" /></a>
            <a href="#" className="text-gray-700 hover:text-black"><FaInstagram size="1.5em" className="md:size-2em lg:size-2.5em" /></a>
            <a href="#" className="text-gray-700 hover:text-black"><FaLinkedin size="1.5em" className="md:size-2em lg:size-2.5em" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
