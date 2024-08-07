"use client";
import React from 'react';
import { useCotizacion } from '../../context/CotizacionContext';

const CheckBoxForm: React.FC = () => {
  const { setIsBusiness, isBusiness } = useCotizacion();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    console.log('Checkbox changed:', isChecked);
    setIsBusiness(isChecked);
  };

  return (
    <div className='pt-6'>
          <div className='flex flex-row bg-slate-600 p-2 m-2 border-r rounded-md gap-3'>
      <label htmlFor="cbx-business" className="ml-2">
        Soy un negocio
      </label>
      
      <input
        type="checkbox"
        id="cbx-business"
        style={{ display: 'none' }}
        onChange={handleChange}
        checked={isBusiness}
      />
      <label htmlFor="cbx-business" className="check-business">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
          <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
          <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
      </label>
    </div>
    <p className='p-2'>Simula el paso de los años</p>

    </div>

  );
};

export default CheckBoxForm;
