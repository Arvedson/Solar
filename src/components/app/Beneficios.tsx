import React from 'react';
import { FaSun, FaMoneyBillWave, FaLeaf, FaHome } from 'react-icons/fa';

const Beneficios = () => {
  const beneficios = [
    {
      icon: <FaSun className="text-yellow-500 text-6xl mb-4" />,
      title: 'Energía Renovable',
      description: 'La energía solar es una fuente de energía renovable e inagotable que ayuda a reducir la dependencia de combustibles fósiles.',
    },
    {
      icon: <FaMoneyBillWave className="text-green-500 text-6xl mb-4" />,
      title: 'Ahorro Económico',
      description: 'Reduce tu factura de electricidad significativamente y disfruta de incentivos fiscales al instalar paneles solares.',
    },
    {
      icon: <FaLeaf className="text-green-500 text-6xl mb-4" />,
      title: 'Amigable con el Medio Ambiente',
      description: 'La energía solar no produce emisiones de gases de efecto invernadero, contribuyendo a la lucha contra el cambio climático.',
    },
    {
      icon: <FaHome className="text-blue-500 text-6xl mb-4" />,
      title: 'Incrementa el Valor de tu Propiedad',
      description: 'Los sistemas solares aumentan el valor de tu hogar y lo hacen más atractivo para los compradores conscientes del medio ambiente.',
    },
  ];

  return (
    <section className="relative py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/5d497b9e-c7c3-41b4-a85b-9486e3d3d899.jpg?alt=media&token=8ae918ed-01ba-4837-bb73-215c6dfec3bb)', backgroundAttachment: 'fixed' }}
      />
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-primary-foreground">
          Beneficios de la Energía Solar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index} 
              className="p-6 bg-card bg-opacity-75 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {beneficio.icon}
              <h3 className="text-2xl font-semibold mb-4 text-secondary-foreground">
                {beneficio.title}
              </h3>
              <p className="text-base text-foreground">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
