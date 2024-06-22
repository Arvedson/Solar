"use client"
import React, { useState } from 'react';

const BorderAnimationPage: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <button
          onClick={() => setAnimate(true)}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Animate Border
        </button>
        <div
          className={`w-64 h-64 mt-4 border-4 border-transparent ${animate ? 'animate-border-fill' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default BorderAnimationPage;
