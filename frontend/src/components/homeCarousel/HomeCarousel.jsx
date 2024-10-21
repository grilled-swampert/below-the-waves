import React from "react";
import "./HomeCarousel.css";

import Groceries from "./images/groceries.png";
import Robot from "./images/robot.png";
import Plants from "./images/plants.png";
import CatMuffs from "./images/cat-muffs.png";
import Relaxing from "./images/relaxing.png";

export const HomeCarousel = () => {
  const stickySections = [...document.querySelectorAll(".sticky")];
  let images = [
    Groceries,
    Robot,
    Plants,
    CatMuffs,
    Relaxing,
    Robot,
    Plants,
    CatMuffs,
    Relaxing,
  ];

  images.forEach((img) => {
    stickySections.forEach((section) => {
      let image = document.createElement("img");
      image.src = img;
      image.style.width = "400px";  
      section.querySelector(".scroll_section").appendChild(image);
    });
  });
  
  window.addEventListener("scroll", (e) => {
    for (let i = 0; i < stickySections.length; i++) {
      transform(stickySections[i]);
    }
  });

  function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector(".scroll_section");

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    console.log(percentage);
    percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
    scrollSection.style.transform = `translate3D(${-percentage}vw, 0, 0)`;
  }

  return (
    <div className="sticky_parent">
      <div className="sticky">
        <div className="scroll_section"></div>
      </div>
    </div>
  );
};
