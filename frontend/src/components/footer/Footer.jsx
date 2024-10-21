import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="brand-col">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div class="legal-info">
          <p>&copy; Below The Waves</p>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div class="link-col">
        <ul>
          <li>Resources</li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Newsroom</a>
          </li>
          <li>
            <a href="#">Status</a>
          </li>
        </ul>
        <ul>
          <li>Development</li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Product Updates</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <ul>
          <li>Company</li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Culture</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
