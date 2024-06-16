'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AnnualConsumptionFormData {
  annualConsumption: number;
}

interface AnnualConsumptionFormProps {
  annualConsumption: number | null;
  setAnnualConsumption: (value: number | null) => void;
}

const AnnualConsumptionForm: React.FC<AnnualConsumptionFormProps> = ({ annualConsumption, setAnnualConsumption }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<AnnualConsumptionFormData>();

  const onSubmit: SubmitHandler<AnnualConsumptionFormData> = (data) => {
    setAnnualConsumption(data.annualConsumption);
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
          className="w-full p-2 border rounded bg-input text-foreground"
        />
        {errors.annualConsumption && <p className="text-destructive-foreground">{errors.annualConsumption.message}</p>}
      </div>
      <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded">
        Calcular
      </button>
    </form>
  );
};

export default AnnualConsumptionForm;
