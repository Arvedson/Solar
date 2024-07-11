"use client";
import React from "react";

interface ScrollToSectionProps {
  id: string;
  children: React.ReactNode;
}

const ScrollToSection: React.FC<ScrollToSectionProps> = ({ id, children }) => {
  const handleClick = () => {
    const section = document.getElementById(id);
    if (section) {
      const mediaQuery = window.matchMedia("(min-width: 1024px)");
      if (mediaQuery.matches) {
        // Pantallas grandes
        section.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        // Pantallas pequeñas
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <button onClick={handleClick} className="text-foreground hover:text-primary">
      {children}
    </button>
  );
};

export default ScrollToSection;
