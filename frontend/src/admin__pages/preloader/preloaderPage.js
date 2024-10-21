import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './preloader.css'; // Import the external CSS file

const AdminPreloader = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0); 
  const navigate = useNavigate(); 

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

  useEffect(() => {
    if (progress === 100) {
      navigate('/home'); 
    }
  }, [progress, navigate]);

  useEffect(() => {
    if (progress >= 33) {
      setStage(1); 
    }
    if (progress >= 66) {
      setStage(2); 
    }
  }, [progress]);

  const WavyProgress = ({ progress }) => {
    const width = 600; // Matches w-96
    const height = 50;
    const wavelength = 10;
    const amplitude = 10;

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
          <div>B</div>
          <div>T</div>
          <div>W</div>
        </div>
      </div>
      <WavyProgress progress={progress} />
    </div>
  );
};

export default AdminPreloader;
