import React from 'react';

interface CotizarButtonProps {
  annualConsumption: number | null;
  bimonthlyConsumption: number | null;
  monthlyConsumption: number | null;
  selectedTarifa: string;
  onCotizar: () => void;
}

const CotizarButton: React.FC<CotizarButtonProps> = ({
  annualConsumption,
  bimonthlyConsumption,
  monthlyConsumption,
  selectedTarifa,
  onCotizar,
}) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onCotizar}
        className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary-foreground hover:text-primary transition"
      >
        Cotizar
      </button>
    </div>
  );
};

export default CotizarButton;
