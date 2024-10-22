import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/home/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setMessage("Successfully subscribed!");
        setEmail("");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="subscribe ocean-bg">
      <h2 className="subscribe__title">Dive into Our Updates</h2>
      <p className="subscribe__copy">
        Subscribe to stay afloat with our latest news and exciting ocean discoveries. We promise not to flood your inbox!
      </p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          className="form__email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button className="form__button" type="submit">
          Sail Away
        </button>
      </form>
      <div className="notice">
        <input
          type="checkbox"
          className="checkbox__news"
          onChange={handleCheckboxChange}
          checked={isChecked}
          required
        />
        <span className="notice__copy">
          I agree to let my email address swim in the database to receive monthly newsletters.
        </span>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}