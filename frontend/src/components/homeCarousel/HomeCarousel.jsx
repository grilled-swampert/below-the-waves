import React from "react";
import "./HomeCarousel.css";

import carousel1 from "./images/carousel1.png";
import carousel2 from "./images/carousel2.jpg";
import carousel3 from "./images/carousel3.png";
import carousel4 from "./images/carousel4.jpg";
import carousel5 from "./images/carousel5.jpg";
import carousel6 from "./images/carousel6.jpg";
import carousel7 from "./images/carousel7.png";
import carousel8 from "./images/carousel8.jpg";
import carousel9 from "./images/carousel9.jpg";

export const HomeCarousel = () => {
  const stickySections = [...document.querySelectorAll(".sticky")];
  let images = [
    carousel1,
    carousel2,
    carousel3,
    carousel6,
    carousel7,
    carousel8,
    carousel9,
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
    carousel8,
    carousel9,
  ];
  
  // Set the same size for all images
  images.forEach((img) => {
    stickySections.forEach((section) => {
      let image = document.createElement("img");
      image.src = img;
      image.style.width = "500px";  // Fixed width
      image.style.height = "300px"; // Fixed height (ensure aspect ratio)
      image.style.margin = "10px";  // Add gap around images
      image.style.borderRadius = "10px"; // Add border radius
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
