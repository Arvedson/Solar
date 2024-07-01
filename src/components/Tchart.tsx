// components/TChart.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Item {
  id: number;
  title: string;
  content: string;
  side: 'left' | 'right';
  className: string; // Clase adicional para el estilo
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
    { title: 'Servicio Personalizado', content: 'Ofrecemos soluciones a medida.', side: 'left', className: 'item' },
    { title: 'Soluciones Genéricas', content: 'Los competidores ofrecen soluciones estándar.', side: 'right', className: 'item2' },
    { title: 'Experiencia', content: 'Nuestro equipo tiene profundo conocimiento en la industria.', side: 'left', className: 'item' },
    { title: 'Falta de Experiencia', content: 'Otros carecen de conocimientos especializados.', side: 'right', className: 'item2' },

    { title: 'Altos costos', content: 'Misma calidad.', side: 'right', className: 'item2' },
  ]);

  const [items, setItems] = useState<Item[]>(initialItems);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isOrganized, setIsOrganized] = useState(false);

  const toggleOrganization = () => {
    setIsOrganized(!isOrganized);
  };

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
    <div className="t-chart-container  relative">
      <button onClick={toggleOrganization} className="shuffle-button">
        {isOrganized ? 'Desorganizar' : 'Organizar'}
      </button>
      <div className={`columns-container ${isOrganized ? 'flex' : ''}`}>
        <div className="left-column">
          {items.filter(item => item.side === 'left').map((item, index) => (
            <div
              ref={(el) => (itemRefs.current[index] = el)}
              key={item.id}
              className={`${item.className} ${isOrganized ? 'organized' : ''}`}
            >
              <h2>{item.title}</h2>
              <h3>{item.content}</h3>
            </div>
          ))}
        </div>
        <div className="right-column">
          {items.filter(item2 => item2.side === 'right').map((item2, index) => (
            <div
              ref={(el) => (itemRefs.current[index + items.filter(it => it.side === 'left').length] = el)}
              key={item2.id}
              className={`${item2.className} ${isOrganized ? 'organized' : ''}`}
            >
              <h2>{item2.title}</h2>
              <h3>{item2.content}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TChart;
