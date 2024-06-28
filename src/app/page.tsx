"use client"
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import Section2 from "@/components/app/Seccion2";
import Hero2 from "../components/app/Hero2"


import ThreeButtons from "@/components/ThreeButtons ";

import Beneficios from "@/components/app/Beneficios";
import FadeSeparator from '../components/app/FadeSeparator'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  const [showBackground, setShowBackground] = useState(false);

  const handleButtonClick = () => {
    setShowBackground(true);
  };

  const handleCloseClick = () => {
    setShowBackground(false);
  };

  return (
    <main className="flex flex-col relative">
      <Hero2 />
      <FadeSeparator endColor="#17171c" />
      <ThreeButtons onButtonClick={handleButtonClick} />
      <FadeSeparator endColor="#17171c" flip />
      <Beneficios />
      <FadeSeparator endColor="#17171c" />
      <Section2 />
      <FadeSeparator endColor="#17171c" flip />
      <Beneficios />


      <CSSTransition
        in={showBackground}
        timeout={500}
        classNames="slide"
        unmountOnExit
      >
        <div className="fixed inset-0 bg-[hsl(var(--background))] z-20 transform transition-transform duration-500 ease-in-out">
          <AnimatedBackground />
          <button
            onClick={handleCloseClick}
            className="absolute top-4 right-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full p-2 focus:outline-none"
          >
            X
          </button>
        </div>
      </CSSTransition>

    </main>
  );
}