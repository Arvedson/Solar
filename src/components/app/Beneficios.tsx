import React from 'react';
import { FaSun, FaMoneyBillWave, FaLeaf, FaHome } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';


const Beneficios = () => {
  const beneficios = [
    {
      icon: <FaSun />,
      title: 'Energía Renovable',
      description: 'La energía solar es una fuente de energía renovable e inagotable que ayuda a reducir la dependencia de combustibles fósiles.',
      hoverIconClass: 'group-hover:text-yellow-300',
      hoverTextClass: 'group-hover:text-text-secondary'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Ahorro Económico',
      description: 'Reduce tu factura de electricidad significativamente y disfruta de incentivos fiscales al instalar paneles solares.',
      hoverIconClass: 'group-hover:text-green-300',
      hoverTextClass: 'group-hover:text-text-secondary'
    },
    {
      icon: <FaLeaf />,
      title: 'Amigable con el Medio Ambiente',
      description: 'La energía solar no produce emisiones de gases de efecto invernadero, contribuyendo a la lucha contra el cambio climático.',
      hoverIconClass: 'group-hover:text-green-300',
      hoverTextClass: 'group-hover:text-text-tertiary'
    },
    {
      icon: <FaHome />,
      title: 'Incrementa el Valor de tu Propiedad',
      description: 'Los sistemas solares aumentan el valor de tu hogar y lo hacen más atractivo para los compradores conscientes del medio ambiente.',
      hoverIconClass: 'group-hover:text-blue-300',
      hoverTextClass: 'group-hover:text-text-secondary'
    },
  ];

  const inViewOptions = {
    triggerOnce: true,
    threshold: .2
  };
  const { ref, inView } = useInView(inViewOptions);

  return (
    <section className="relative py-28">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/DALL%C2%B7E%202024-07-08%2022.31.38%20-%20A%20subtle%2C%20simple%20mural%20background%20inspired%20by%20ancient%20Mexican%20cultures%2C%20incorporating%20elements%20like%20jaguars%2C%20quetzals%2C%20pyramids%2C%20and%20jungles.%20The%20mura.webp?alt=media&token=aba0aa6a-5773-475b-9bc1-1e07d3da35f8)', backgroundAttachment: 'fixed' }}
      />
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="pb-3 relative inline-block text-4xl font-bold mb-12 text-primary-foreground bg-opacity-75 bg-black px-4 py-2 rounded-md shadow-md">
          Beneficios de la Energía Solar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index} 
              ref={ref}
              className={`group p-6 bg-card bg-opacity-75 rounded-lg shadow-md transition duration-300 ease-in-out transform ${inView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} hover:scale-105 hover:shadow-2xl hover:bg-secondary hover:text-secondary-foreground`}
            >
              <div className={`icon transition duration-300 ease-in-out ${beneficio.hoverIconClass}`}>
                {React.cloneElement(beneficio.icon, { className: 'text-6xl mb-4' })}
              </div>
              <h3 className={`text-2xl font-semibold mb-4 transition duration-300 ease-in-out ${beneficio.hoverTextClass} group-hover:text-shadow-black`}>
                {beneficio.title}
              </h3>
              <p className={`text-base transition duration-300 ease-in-out ${beneficio.hoverTextClass} group-hover:text-shadow-black`}>
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
