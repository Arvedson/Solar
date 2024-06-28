"use client"
import React, { useEffect } from 'react';

interface CardProps {
  title: string;
  subtext: string;
  imageUrl?: string;
  backgroundColor?: string;
}

interface DynamicSectionProps {
  backgroundImage: string;
  cards: CardProps[];
}

const DynamicSection: React.FC<DynamicSectionProps> = ({ backgroundImage, cards }) => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = (reveal as HTMLElement).getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        } else {
          reveal.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-auto overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 text-white p-6 sm:p-10 md:p-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="reveal opacity-0 transform translate-y-10 transition-all duration-500 p-6 rounded-lg shadow-lg bg-opacity-75"
            style={{
              backgroundImage: card.imageUrl ? `url(${card.imageUrl})` : undefined,
              backgroundColor: card.backgroundColor ? card.backgroundColor : 'rgba(0,0,0,0.5)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '200px',
            }}
          >
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p>{card.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicSection;
