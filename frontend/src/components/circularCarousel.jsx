import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CircularCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="relative w-full h-64">
      <div className="circular-carousel w-full h-full">
        {items.map((item, index) => {
          const angle = (((index - currentIndex + items.length) % items.length) / items.length) * 360;
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * 40 + 50;
          const y = Math.sin(radian) * 40 + 50;
          const scale = 0.5 + 0.5 * Math.cos(radian);
          const zIndex = Math.round(scale * 100);

          return (
            <div
              key={index}
              className="carousel-item absolute transition-all duration-500 ease-in-out"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%) scale(${scale})`,
                zIndex,
                opacity: scale
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <button
        onClick={moveLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
        aria-label="Previous item"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={moveRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
        aria-label="Next item"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CircularCarousel;