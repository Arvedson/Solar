"use client";

import React from "react";
import Section2 from "@/components/app/Seccion2";
import Hero2 from "@/components/app/Hero2";
import ThreeButtons from "@/components/ThreeButtons ";
import Beneficios from "@/components/app/Beneficios";
import FadeSeparator from "@/components/app/FadeSeparator";
import TChart from "@/components/Tchart";
import Contacto from "@/components/app/Contacto";

export default function Home() {
  return (
    <main className="flex flex-col relative">
      <Hero2 />
      <FadeSeparator endColor="hsl(var(--background))" />
      <div id="beneficios">
        <FadeSeparator endColor="hsl(var(--background))" flip />
        <Beneficios />
        <FadeSeparator endColor="hsl(var(--background))" />
      </div>
      <div id="costo">
        <FadeSeparator endColor="hsl(var(--background))" flip />
        <Section2 />
      </div>



      <TChart />




      
      <div id="contacto">
      <Contacto/>

      </div>
      <div id="three-buttons">
        <ThreeButtons />
      </div>
      
    </main>
  );
}
