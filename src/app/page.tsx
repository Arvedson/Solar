"use client";

import React from "react";
import Section2 from "../components/app/Seccion2";

import ThreeButtons from "../components/ThreeButtons ";
import Beneficios from "../components/app/Beneficios";
import FadeSeparator from "../components/app/FadeSeparator";
import TChart from "../components/Tchart";
import Contacto from "../components/app/Contacto";
import VideoComponent from "../components/app/VideoComponent";


export default function Home() {

  const safariImage = 'https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/jajaja_high_res.png?alt=media&token=d7d5e21a-4fb0-4af8-a67c-777546377967';
  return (
    <main className="flex flex-col relative">
      <VideoComponent />
      <FadeSeparator endColor="hsl(var(--background))" />
      <div id="beneficios">
        <FadeSeparator endColor="hsl(var(--background))" flip />
        <Beneficios safariImage={safariImage}/>
        <FadeSeparator endColor="hsl(var(--background))" />
      </div>
      <div id="costo">
        <FadeSeparator endColor="hsl(var(--background))" flip />
        <Section2 />
      </div>
      <TChart />
      <div id="contacto">
      <FadeSeparator endColor="hsl(var(--background))"  />
      <Contacto/>

      </div>
      <div id="three-buttons">
        <ThreeButtons />
      </div>
      
      
    </main>
  );
}
