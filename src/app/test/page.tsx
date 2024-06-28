"use client"
import React, { useState, useEffect } from 'react';

function TestPage() {
  const [consumoAnual, setConsumoAnual] = useState('');
  const [panelesSolares, setPanelesSolares] = useState([]);
  const [cotizacion, setCotizacion] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/cotizacion/paneles-solares');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPanelesSolares(data);
        console.log(data);  // Console log para ver los datos obtenidos
      } catch (error) {
        setError(error.message); // Manejo de errores
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  const handleCalculate = async () => {
    setIsLoading(true);
    setError(null);
    setCotizacion(null);

    try {
      const response = await fetch('/api/cotizacion/paneles-solares', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ consumoAnual: parseFloat(consumoAnual) }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setCotizacion(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>; // Muestra un indicador de carga
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <button onClick={() => setError(null)}>Reintentar</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Paneles Solares</h1>
      <input
        type="number"
        value={consumoAnual}
        onChange={(e) => setConsumoAnual(e.target.value)}
        placeholder="Consumo Anual en kWh"
      />
      <button onClick={handleCalculate} disabled={isLoading}>
        Calcular
      </button>

      {panelesSolares.map(panel => (
        <div key={panel.id}>
          <p>Modelo: {panel.modelo}</p>
          <p>Capacidad: {panel.capacidadW} W</p>
          {/* Puedes agregar más campos para visualizar aquí */}
        </div>
      ))}

      {cotizacion && (
        <div>
          <h2>Cotización</h2>
          {cotizacion.map((item, index) => (
            <div key={index}>
              <p>Modelo: {item.modelo}</p>
              <p>Capacidad: {item.capacidad} W</p>
              <p>Cantidad de Paneles: {item.cantidadPaneles}</p>
              <p>Costo: {item.costo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TestPage;
