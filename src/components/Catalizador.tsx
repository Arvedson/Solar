import React from 'react';

const Catalizador: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-4 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-fill bg-center opacity-70"
        style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/f85ff43c-50a8-45fb-8e11-2fc381f2003d.webp?alt=media&token=64771290-5e9d-43b6-946d-1c3463bae65c)' }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl w-full">
        {/* Contenido del componente Catalizador */}
      </div>
    </div>
  );
};

export default Catalizador;
