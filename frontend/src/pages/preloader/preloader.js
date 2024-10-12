import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './preloader.css'; // Import the external CSS file

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0); // 0: initial, 1: spread, 2: expanded
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Redirect to another page when progress reaches 100
  useEffect(() => {
    if (progress === 100) {
      navigate('/new-page'); // Replace '/new-page' with the desired route
    }
  }, [progress, navigate]);

  useEffect(() => {
    if (progress >= 33) {
      setStage(1); // spread
    }
    if (progress >= 66) {
      setStage(2); // expand
    }
  }, [progress]);

  const Letter = ({ original, expanded: expandedText, position }) => {
    const getTransform = () => {
      if (stage === 0) return 'translateX(0)';
      if (stage === 1) return `translateX(${position === 'left' ? '-100%' : position === 'right' ? '100%' : '0'})`;
      return 'translateX(0)';
    };

    return (
      <div className="letter-container" style={{ transform: getTransform() }}>
        <span className={`letter-original ${stage === 2 ? 'hide' : 'show'}`}>
          {original}
        </span>
        <span className={`letter-expanded ${stage === 2 ? 'show' : 'hide'}`}>
          {expandedText}
        </span>
      </div>
    );
  };

  const WavyProgress = ({ progress }) => {
    const width = 384; // Matches w-96
    const height = 20;
    const wavelength = 20;
    const amplitude = 5;

    const path = `M0 ${height / 2} ` + 
      [...Array(Math.ceil(width / wavelength))].map((_, i) => 
        `Q${i * wavelength + wavelength / 4} ${height / 2 + amplitude}, ${i * wavelength + wavelength / 2} ${height / 2} ` +
        `Q${i * wavelength + wavelength * 3 / 4} ${height / 2 - amplitude}, ${i * wavelength + wavelength} ${height / 2}`
      ).join(' ');

    return (
      <svg width={width} height={height} className="progress-bar">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset={`${progress}%`} stopColor="#3B82F6" />
            <stop offset={`${progress}%`} stopColor="#1F2937" />
            <stop offset="100%" stopColor="#1F2937" />
          </linearGradient>
        </defs>
        <path d={path} fill="none" stroke="url(#gradient)" strokeWidth="2" />
      </svg>
    );
  };

  return (
    <div className="preloader-container">
      <div className="letter-wrapper">
        <div className="letter-group">
          <Letter original="B" expanded="BELOW" position="left" />
          <Letter original="T" expanded="THE" position="center" />
          <Letter original="W" expanded="WAVES" position="right" />
        </div>
      </div>
      <WavyProgress progress={progress} />
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

export default Preloader;
