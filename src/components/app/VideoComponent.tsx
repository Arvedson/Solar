"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from 'next/link';
import { FaTools } from "react-icons/fa"; // Importar el icono FaTools

const VideoComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState("");
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isSafari, setIsSafari] = useState<boolean>(false);

  const videos = {
    low: "https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/480.mp4?alt=media&token=0020293c-47a3-4e1b-8ff7-c096b32a5bf6",
    medium: "https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/720.mp4?alt=media&token=97080f10-93f6-41e2-9158-1331e7788a71",
    high: "https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/Fullvidhd1080.mp4?alt=media&token=87e9d904-cab4-444a-b251-6ad5cd212014",
    highest: "https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/fullvidhd.mp4?alt=media&token=108ead75-d97a-476d-b576-feae1dd84563",
  };

  const determineInitialVideoQuality = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafariBrowser = userAgent.includes('safari') && !userAgent.includes('chrome') && !userAgent.includes('android');
    setIsSafari(isSafariBrowser);

    if (isSafariBrowser) {
      return videos.high; // 1080p for Safari
    }

    if (navigator && "connection" in navigator) {
      const { effectiveType } = (navigator as any).connection;
      if (effectiveType.includes("2g") || effectiveType === "slow-2g") {
        return videos.low;
      } else if (effectiveType.includes("3g")) {
        return videos.medium;
      } else if (effectiveType === "4g") {
        return videos.high;
      } else {
        return videos.highest;
      }
    }
    return videos.low; 
  }, [videos.low, videos.medium, videos.high, videos.highest]);

  const updateVideoQuality = useCallback(async () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafariBrowser = userAgent.includes('safari') && !userAgent.includes('chrome') && !userAgent.includes('android');
    setIsSafari(isSafariBrowser);

    if (isSafariBrowser) {
      const selectedVideo = videos.high; // 1080p for Safari
      setPlaybackRate(1.0);

      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.playbackRate = 1.0;
        videoElement.style.opacity = "1.0";
      }

      if (currentVideo !== selectedVideo) {
        setCurrentVideo(selectedVideo);
      }
      return;
    }

    if (navigator && "connection" in navigator) {
      const { effectiveType } = (navigator as any).connection;
      let selectedVideo = videos.highest; // Default to highest quality
      let newPlaybackRate = 1.0; // Default playback rate
      let opacity = 0.4; // Default opacity for highest quality

      if (effectiveType.includes("2g") || effectiveType === "slow-2g") {
        selectedVideo = videos.low;
        newPlaybackRate = 0.4; // Slow down to 40%
        opacity = 0.6; // Higher opacity for lower quality
      } else if (effectiveType.includes("3g")) {
        selectedVideo = videos.medium;
        newPlaybackRate = 0.75; // Slow down to 75%
        opacity = 0.7; // Medium opacity for medium quality
      } else if (effectiveType === "4g") {
        selectedVideo = videos.high;
        newPlaybackRate = 0.8; // Slow down to 80%
        opacity = 0.8; // Lower opacity for higher quality
      }

      setPlaybackRate(newPlaybackRate);

      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.playbackRate = newPlaybackRate;
        videoElement.style.opacity = opacity.toString();
      }

      if (currentVideo !== selectedVideo) {
        setCurrentVideo(selectedVideo);
      }
    }
  }, [videos.high, videos.highest, videos.low, videos.medium, currentVideo]);

  useEffect(() => {
    const initialVideo = determineInitialVideoQuality();
    setCurrentVideo(initialVideo);
  }, [determineInitialVideoQuality]);

  useEffect(() => {
    if (currentVideo) {
      updateVideoQuality();
      const intervalId = setInterval(updateVideoQuality, 3000); 

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentVideo, updateVideoQuality]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && currentVideo) {
      videoElement.src = currentVideo;
      videoElement.load();
      videoElement.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, [currentVideo]);

  return (
    <div className={"hero-container"}>
      <video
        ref={videoRef}
        className={"hero-video"}
        autoPlay
        muted
        loop
        playsInline
        poster="https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/lownet.png?alt=media&token=ade8161c-d33c-466e-a165-af9ec3e40099"
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>

      <div className="fix">
        <div className={"hero-content"}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/Black%20%26%20Blue%20Monoline%20Technology%20Logo%20(Espa%C3%B1ol)%20(2).png?alt=media&token=ef394569-4e9e-443d-9702-03781f29d94b"
            alt="Ququlkan Energia Solar"
            width={450   }
            height={450}
            className={"hero-logo"}
          />
          <h1 className={"hero-title"}>QUQULKÁN</h1>
          <h2 className={"hero-subtitle"}>Solar</h2>
          <Link href="/cotizar" legacyBehavior>
            <a className={"animated-button2 gap-4"}>
              <FaTools className=" text-2xl sm:text-3xl" />
              <h5 className="texthover">Instala tu sistema</h5>
            </a>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default VideoComponent;
