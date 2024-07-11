"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

      video.addEventListener("ended", handleVideoEnded);

      return () => {
        video.removeEventListener("ended", handleVideoEnded);
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 h-full w-full">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          style={{ objectPosition: "center" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/9875909-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-25">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-4 mt-0 lg:mt-4 xl:mt-5 relative" variants={itemVariants}>
            <div >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/Black%20%26%20Blue%20Monoline%20Technology%20Logo%20(Espa%C3%B1ol)%20(2).png?alt=media&token=ef394569-4e9e-443d-9702-03781f29d94b"
                alt="Ququlkan Energia Solar"
                width={600}
                height={600}
                className="mx-auto max-w-full h-auto"
              />
              <h1 className="absolute top-[-15%] left-1/2 transform -translate-x-1/2 mt-2 font-montserrat font-bold text-[hsl(var(--primary))]">
                QUQULCÁN
              </h1>
              <h2 className="absolute top-[87%] left-1/2 transform -translate-x-1/2 mt-2 font-montserrat font-bold text-[hsl(var(--text-tertiary))]">Solar</h2>


            </div>
          </motion.div>
          <Link href="/Installsystempage" passHref>
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
