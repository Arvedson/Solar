"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Separator } from '@radix-ui/react-separator';

const AnnualConsumptionComponent = () => {
  const [zoomedKw, setZoomedKw] = useState(false);
  const [zoomedTarifa, setZoomedTarifa] = useState(false);
  const [cursorPosKw, setCursorPosKw] = useState({ x: 0, y: 0 });
  const [cursorPosTarifa, setCursorPosTarifa] = useState({ x: 0, y: 0 });

  const handleMouseMoveKw = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setCursorPosKw({ x, y });
  };

  const handleMouseMoveTarifa = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setCursorPosTarifa({ x, y });
  };

  const handleMouseEnterKw = () => {
    setZoomedKw(true);
  };

  const handleMouseEnterTarifa = () => {
    setZoomedTarifa(true);
  };

  const handleMouseLeaveKw = () => {
    setZoomedKw(false);
  };

  const handleMouseLeaveTarifa = () => {
    setZoomedTarifa(false);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-8 md:space-y-4 max-w-5xl mx-auto">
      <div className="w-full px-4">
        <h2 className="text-center text-2xl font-bold mb-4">Cómo calcular tu consumo anual</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Revisa el recuadro de <strong>Consumo Histórico</strong> para identificar los kWh consumidos en cada periodo.</li>
          <div className="w-full group">
            <div
              className="relative overflow-hidden cursor-pointer border border-gray-300 rounded-lg"
              onMouseMove={handleMouseMoveKw}
              onMouseEnter={handleMouseEnterKw}
              onMouseLeave={handleMouseLeaveKw}
            >
              <Image
                src="/kwinstruccion.png"
                alt="Instrucciones de consumo histórico"
                width={700}
                height={200}
                className={`w-full h-auto transition-transform duration-300 ease-in-out transform ${zoomedKw ? 'scale-150 md:scale-175' : 'scale-100'}`}
                style={{
                  transformOrigin: `${cursorPosKw.x}px ${cursorPosKw.y}px`,
                }}
              />
            </div>
          </div>
          <li>Registra cada uno de los valores bimestrales (o mensuales si es el caso).</li>
          <li>Suma todos los valores registrados para obtener tu consumo anual total en kWh.</li>
          <li>Recuerda que es muy comun que los periodos sean cada dos meses, asi que sumando 7 consumos es mas que suficiente!</li>
        </ol>
      </div>

      <Separator className="my-4 w-full bg-gray-300 h-px" />

      <h3 className="text-center text-2xl font-bold mb-4">¿Dónde está tu tarifa?</h3>

      <div className="w-full px-4 group">
        <div
          className="relative overflow-hidden cursor-pointer border border-gray-300 rounded-lg"
          onMouseMove={handleMouseMoveTarifa}
          onMouseEnter={handleMouseEnterTarifa}
          onMouseLeave={handleMouseLeaveTarifa}
        >
          <Image
            src="/tarifasinstruccion.png"
            alt="Instrucciones de tarifas"
            width={700}
            height={200}
            className={`w-full h-auto transition-transform duration-300 ease-in-out transform ${zoomedTarifa ? 'scale-150 md:scale-175' : 'scale-100'}`}
            style={{
              transformOrigin: `${cursorPosTarifa.x}px ${cursorPosTarifa.y}px`,
            }}
          />
        </div>
        <p className="text-center text-sm mt-2">Encuentra tu tarifa en la sección indicada del recibo.</p>
      </div>
    </div>
  );
};

export default AnnualConsumptionComponent;
