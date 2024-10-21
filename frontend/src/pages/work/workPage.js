import React, { useState } from "react";
import "./workPage.css";
import { Header } from "../../components/Header";
import workBackground from "../../assets/gifs/anime-quarium.gif";
import Footer from "../../components/footer/Footer";

const WorkPage = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [randomGrid, setRandomGrid] = useState([]);

  const generateRandomGrid = () => {
    // Generate random Bento grid layout
    const gridItems = Array.from({ length: 6 }, () => ({
      width: Math.random() > 0.5 ? "2fr" : "1fr",
      height: Math.random() > 0.5 ? "200px" : "100px",
    }));
    setRandomGrid(gridItems);
  };

  const handleClick = () => {
    generateRandomGrid();
    setShowGrid(true);
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
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <p key={index} onClick={handleClick}>
                <span>HOVER ME</span>
              </p>
            ))}
        </div>
        {showGrid && (
          <div className="bento-grid">
            {randomGrid.map((item, index) => (
              <div
                key={index}
                className="bento-item"
                style={{
                  width: item.width,
                  height: item.height,
                  backgroundColor: "#ff5a91",
                  margin: "10px",
                }}
              />
            ))}
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default WorkPage;
