"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaTimes } from 'react-icons/fa';
import FadeSeparator from './app/FadeSeparator';

interface Item {
  id: number;
  title: string;
  content: string;
  side: 'left' | 'right';
  className: string;
}

const createItems = (items: { title: string; content: string; side: 'left' | 'right'; className: string }[]): Item[] =>
  items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    content: item.content,
    side: item.side,
    className: item.className,
  }));

const TChart: React.FC = () => {
  const initialItems = createItems([
    { title: '', content: '', side: 'left', className: 'item' },
    { title: '', content: '', side: 'right', className: 'item2' },
    { title: 'Misma calidad', content: 'La calidad no es negociable, solo te damos los precios mas justos', side: 'left', className: 'item' },
    { title: 'Precios altos', content: 'Ineficiencia en la distribucion del trabajo', side: 'right', className: 'item2' },
    { title: 'Actuamos rapido', content: 'No dejamos que pasen mas de 18 dias para que tengas tu sistema instalado', side: 'left', className: 'item' },
    { title: 'Lentitud', content: 'Falta en el uso de tecnologias para acelerar los procesos de entrega', side: 'right', className: 'item2' },
    { title: 'Somos diferentes', content: 'Nuestro enfoque se centra en ayudarte a ti y a tu familia', side: 'left', className: 'item' },
    { title: 'Modelos de lucro', content: 'La mayoria de las empresas en el mundo, piensan en el margen; no en ti', side: 'right', className: 'item2' },
  ]);

  const [items, setItems] = useState<Item[]>(initialItems);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isOrganized, setIsOrganized] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.82,
  });

  useEffect(() => {
    if (inView) {
      setIsOrganized(true);
    }
  }, [inView]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);
    itemRefs.current.forEach((div, index) => {
      if (div) {
        if (!isOrganized) {
          const randX1 = Math.random() * 80;
          const randY1 = Math.random() * 80;
          const randX2 = Math.random() * 80;
          const randY2 = Math.random() * 80;
          const randX3 = Math.random() * 80;
          const randY3 = Math.random() * 80;
          const duration = Math.random() * 10 + 5;

          div.style.setProperty('--randX1', `${randX1}vw`);
          div.style.setProperty('--randY1', `${randY1}vh`);
          div.style.setProperty('--randX2', `${randX2}vw`);
          div.style.setProperty('--randY2', `${randY2}vh`);
          div.style.setProperty('--randX3', `${randX3}vw`);
          div.style.setProperty('--randY3', `${randY3}vh`);
          div.style.setProperty('--duration', `${duration}s`);

          div.style.animation = `randomFloat var(--duration) infinite ease-in-out`;
          div.style.position = 'absolute';
          div.style.top = '0';
          div.style.left = '0';
          div.style.zIndex = '10';
        } else {
          div.style.animation = 'reorganize 1s forwards';
          div.style.position = 'relative';
          div.style.top = 'auto';
          div.style.left = 'auto';
          div.style.zIndex = '1';
        }
      }
    });
  }, [items, isOrganized]);

  return (
    <div className='flex flex-col'>
      <div className="title-container text-center my-4">
        <h1 className="title-text mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24">
          {isOrganized ? 'Con nosotros' : 'Toma el control'}
        </h1>
      </div>
      <FadeSeparator endColor="#17171c" flip />
      <div className={`t-chart-container ${isOrganized ? 'h-auto' : 'h-screen'} relative`} ref={ref}>
        <div className={`gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 columns-container ${isOrganized ? 'flex' : ''}`}>
          <div className="left-column">
            {items.filter(item => item.side === 'left').map((item, index) => (
              <div
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                key={item.id}
                className={`${item.className} ${isOrganized ? 'organized' : ''}`}
              >
                {index === 0 && <FaCheck className="icon-check" />}
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
          <div className="right-column">
            {items.filter(item => item.side === 'right').map((item, index) => (
              <div
                ref={(el) => {
                  itemRefs.current[index + items.filter(it => it.side === 'left').length] = el;
                }}
                key={item.id}
                className={`${item.className} ${isOrganized ? 'organized' : ''}`}
              >
                {index === 0 && <FaTimes className="icon-times" />}
                <h5 className='text-background'>{item.title}</h5>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FadeSeparator endColor="#17171c" />
    </div>
  );
};

export default TChart;
