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
    <div className='flex flex-row bg-slate-600 p-2'>
      <input
        type="checkbox"
        id="cbx"
        style={{ display: 'none' }}
        onChange={handleChange}
        checked={isBusiness}
      />
      <label htmlFor="cbx" className="check">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
          <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
          <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
      </label>
      <label htmlFor="cbx">
        Soy un negocio
      </label>
    </div>
  );
};

export default CheckBoxForm;
