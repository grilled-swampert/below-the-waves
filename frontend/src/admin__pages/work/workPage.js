import React, { useState } from "react";
import "./workPage.css";
import { Header } from "../../components/Header";
import workBackground from "../../assets/gifs/anime-quarium.gif";
import Footer from "../../components/footer/Footer";

const AdminWorkPage = () => {
  const [clickedTitle, setClickedTitle] = useState(null);  // Store clicked title

  const oceanConservationTitles = [
    { title: "Coral Reef Restoration", color: "#FFFFFF" },  // Coral
    { title: "Marine Debris Cleanup", color: "#FFFFFF" },   // Light Sea Green
    { title: "Sustainable Fishing", color: "#FFFFFF" },     // Royal Blue
    { title: "Ocean Acidification Research", color: "#FFFFFF" }, // Lime Green
    { title: "Sea Turtle Protection", color: "#FFFFFF" },   // Forest Green
    { title: "Mangrove Reforestation", color: "#FFFFFF" },  // Dark Sea Green
    { title: "Whale Migration Tracking", color: "#FFFFFF" }, // Steel Blue
    { title: "Plastic Pollution Prevention", color: "#FFFFFF" }, // Indian Red
    { title: "Seagrass Meadow Conservation", color: "#FFFFFF" }, // Medium Sea Green
    { title: "Marine Protected Areas", color: "#FFFFFF" },  // Slate Blue
    { title: "Shark Conservation", color: "#FFFFFF" },      // Slate Gray
    { title: "Deep-Sea Ecosystem Study", color: "#FFFFFF" } // Midnight Blue
  ];

  const handleClick = (title) => {
    setClickedTitle(title);  // Set the clicked title
  };

  return (
    <div className="screen-grid">
      <Header />
      <div className="work-container">
        <img
          src={workBackground}
          alt="Work Background"
          className="work-background"
        />
        <div className="card">
          {oceanConservationTitles.map(({ title, color }, index) => (
            <p key={index} onClick={() => handleClick(title)}>
              <span style={{ color: color }}>{title}</span>
            </p>
          ))}
        </div>
        {clickedTitle && (
          <div className="fetch-status">
            <p>{clickedTitle}: To be fetched from backend.</p>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default AdminWorkPage;
