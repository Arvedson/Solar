import React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import BusinessIcon from '@mui/icons-material/Business';
import { Separator } from '@radix-ui/react-separator';


const TarifasInfo = () => {
  return (
    <div className="mt-6 bg-card text-card-foreground p-6 rounded-lg shadow-lg w-full lg:max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center lg:text-2xl">Información sobre Tarifas de CFE</h2>
      <Separator className="my-4 bg-gray-200 h-px w-full" />
      <p className="mb-2 text-center lg:text-lg">
        Las tarifas de la Comisión Federal de Electricidad (CFE) se asignan principalmente en función del consumo de energía y la región, considerando la temperatura ambiental.
      </p>

      <Separator className="my-4 w-full bg-gray-300 h-px" />

      
      <p className="mb-2 text-center lg:text-lg">
        <strong>Tarifas Residenciales:</strong> Estas tarifas varían desde consumos bajos hasta consumos muy altos. Las regiones con temperaturas extremas tienen tarifas especiales que incluyen subsidios gubernamentales.
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2 pl-4 lg:pl-8">
        <li className="flex items-start lg:text-lg">
          <BoltIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa 1</strong>Baja demanda hasta 25 kWh
        </li>
        <li className="flex items-start lg:text-lg">
          <BoltIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa 1A</strong>Baja demanda 25-50 kWh
        </li>
        <li className="flex items-start lg:text-lg">
          <BoltIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa 1B</strong>Baja demanda 50-100 kWh
        </li>
        <li className="flex items-start lg:text-lg">
          <BoltIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa 1C</strong> Media demanda 100-200 kWh
        </li>
        <li className="flex items-start lg:text-lg">
          <BoltIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa 1D</strong> Alta demanda 200-500 kWh
        </li>
        <li className="flex items-start lg:text-lg">
          <BoltIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa 1E</strong> Muy alta demanda 500-1000 kWh
        </li>
        <li className="flex items-start lg:text-lg">
          <BoltIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa 1F</strong> Extremadamente alta demanda más de 1000 kWh
        </li>
        <li className="flex items-start lg:text-lg">
          <BoltIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa DAC</strong> Doméstica de Alto Consumo
        </li>
      </ul>
      

      <Separator className="my-4 bg-gray-200 h-px w-full" />

      <p className="mb-2 text-center lg:text-lg">
        <strong>Tarifas Comerciales:</strong> Diseñadas para negocios y comercios, variando según el consumo y el tipo de tensión.
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2 pl-4 lg:pl-8">
        <li className="flex items-start lg:text-lg">
          <BusinessIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa PDBT</strong> Para negocios en baja tensión con consumo hasta 25 kWh al mes
        </li>
        <li className="flex items-start lg:text-lg">
          <BusinessIcon className="text-primary mr-2" />
          <strong className="spacing-after-colon">Tarifa GDBT</strong> Para negocios en baja tensión que superan los 25 kWh al mes
        </li>
      </ul>
      <p className="text-muted-foreground text-center lg:text-lg">
        <em>Nota:</em> Estas tarifas ya incluyen los subsidios gubernamentales, especialmente en regiones con altas temperaturas para reducir el costo de la electricidad.
      </p>
    </div>
  );
};

export default TarifasInfo;
