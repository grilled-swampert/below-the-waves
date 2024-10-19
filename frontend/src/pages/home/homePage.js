import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./homePage.css";
import mainBackground from "../../assets/images/main-background.jpg";
import { Header } from "../../components/Header";
import quote01 from "../../assets/svgs/quote-1.svg";
import Newsletter from "../../components/newsletter/Newsletter";

const HomePage = () => {
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const arrowRef = useRef(null); // Create a reference for the arrow

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 1.2,
      duration: 2,
      ease: "power2.out",
    });

    textRefs.current.forEach((textRef, index) => {
      gsap.from(textRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.3, 
      });
    });

    gsap.fromTo(
      arrowRef.current,
      { y: 0, opacity: 0 }, 
      {
        y: 10,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      } // Animation properties
    );
  }, []);

  return (
    <div className="screen-grid">
      <Header />
      <div className="content-wrapper">
        <img
          src={mainBackground}
          alt="Main Background"
          className="main-background"
          ref={imageRef}
        />
        <div className="content-wrapper-text">
          <p className="text-part-1" ref={(el) => (textRefs.current[0] = el)}>
            <img src={quote01} alt="Quote 1" className="quote-1" />
          </p>
          <p
            className="text-part-2"
            ref={(el) => (textRefs.current[1] = el)}
          >We hold one torch high, and try to keep it burning bright. </p>
          <p
            className="text-part-3"
            ref={(el) => (textRefs.current[2] = el)}
          ></p>
          <p
            className="text-part-4"
            ref={(el) => (textRefs.current[3] = el)}
          ></p>
          <p className="text-part-5" ref={(el) => (textRefs.current[4] = el)}>
            <span className="scroll-text">
              Scroll down to learn more about our mission.
            </span>
            <svg
              className="down-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              ref={arrowRef} // Attach the ref to the arrow
            >
              <path d="M12 16.5l-6-6h12l-6 6z" />
            </svg>
          </p>
        </div>

        <Newsletter />

        <div className="three-boxes">
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
        </div>




        <div className="single-box">
          <p>This is a special feature box.</p>
        </div>

        <div className="carousel">
          <div className="carousel-box">Carousel Box 1</div>
          <div className="carousel-box">Carousel Box 2</div>
          <div className="carousel-box">Carousel Box 3</div>
        </div>

        <footer className="footer">
          <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
          <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
          <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
          <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
          <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
          <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
          <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
