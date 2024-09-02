import React, { useState, useEffect } from 'react';

const SubmarineVessel = () => {
  const [posX, setPosX] = useState(window.innerWidth / 2);
  const [posY, setPosY] = useState(window.innerHeight / 2);
  const speed = 40;
  const maxDepth = window.innerHeight * 2;

  // Handle keydown events for controlling submarine movement
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key.toLowerCase()) {
        case 'w':
          setPosY((prevPosY) => prevPosY - speed);
          break;
        case 'a':
          setPosX((prevPosX) => prevPosX - speed);
          break;
        case 's':
          setPosY((prevPosY) => prevPosY + speed);
          break;
        case 'd':
          setPosX((prevPosX) => prevPosX + speed);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Scroll the window and update the background color based on depth
  useEffect(() => {
    if (posY > window.innerHeight / 2) {
      window.scrollTo(0, posY - window.innerHeight / 2);
    }

    document.body.style.backgroundColor = getColorBasedOnDepth(posY);
  }, [posY]);

  // Function to calculate background color based on depth
  const getColorBasedOnDepth = (depth) => {
    const maxDepthColor = '#001f3f'; // Dark blue
    const minDepthColor = '#a0d8ef'; // Light blue

    // Calculate the color interpolation
    const ratio = Math.min(1, depth / maxDepth);
    const [r, g, b] = [0, 1, 2].map((i) =>
      Math.floor(lerp(hexToRgb(minDepthColor)[i], hexToRgb(maxDepthColor)[i], ratio))
    );

    return `rgb(${r}, ${g}, ${b})`;
  };

  // Linear interpolation function
  const lerp = (start, end, ratio) => {
    return start + (end - start) * ratio;
  };

  // Convert hex color to RGB
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };

  // Styles for the submarine element
  const submarineStyle = {
    position: 'absolute',
    left: `${posX}px`,
    top: `${posY}px`,
    width: '50px',
    height: '50px',
    backgroundColor: 'yellow', // You can replace this with an image or another color
    borderRadius: '50%',
  };

  return <div id="submarine" style={submarineStyle}></div>;
};

export default SubmarineVessel;
