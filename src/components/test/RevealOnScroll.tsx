
import React, { useEffect } from 'react';

const RevealOnScroll: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = (reveals[i] as HTMLElement).getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="p-20 ">
      <h2 className="text-2xl font-bold mb-4">Reveal on Scroll</h2>
      <div className="reveal opacity-0 transform translate-y-10 transition-all duration-500">
        This text will reveal on scroll.
      </div>
      <div className="reveal opacity-0 transform translate-y-10 transition-all duration-500 mt-4">
        Another reveal on scroll example.
      </div>
      <div className="reveal opacity-0 transform translate-y-10 transition-all duration-500 mt-4">
        Yet another one!
      </div>
    </div>
  );
};

export default RevealOnScroll;
