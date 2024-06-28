// src/app/page.tsx
import React from 'react';
import DynamicSection from '../../components/test/DynamicSection';
import ParallaxScroll from '../../components/test/ParallaxScroll';

const Home: React.FC = () => {
  const cards = [
    {
      title: "Card 1",
      subtext: "This is the first card. aqui puedo escribir lo que sea, siempre va a ir rellenbando si dañar ",
      imageUrl: "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg", // URL de la imagen
    },
    {
      title: "Card 2",
      subtext: "This is the second card.",
      backgroundColor: "#ff6347", // Color de fondo si no se proporciona imagen
    },
    {
      title: "Card 3",
      subtext: "This is the third card.",
      imageUrl: "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg0",
    },
    {
        title: "Card 3",
        subtext: "This is the third card.",
        imageUrl: "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg0",
      },
      
  ];

  const texts = [
    "First text will reveal on scroll.",
    "Second text will reveal on scroll.",
    "Third text will reveal on scroll."
  ];

  return (
    
    
    <div className="container mx-auto text-center p-4 gap-16">
        
      <h1 className="text-3xl font-bold mb-8">Scroll Animations Demo</h1>
      <ParallaxScroll
        backgroundImage="https://i.blogs.es/0ca9a6/aa/1366_2000.webp"
        title="Parallax with Reveal Effect"
        texts={texts}
      />
      <DynamicSection
        backgroundImage="https://img.freepik.com/foto-gratis/loro-colorido-fondo-negro-fondo-negro_1340-28854.jpg?w=740&t=st=1719512230~exp=1719512830~hmac=378ed19f36a822e57c686f1c4b26d32feb51ab40f6639cca6fbadbce8de25a37" // URL de la imagen de fondo
        cards={cards}
      />
      

    </div>
  );
};

export default Home;
