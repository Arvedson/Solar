'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BimonthlyConsumptionFormData {
  bimonthlyConsumption: number[];
}

interface BimonthlyConsumptionFormProps {
  bimonthlyConsumption: number | null;
  setBimonthlyConsumption: (value: number | null) => void;
}

const BimonthlyConsumptionForm: React.FC<BimonthlyConsumptionFormProps> = ({ bimonthlyConsumption, setBimonthlyConsumption }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<BimonthlyConsumptionFormData>({
    defaultValues: {
      bimonthlyConsumption: Array(6).fill(null), // Cambiado de 0 a null
    },
  });

  const onSubmit: SubmitHandler<BimonthlyConsumptionFormData> = (data) => {
    const totalConsumption = data.bimonthlyConsumption.reduce((sum, val) => sum + val, 0);
    setBimonthlyConsumption(totalConsumption);
    console.log(`Consumo anual basado en bimensual: ${totalConsumption}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-lg font-semibold mb-2">Consumo Bimensual (kWh)</label>
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="mb-2">
            <label className="block text-lg font-semibold mb-1">Bimestre {index + 1}</label>
            <input
              type="number"
              {...register(`bimonthlyConsumption.${index}`, { required: 'Requerido', valueAsNumber: true })}
              placeholder={`Consumo en kWh para el bimestre ${index + 1}`}
              className="w-full p-2 border rounded bg-input text-foreground"
            />
            {errors.bimonthlyConsumption && errors.bimonthlyConsumption[index] && (
              <p className="text-destructive-foreground">{errors.bimonthlyConsumption[index]?.message}</p>
            )}
          </div>
        ))}
      </div>
      <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded">
        Calcular
      </button>
    </form>
  );
};

export default BimonthlyConsumptionForm;
