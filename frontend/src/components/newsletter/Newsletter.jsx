import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="subscribe ocean-bg">
      <h2 className="subscribe__title">Dive into Our Updates</h2>
      <p className="subscribe__copy">
        Subscribe to stay afloat with our latest news and exciting ocean discoveries. We promise not to flood your inbox!
      </p>
      <div className="form">
        <input
          type="email"
          className="form__email"
          placeholder="Enter your email address"
        />
        <button className="form__button" disabled={!isChecked}>
          Sail Away
        </button>
      </div>
      <div className="notice">
        <input
          type="checkbox"
          className="checkbox__news"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        <span className="notice__copy">
          I agree to let my email address swim in the database to receive monthly newsletters.
        </span>
      </div>
    </div>
  );
}
