import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Qué es un panel solar?',
      answer: 'Un panel solar es un dispositivo que convierte la luz solar en energía eléctrica mediante el uso de celdas fotovoltaicas.'
    },
    {
      question: '¿Cómo funciona la energía solar?',
      answer: 'La energía solar funciona mediante la captura de la luz del sol a través de paneles solares que convierten la energía solar en electricidad utilizable.'
    },
    {
      question: '¿Cuáles son los beneficios de la energía solar?',
      answer: 'La energía solar reduce las facturas de electricidad, es una fuente de energía renovable y sostenible, y disminuye la huella de carbono.'
    },
    {
      question: '¿Necesito baterías para almacenar la energía solar?',
      answer: 'No necesariamente. Puedes usar la energía generada directamente o almacenarla en baterías para usarla cuando el sol no esté brillando.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col bg-muted text-foreground rounded-lg shadow-md m-12">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Preguntas Frecuentes</h2>
      <Accordion type="multiple" className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-base md:text-lg lg:text-xl">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
