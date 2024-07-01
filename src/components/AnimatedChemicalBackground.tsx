import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedChemicalBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const clouds = gsap.utils.toArray('.cloud');
    
    clouds.forEach((cloud: any, i) => {
      gsap.to(cloud, {
        x: 'random(-200, 200)',
        y: 'random(-100, 100)',
        opacity: 'random(0.1, 0.3)',
        duration: 'random(6, 12)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.5,
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" ref={svgRef}>
        <defs>
          <filter id="blur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <g filter="url(#blur)">
          <circle className="cloud" cx="20%" cy="80%" r="40" fill="hsla(var(--foreground), 0.2)" />
          <circle className="cloud" cx="50%" cy="90%" r="30" fill="hsla(var(--foreground), 0.25)" />
          <circle className="cloud" cx="80%" cy="70%" r="50" fill="hsla(var(--foreground), 0.3)" />
          <circle className="cloud" cx="30%" cy="60%" r="60" fill="hsla(var(--foreground), 0.35)" />
          <circle className="cloud" cx="70%" cy="50%" r="45" fill="hsla(var(--foreground), 0.4)" />
          <circle className="cloud" cx="40%" cy="40%" r="35" fill="hsla(var(--foreground), 0.45)" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedChemicalBackground;
