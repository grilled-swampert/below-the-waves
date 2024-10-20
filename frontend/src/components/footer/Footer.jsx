import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const OceanWaveFooter = () => {
  const waveRef1 = useRef(null);
  const waveRef2 = useRef(null);
  const waveRef3 = useRef(null);

  useEffect(() => {
    const wave1 = waveRef1.current;
    const wave2 = waveRef2.current;
    const wave3 = waveRef3.current;

    gsap.set([wave1, wave2, wave3], { transformOrigin: "50% 50%" });

    gsap.to(wave1, {
      duration: 10,
      x: "-=300",
      repeat: -1,
      ease: "linear"
    });

    gsap.to(wave2, {
      duration: 7,
      x: "-=300",
      repeat: -1,
      ease: "linear"
    });

    gsap.to(wave3, {
      duration: 5,
      x: "-=300",
      repeat: -1,
      ease: "linear"
    });

    return () => {
      gsap.killTweensOf([wave1, wave2, wave3]);
    };
  }, []);

  return (
    <footer className="relative h-40 bg-blue-500 overflow-hidden">
      <svg className="absolute bottom-0 left-0 w-[200%] h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path ref={waveRef1} d="M0,0 C300,90 600,0 1200,0 L1200,120 L0,120 Z" className="fill-blue-300 opacity-50" />
        <path ref={waveRef2} d="M0,0 C300,60 600,120 1200,0 L1200,120 L0,120 Z" className="fill-blue-200 opacity-50" />
        <path ref={waveRef3} d="M0,0 C150,60 400,30 1200,120 L1200,120 L0,120 Z" className="fill-blue-100 opacity-50" />
      </svg>
      <div className="relative z-10 container mx-auto px-6 pt-10 text-white">
        <p className="text-center">&copy; 2024 Ocean Wave Footer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default OceanWaveFooter;