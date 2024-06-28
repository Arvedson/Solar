"use client"
import React from 'react';
import Image from 'next/image';

const Section1 = () => {
  return (
    <section className="pb-6 bg-muted">
      <div className="mb-6 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-secondary-foreground pb-8 pt-12">¿Por qué elegir Paneles Solares?</h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-relaxed sm:leading-loose">
          Los paneles solares son una solución eficiente y sostenible para la generación de energía. Contribuyen a la reducción de la huella de carbono y permiten ahorrar en costos de electricidad a largo plazo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-card rounded-lg shadow-md">
            <Image src="/b1663fd4-7900-4fc4-8a21-40145017596e.jpg" alt="Alta Eficiencia" width={400} height={200} className="w-full h-48 object-cover rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Alta Eficiencia</h3>
            <p className="text-muted-foreground">
              Nuestros paneles solares están diseñados para ofrecer la máxima eficiencia en la conversión de luz solar en energía eléctrica.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-md">
            <Image src="/07973294-2b74-4b96-9cc5-81407c6250cd.jpg" alt="Ahorro en Costos" width={400} height={200} className="w-full h-48 object-cover rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Ahorro en Costos</h3>
            <p className="text-muted-foreground">
              A largo plazo, la instalación de paneles solares puede generar un ahorro significativo en tus facturas de electricidad.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-md">
            <Image src="/605881f3-7b27-45f4-9fb8-d83e2a1364b7.jpg" alt="Sostenibilidad" width={400} height={200} className="w-full h-48 object-cover rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Sostenibilidad</h3>
            <p className="text-muted-foreground">
              Al optar por la energía solar, contribuyes a la reducción de emisiones de carbono y ayudas a preservar el medio ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
