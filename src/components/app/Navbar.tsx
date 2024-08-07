"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle"; // Asegúrate de la ruta correcta
import ScrollToSection from "@/components/ScrollToSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-background border-b border-border px-4 py-2.5 z-20 bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100 transition-opacity duration-300">
      <div className="container flex flex-row items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="text-primary font-semibold text-xl">Ququlkan - Energia Ancestral</span>
        </a>
        <div className="flex items-center space-x-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="md:hidden inline-flex items-center p-2 ml-3 text-muted-foreground rounded-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background text-foreground">
              <SheetHeader>
                <SheetTitle className="text-primary">Menu</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col mt-4 space-y-8">
                <li>
                  <a href="/">
                    Inicio
                  </a>
                </li>
                <li>
                  <ScrollToSection id="contacto">
                    Contacto
                  </ScrollToSection>
                </li>
                <li>
                  <ScrollToSection id="beneficios">
                    Beneficios
                  </ScrollToSection>
                </li>
                <li>
                  <ScrollToSection id="coto">
                    Cuanto gastas?
                  </ScrollToSection>
                </li>
                <li>
                  <ScrollToSection id="proyectos">
                    Proyectos
                  </ScrollToSection>
                </li>
                <li>
                  <a href="https://wa.me/528712340891" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-primary text-[hsl(var(--secondary))] px-4 py-2 rounded hover:bg-primary-foreground hover:text-[hsl(var(--primary))] transition">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                    <span>Estamos para ti</span>
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:items-center md:justify-center md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="/">
                Inicio
              </a>
            </li>
            <li>
              <ScrollToSection id="contacto">
                Contacto
              </ScrollToSection>
            </li>
            <li>
              <ScrollToSection id="beneficios">
                Beneficios
              </ScrollToSection>
            </li>
            <li>
              <ScrollToSection id="costo">
                Cuanto gastas?
              </ScrollToSection>
            </li>
            <li>
              <ScrollToSection id="proyectos">
                Proyectos
              </ScrollToSection>
            </li>
            <li>
              <a href="https://wa.me/528712340891" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-primary text-[hsl(var(--secondary))] px-4 py-2 rounded hover:bg-primary-foreground hover:text-[hsl(var(--primary))] transition">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                <span>Estamos para ti</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
