"use client"
import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 h-full w-full">
        <Image 
          src="/solar-panels-roof-solar-cell.jpg" 
          alt="Hero Image" 
          layout="fill"
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-25">
        <div className='xl:-mt-20 xl:mb-20'>
          <div className="mb-4 mt-0 lg:mt-4 xl:mt-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground">
              Bienvenidos a Empresa Solar
            </h1>
          </div>
          <div className="mb-4 mt-0 lg:mt-3">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-foreground">
              Soluciones solares innovadoras para un futuro sostenible.
            </p>
          </div>
          <Link href="/cotizacion" passHref>
            <Button 
              as="a" 
              variant="primary" 
              className="mt-5 bg-primary text-primary-foreground px-6 py-3 text-lg sm:text-xl lg:text-2xl lg:px-8 lg:py-8 rounded hover:bg-primary-foreground hover:text-primary transition"
            >
              Instala tu sistema
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
