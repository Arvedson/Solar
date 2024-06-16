"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-background border-b border-border px-4 py-2.5 z-10 bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100 transition-opacity duration-300">


      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="text-primary font-semibold text-xl">Empresa Solar</span>
        </a>
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
                <a href="/" className="text-foreground hover:text-primary" aria-current="page">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-muted-foreground hover:text-primary">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-muted-foreground hover:text-primary">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-muted-foreground hover:text-primary">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-primary">
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#subir-recibo"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary-foreground hover:text-primary transition"
                >
                  Instala tu sistema
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="/" className="text-foreground hover:text-primary" aria-current="page">
                Inicio
              </a>
            </li>
            <li>
              <a href="#beneficios" className="text-muted-foreground hover:text-primary">
                Beneficios
              </a>
            </li>
            <li>
              <a href="#proceso" className="text-muted-foreground hover:text-primary">
                Proceso
              </a>
            </li>
            <li>
              <a href="#proyectos" className="text-muted-foreground hover:text-primary">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-muted-foreground hover:text-primary">
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#subir-recibo"
                className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary-foreground hover:text-primary transition"
              >
                Subir Recibo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
