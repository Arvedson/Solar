'use client';

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AnnualConsumptionFormData {
  annualConsumption: number;
}

interface AnnualConsumptionFormProps {
  annualConsumption: number | null;
  setAnnualConsumption: (value: number) => void;
  highlight: boolean;
  showCalculateButton: boolean; // Nueva prop para controlar la visibilidad del botón
}

const AnnualConsumptionForm: React.FC<AnnualConsumptionFormProps> = ({ annualConsumption, setAnnualConsumption, highlight, showCalculateButton }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<AnnualConsumptionFormData>();
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    if (annualConsumption !== null) {
      setValue('annualConsumption', annualConsumption);
    }
  }, [annualConsumption, setValue]);

  const onSubmit: SubmitHandler<AnnualConsumptionFormData> = (data) => {
    setAnnualConsumption(data.annualConsumption);
    setCalculated(true);
    console.log(`Consumo anual: ${data.annualConsumption}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-lg font-semibold mb-2">Consumo Anual (kWh)</label>
        <input
          type="number"
          {...register('annualConsumption', { required: 'Requerido', valueAsNumber: true })}
          placeholder="Consumo anual (kWh)"
          className={`w-full p-2 border rounded bg-input text-foreground ${highlight ? 'border-2 border-primary animate-border-fill' : ''}`}
        />
        {errors.annualConsumption && <p className="text-destructive-foreground">{errors.annualConsumption.message}</p>}
      </div>
      {showCalculateButton && !calculated && (
        <button type="submit" className="px-4 py-2 bg-primary text-black rounded">
          Calcular
        </button>
      )}
    </form>
  );
};

export default AnnualConsumptionForm;
