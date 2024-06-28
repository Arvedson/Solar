"use client"
import React, { useEffect } from 'react';

interface ParallaxRevealProps {
  backgroundImage: string;
  title: string;
  texts: string[];
}

const ParallaxReveal: React.FC<ParallaxRevealProps> = ({ backgroundImage, title, texts }) => {
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
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10 text-white p-6 sm:p-10 md:p-20 flex flex-col items-center justify-center h-full space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">{title}</h2>
        {texts.map((text, index) => (
          <div key={index} className="reveal opacity-0 transform translate-y-10 transition-all duration-500 text-center max-w-lg mt-4">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxReveal;


/*

import React from 'react';
import ParallaxReveal from '../../components/test/ParallaxScroll';

const Home: React.FC = () => {
  const texts = [
    "First text will reveal on scroll.",
    "Second text will reveal on scroll.",
    "Third text will reveal on scroll."
  ];

  return (
    <div className="container mx-auto text-center p-4">
      
      <ParallaxReveal
        backgroundImage="https://img.freepik.com/foto-gratis/loro-colorido-fondo-negro-fondo-negro_1340-28854.jpg?w=740&t=st=1719512230~exp=1719512830~hmac=378ed19f36a822e57c686f1c4b26d32feb51ab40f6639cca6fbadbce8de25a37"
        title="Parallax with Reveal Effect"
        texts={texts}
      />
      {}
    </div>
  );
};

export default Home;

*/