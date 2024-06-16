"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import FadeSeparator from './FadeSeparator'; // Asegúrate de ajustar la ruta según tu estructura de archivos

const Hero2: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      video.playbackRate = 0.8; // Ralentiza el video al 80% de su velocidad original
  
      const handleVideoEnded = () => {
        const reverseVideo = () => {
          if (video.currentTime > 0) {
            video.currentTime -= 0.033; // Retrocede el video a una tasa de 30 frames por segundo
            requestAnimationFrame(reverseVideo);
          } else {
            video.playbackRate = 0.8; // Restaurar la velocidad de reproducción original
            video.play(); // Reproduce el video hacia adelante
          }
        };
        
        video.pause(); // Pausa el video antes de empezar a reproducir en reversa
        video.playbackRate = -0.8; // Establece la velocidad de reproducción en reversa
        reverseVideo();
      };
  
      video.addEventListener('ended', handleVideoEnded);
  
      return () => {
        video.removeEventListener('ended', handleVideoEnded);
      };
    }
  }, []);
  
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 h-full w-full">
        <video 
          ref={videoRef}
          className="object-cover w-full h-full"
          style={{ objectPosition: 'center' }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/9875909-uhd_3840_2160_30fps.mp4" type="video/mp4" media="(min-width: 1024px)"/>
          <source src="/9875909-uhd_3840_2160_30fps.mp4" type="video/mp4" media="(max-width: 1023px)"/>
        </video>
        <FadeSeparator endColor="#FFFFFF" /> {/* Ajusta el color de destino según tu diseño */}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-25">
        <motion.div 
          className='xl:-mt-20 xl:mb-20'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-4 mt-0 lg:mt-4 xl:mt-5" variants={itemVariants}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground">
              Bienvenidos a Empresa Solar
            </h1>
          </motion.div>
          <motion.div className="mb-4 mt-0 lg:mt-3" variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-foreground">
              Soluciones solares innovadoras para un futuro sostenible.
            </p>
          </motion.div>
          <Link href="/cotizacion" passHref>
            <motion.div variants={itemVariants}>
              <Button 
                as="a" 
                variant="primary" 
                className="mt-5 bg-primary text-primary-foreground px-6 py-3 text-lg sm:text-xl lg:text-2xl lg:px-8 lg:py-8 rounded hover:bg-primary-foreground hover:text-primary transition"
              >
                Instala tu sistema
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2;
