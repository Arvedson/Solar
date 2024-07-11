'use client';

import React from 'react';

const Instructions: React.FC = () => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-md text-foreground">
      <h2 className="text-2xl font-bold mb-4">Cómo Interpretar tu Recibo de Luz</h2>
      <ol className="list-decimal list-inside space-y-2 text-left">
        <li>
          <span className="font-semibold">Revisar el consumo:</span> Encuentra la sección de tu recibo donde se muestra el consumo de energía en kWh. Este valor suele aparecer en el apartado de Consumo.
        </li>
        <li>
          <span className="font-semibold">Identificar el periodo de facturación:</span> Observa las fechas de inicio y fin del periodo de facturación. Esto te ayudará a entender si el consumo es mensual, bimensual, etc.
        </li>
        <li>
          <span className="font-semibold">Tarifas aplicadas:</span> Revisa las tarifas que se han aplicado a tu consumo. Esto incluye el costo por kWh, cargos fijos, y otros posibles cargos adicionales.
        </li>
        <li>
          <span className="font-semibold">Cálculo del total:</span> Suma todos los cargos para obtener el total a pagar. Asegúrate de verificar que no haya errores en los cálculos.
        </li>
        <li>
          <span className="font-semibold">Comparar con meses anteriores:</span> Si tienes recibos anteriores, compáralos para observar tendencias en tu consumo de energía.
        </li>
      </ol>
      <p className="mt-4 text-muted-foreground">
        Asegúrate de ingresar los valores correctamente en los campos correspondientes en nuestro sistema para obtener una cotización precisa.
      </p>
    </div>
  );
};

export default Instructions;
