"use client"
import React, { useRef, useEffect, useState, useCallback } from 'react';

const VideoComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const highQualityVideoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState('');
  const [isLoadingHighQuality, setIsLoadingHighQuality] = useState(false);
  const [playbackDirection, setPlaybackDirection] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const determineInitialVideoQuality = useCallback(() => {
    if (navigator && 'connection' in navigator) {
      const { effectiveType } = (navigator as any).connection;
      if (effectiveType.includes('2g') || effectiveType === 'slow-2g') {
        return '/9875909-Uhd 3840 2160  480 30Fps.mp4';
      } else if (effectiveType.includes('3g')) {
        return '/9875909-Uhd 3840 2160  576 30Fps.mp4';
      } else if (effectiveType === '4g') {
        return '/9875909-Uhd 3840 2160  720 30Fps.mp4';
      } else {
        return '/9875909-uhd_3840_2160_30fps.mp4';
      }
    }
    return '/9875909-Uhd 3840 2160  480 30Fps.mp4'; // Default to lowest quality if no network info
  }, []);

  const updateVideoQuality = useCallback(async () => {
    if (navigator && 'connection' in navigator) {
      const { effectiveType } = (navigator as any).connection;
      let selectedVideo = '/9875909-uhd_3840_2160_30fps.mp4'; // Default to highest quality
      let newPlaybackRate = 1.0; // Default playback rate
      let opacity = 0.4; // Default opacity for highest quality

      if (effectiveType.includes('2g') || effectiveType === 'slow-2g') {
        selectedVideo = '/9875909-Uhd 3840 2160  480 30Fps.mp4';
        newPlaybackRate = 0.2; // Slow down to 20%
        opacity = 0.7; // Higher opacity for lower quality
      } else if (effectiveType.includes('3g')) {
        selectedVideo = '/9875909-Uhd 3840 2160  576 30Fps.mp4';
        newPlaybackRate = 0.5; // Slow down to 50%
        opacity = 0.6; // Medium opacity for medium quality
      } else if (effectiveType === '4g') {
        selectedVideo = '/9875909-Uhd 3840 2160  720 30Fps.mp4';
        newPlaybackRate = 0.75; // Slow down to 75%
        opacity = 0.5; // Lower opacity for higher quality
      }

      setPlaybackRate(newPlaybackRate);

      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.playbackRate = newPlaybackRate * playbackDirection;
        videoElement.style.opacity = opacity.toString();
      }

      if (currentVideo !== selectedVideo) {
        if (selectedVideo === '/9875909-uhd_3840_2160_30fps.mp4') {
          setIsLoadingHighQuality(true);
          const tempVideo = highQualityVideoRef.current;

          if (tempVideo) {
            tempVideo.src = selectedVideo;
            tempVideo.currentTime = videoRef.current!.currentTime;
            tempVideo.playbackRate = newPlaybackRate * playbackDirection;

            tempVideo.oncanplay = () => {
              setCurrentVideo(selectedVideo);
              setIsLoadingHighQuality(false);
            };

            tempVideo.load();
            await tempVideo.play().catch(error => {
              console.error("Error attempting to play high quality video:", error);
            });
          }
        } else {
          setCurrentVideo(selectedVideo);
        }
      }
    }
  }, [currentVideo, playbackDirection]);

  useEffect(() => {
    const initialVideo = determineInitialVideoQuality();
    setCurrentVideo(initialVideo);
  }, [determineInitialVideoQuality]);

  useEffect(() => {
    if (currentVideo) {
      updateVideoQuality();
      const intervalId = setInterval(updateVideoQuality, 3000); // Check every 3 seconds

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
      videoElement.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });

      const handleResize = () => {
        const width = window.innerWidth;
        if (width <= 480) {
          videoElement.style.opacity = '0.7'; // Mayor opacidad en resoluciones más bajas
        } else if (width <= 768) {
          videoElement.style.opacity = '0.6';
        } else if (width <= 1024) {
          videoElement.style.opacity = '0.5';
        } else {
          videoElement.style.opacity = '0.4'; // Menor opacidad en resoluciones más altas
        }
      };

      const handleEnded = () => {
        setPlaybackDirection(prev => -prev); // Reverse the direction
        videoElement.playbackRate = playbackRate * playbackDirection;
        videoElement.currentTime = videoElement.duration - 0.1; // Avoid ending
        videoElement.play().catch(error => {
          console.error("Error attempting to play video in reverse:", error);
        });
      };

      window.addEventListener('resize', handleResize);
      videoElement.addEventListener('ended', handleEnded);
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
        videoElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentVideo, playbackDirection, playbackRate]);

  return (
    <div className="hero-container">
      <video 
        ref={videoRef} 
        className="hero-video" 
        muted 
        autoPlay 
        playsInline
        loop 
        poster="https://firebasestorage.googleapis.com/v0/b/solar-f11ad.appspot.com/o/lownet.png?alt=media&token=ade8161c-d33c-466e-a165-af9ec3e40099" 
        preload="auto" 
        style={{ opacity: '0.7' }}
      >
        Your browser does not support the video tag.
      </video>
      <video ref={highQualityVideoRef} className={`hero-video ${isLoadingHighQuality ? 'hidden' : ''}`} preload="auto" playsInline />
      <div className="hero-content">
        <h1>Bienvenido a Nuestro Sitio</h1>
        <p>Disfruta de nuestra vista impresionante.</p>
      </div>
    </div>
  );
};

export default VideoComponent;
