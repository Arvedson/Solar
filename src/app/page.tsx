"use client";
import React from "react";

import Section2 from "@/components/app/Seccion2";
import Hero2 from "@/components/app/Hero2";
import ThreeButtons from "@/components/ThreeButtons ";
import Beneficios from "@/components/app/Beneficios";
import FadeSeparator from "@/components/app/FadeSeparator";

export default function Home() {
  return (
    <main className="flex flex-col relative">
      <Hero2 />
      <FadeSeparator endColor="#17171c" />
 
      <FadeSeparator endColor="#17171c" flip />
      <Beneficios />
      <FadeSeparator endColor="#17171c" />
      <Section2 />
     
      
      <ThreeButtons/>
      <FadeSeparator endColor="#17171c" flip />

    </main>
  );
}
