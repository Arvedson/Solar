import React from 'react';

interface FadeSeparatorProps {
  endColor: string;
}

const FadeSeparator: React.FC<FadeSeparatorProps> = ({ endColor }) => {
  return (
    <div style={{ 
      position: 'relative',
      height: '50px', 
      background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${endColor} 100%)`,
      marginTop: '-50px' // Ajusta esto si es necesario para eliminar cualquier línea visible
    }} />
  );
};

export default FadeSeparator;
