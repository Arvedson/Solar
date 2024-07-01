import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-900 min-h-screen">
      <svg className="w-full h-full">
        <defs>
          <filter id="blur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <g fill="rgba(255, 255, 255, 0.3)" filter="url(#blur)">
          <circle cx="10%" cy="100%" r="40">
            <animate attributeName="cy" from="100%" to="-10%" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="30%" cy="100%" r="20">
            <animate attributeName="cy" from="100%" to="-10%" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="100%" r="60">
            <animate attributeName="cy" from="100%" to="-10%" dur="12s" repeatCount="indefinite" />
          </circle>
          <circle cx="70%" cy="100%" r="30">
            <animate attributeName="cy" from="100%" to="-10%" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle cx="90%" cy="100%" r="50">
            <animate attributeName="cy" from="100%" to="-10%" dur="11s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

    
    </div>
  );
};

export default AnimatedBackground;
