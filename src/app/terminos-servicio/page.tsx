// src/app/terminos-servicio/page.tsx

import React from 'react';

const TerminosServicio = () => {
  return (
    <div className="bg-background text-foreground container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary-foreground">Términos y Condiciones</h1>
      
      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Identificación de la Empresa</h2>
        <p className="mt-4">Nombre de la Empresa: Ququlkan Energía Solar S.A. de C.V.</p>
        <p>Domicilio: Torreón, Coahuila</p>
        <p>Correo Electrónico: <a href="mailto:admin@ququlkan-solar.com" className="text-info hover:underline">admin@ququlkan-solar.com</a></p>
        <p>Teléfono: <a href="tel:+528712340891" className="text-info hover:underline">+52 (87) 1234 0891</a></p>
        <p>Representante Legal: Jorge Eduardo Vallejo Leal</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Aceptación de los Términos y Condiciones</h2>
        <p className="mt-4">Al acceder y utilizar el sitio web ququlkan-solar.com en adelante, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones en adelante. Si no está de acuerdo con estos Términos, no utilice el Sitio.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Uso del Sitio</h2>
        <p className="mt-4">Condiciones de Uso</p>
        <ul className="list-disc pl-6">
          <li className="mt-2">No utilizar el Sitio para realizar actividades ilícitas.</li>
          <li className="mt-2">No intentar acceder a áreas restringidas del Sitio.</li>
          <li className="mt-2">No utilizar el Sitio para distribuir spam, virus o cualquier otro tipo de software malicioso.</li>
        </ul>
        <p className="mt-4">Propiedad Intelectual</p>
        <p className="mt-2">Todo el contenido del Sitio, incluyendo textos, imágenes, gráficos, logotipos, íconos, software y cualquier otro material, es propiedad de Ququlkan Energía Solar S.A. de C.V. y está protegido por las leyes de propiedad intelectual. No se permite la reproducción, distribución o uso no autorizado de este contenido sin el permiso previo y por escrito de la empresa.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Proceso de Compra y Pago</h2>
        <p className="mt-4">Proceso de Compra</p>
        <p className="mt-2">Para realizar una compra en el Sitio, debe seguir los pasos indicados en el mismo. Al completar un pedido, recibirá una confirmación por correo electrónico con los detalles de su compra.</p>
        <p className="mt-4">Métodos de Pago</p>
        <p className="mt-2">Aceptamos pagos a través de tarjetas de crédito, débito y transferencias bancarias. Todos los pagos se procesan de manera segura a través de nuestras plataformas de pago autorizadas.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Protección de Datos Personales</h2>
        <p className="mt-4">Recopilación y Uso de Datos</p>
        <p className="mt-2">Recopilamos los siguientes datos personales: nombre, dirección, correo electrónico, número de teléfono e información de pago. Estos datos se utilizan para procesar pedidos, proporcionar soporte al cliente y enviar comunicaciones de marketing si usted ha dado su consentimiento.</p>
        <p className="mt-4">Medidas de Seguridad</p>
        <p className="mt-2">Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la divulgación, la pérdida o la destrucción.</p>
        <p className="mt-4">Marketing y Publicidad</p>
        <p className="mt-2">Utilizaremos su información personal para enviarle comunicaciones de marketing, realizar campañas privadas o públicas, y utilizar sus datos para el beneficio de la empresa solo si ha dado su consentimiento. Puede optar por no recibir estas comunicaciones en cualquier momento a través del enlace de baja en nuestros correos electrónicos o contactándonos directamente.</p>
        <p className="mt-4">Derechos ARCO</p>
        <p className="mt-2">Usted tiene derecho a acceder, rectificar, cancelar u oponerse al uso de sus datos personales. Para ejercer estos derechos, por favor contáctenos a <a href="mailto:admin@ququlkan-solar.com" className="text-info hover:underline">admin@ququlkan-solar.com</a>.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Responsabilidad</h2>
        <p className="mt-4">Ququlkan Energía Solar S.A. de C.V. no se hace responsable de los daños derivados del uso del Sitio o de los productos adquiridos, excepto en los casos establecidos por la ley.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Modificaciones a los Términos y Condiciones</h2>
        <p className="mt-4">Nos reservamos el derecho de modificar estos Términos en cualquier momento. Cualquier cambio será publicado en esta página y, en su caso, se le notificará por correo electrónico.</p>
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-primary-foreground">Legislación Aplicable y Jurisdicción</h2>
        <p className="mt-4">Estos Términos se rigen por las leyes de México. Cualquier disputa relacionada con estos Términos se resolverá en los tribunales competentes de la Ciudad de México.</p>
      </div>
    </div>
  );
};

export default TerminosServicio;
