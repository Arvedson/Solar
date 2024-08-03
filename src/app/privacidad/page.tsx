// src/app/privacidad/page.tsx

import React from 'react';

const Privacidad = () => {
  return (
    <div className="bg-background text-foreground container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary-foreground">Aviso de Privacidad</h1>
      
      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Responsable del Tratamiento de sus Datos Personales</h2>
        <p className="mt-4">Ququlkan Energía Solar S.A. de C.V.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Datos Personales que Recopilamos</h2>
        <p className="mt-4">Recopilamos los siguientes datos personales: nombre, dirección, correo electrónico, número de teléfono e información de pago, así como también sin ser limitativo imágenes de las instalaciones solares que se realicen.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Finalidades del Tratamiento de Datos</h2>
        <ul className="list-disc pl-6 mt-4">
          <li className="mt-2">Procesar pedidos y proporcionar soporte al cliente.</li>
          <li className="mt-2">Enviar comunicaciones de marketing, promociones y publicidad.</li>
          <li className="mt-2">Realizar campañas privadas o públicas para el beneficio de la empresa.</li>
          <li className="mt-2">Cumplir con obligaciones legales.</li>
        </ul>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Transferencia de Datos Personales</h2>
        <p className="mt-4">Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo en los casos previstos por la ley.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Derechos ARCO</h2>
        <p className="mt-4">Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, por favor envíe una solicitud a <a href="mailto:admin@ququlkan-solar.com" className="text-info hover:underline">admin@ququlkan-solar.com</a>, indicando su nombre completo, los derechos que desea ejercer y la información necesaria para localizar sus datos.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Medidas de Seguridad</h2>
        <p className="mt-4">Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la divulgación, la pérdida o la destrucción.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Cambios al Aviso de Privacidad</h2>
        <p className="mt-4">Nos reservamos el derecho de realizar modificaciones o actualizaciones a este Aviso de Privacidad. Cualquier cambio será publicado en nuestro sitio web y, en su caso, se le notificará por correo electrónico.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Contacto</h2>
        <p className="mt-4">Si tiene alguna pregunta o inquietud sobre nuestro Aviso de Privacidad, por favor contáctenos a <a href="mailto:admin@ququlkan-solar.com" className="text-info hover:underline">admin@ququlkan-solar.com</a> o al <a href="tel:+528717686817" className="text-info hover:underline">+52 (87)1 234 0891 </a>.</p>
      </div>
    </div>
  );
};

export default Privacidad;
