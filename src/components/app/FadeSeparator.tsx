import React from 'react';

interface FadeSeparatorProps {
  endColor: string;
  flip?: boolean; // Nueva prop para voltear el componente
}

const FadeSeparator: React.FC<FadeSeparatorProps> = ({ endColor, flip }) => {
  return (
    <div 
      style={{ 
        position: 'relative',
        height: '50px', 
        background: flip 
          ? `linear-gradient(to bottom, ${endColor} 0%, rgba(0, 0, 0, 0) 100%)`  //flip
          : `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${endColor} 100%)`,
        marginTop: flip ? '0' : '-50px',
        marginBottom: flip ? '-50px' : '0',
        zIndex: 1, // Asegura que el gradiente esté por encima del fondo
      }} 
    />
  );
};

export default FadeSeparator;

//este componente "envuelve" a un componente, los colores deben encajar con el bg del componente "envuelto"

/*
<FadeSeparator endColor="#17171c"/>
<Section2/>
<FadeSeparator endColor="#17171c" flip/>
*/ 