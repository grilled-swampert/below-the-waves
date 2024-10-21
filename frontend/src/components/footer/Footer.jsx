import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="brand-col">
        <h3>Protecting Our Oceans, Preserving Our Future</h3>
        <div className="legal-info">
          <p>&copy; 2024 Below The Waves</p>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="link-col">
        <ul>
          <li>Resources</li>
          <li>
            <a href="#">Marine Conservation</a>
          </li>
          <li>
            <a href="#">Sustainable Practices</a>
          </li>
          <li>
            <a href="#">Oceanography Research</a>
          </li>
          <li>
            <a href="#">Community Initiatives</a>
          </li>
        </ul>
        <ul>
          <li>Education</li>
          <li>
            <a href="#">Get Involved</a>
          </li>
          <li>
            <a href="#">Workshops</a>
          </li>
          <li>
            <a href="#">Educational Resources</a>
          </li>
          <li>
            <a href="#">Volunteer Opportunities</a>
          </li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>
            <a href="#">Our Mission</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Partner Organizations</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
