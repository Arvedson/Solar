import React from 'react';

interface FadeSeparatorBottomProps {
  endColor: string;
}

const FadeSeparatorBottom: React.FC<FadeSeparatorBottomProps> = ({ endColor }) => {
  return (
    <div 
      style={{ 
        position: 'relative',
        height: '50px', 
        background: `linear-gradient(to top, ${endColor} 0%, rgba(0, 0, 0, 0) 100%)`,
        marginTop: '0px', // Ajusta esto si es necesario para eliminar cualquier línea visible
      }} 
    />
  );
};

export default FadeSeparatorBottom;
