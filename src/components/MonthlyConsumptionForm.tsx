'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface MonthlyConsumptionFormData {
  consumption: number[];
}

interface MonthlyConsumptionFormProps {
  monthlyConsumption: number | null;
  setMonthlyConsumption: (value: number | null) => void;
}

const MonthlyConsumptionForm: React.FC<MonthlyConsumptionFormProps> = ({ monthlyConsumption, setMonthlyConsumption }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<MonthlyConsumptionFormData>({
    defaultValues: {
      consumption: Array(12).fill(null), // Cambiado de 0 a null
    },
  });

  const onSubmit: SubmitHandler<MonthlyConsumptionFormData> = (data) => {
    const totalConsumption = data.consumption.reduce((sum, val) => sum + val, 0);
    setMonthlyConsumption(totalConsumption);
    console.log(`Consumo anual basado en mensual: ${totalConsumption}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-lg font-semibold mb-2">Consumo Mensual (kWh)</label>
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="mb-2">
            <label className="block text-lg font-semibold mb-1">Mes {index + 1}</label>
            <input
              type="number"
              {...register(`consumption.${index}`, { required: 'Requerido', valueAsNumber: true })}
              placeholder={`Consumo en kWh para el mes ${index + 1}`}
              className="w-full p-2 border rounded bg-input text-foreground"
            />
            {errors.consumption && errors.consumption[index] && (
              <p className="text-destructive-foreground">{errors.consumption[index]?.message}</p>
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

export default MonthlyConsumptionForm;
