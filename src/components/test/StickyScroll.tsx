// src/app/components/StickyScroll.tsx

import React from 'react';

const StickyScroll: React.FC = () => {
  return (
    <div className="p-20">
      <div className="sticky top-0 bg-white p-4 border border-gray-300 z-50">
        <h2 className="text-2xl font-bold">Sticky Element</h2>
        <p>This element will stick to the top of the viewport while scrolling.</p>
      </div>
      <div className="mt-8">
        <p>Scroll down to see the sticky effect.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>More content to scroll...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>More content to scroll...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>More content to scroll...</p>
      </div>
    </div>
  );
};

export default StickyScroll;


