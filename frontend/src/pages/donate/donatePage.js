import React, { useState } from "react";
import { Header } from "../../components/Header";
import { CreditCard, Calendar, Lock } from "lucide-react";
import "./donatePage.css";

const DonatePage = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [category, setCategory] = useState("");
  
  const presetAmounts = [10, 25, 50, 100];
  const categories = [
    "General Support",
    "Education Programs",
    "Community Outreach",
    "Emergency Relief",
    "Research & Development"
  ];

  const handleDonationSubmit = async () => {
    const donationData = {
      donorName,
      donorEmail,
      amount: parseFloat(amount),
      category,
      date: new Date(),
    };

    try {
      const response = await fetch('/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });
      
      if (response.ok) {
        alert("Thank you for your donation!");
      } else {
        alert("Error: Unable to process donation");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="donate-page-container">
      <Header />
      
      <div className="donate-page-wrapper">
        <div className="grid md:grid-cols-1 gap-8">
          {/* Left Panel */}
          <div className="space-y-6">
            <div className="donate-card">
              <div className="mb-6">
                <h2 className="donate-heading">Support Our Cause</h2>
              </div>
              {/* Donation Type */}
              <div className="space-y-4">
                <p>Your donation helps us continue our mission. Choose between a one-time gift or become a monthly supporter to make a lasting impact.</p>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div>
            <div className="donate-card">
              <div className="mb-6">
                <h2 className="heading">Make a Donation</h2>
              </div>

              {/* Donor Info */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="donate-input-field"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="donate-input-field"
                />
                
                {/* Category Selection */}
                <select
                  value={category}
                  style={{ height: "40px" }}
                  onChange={(e) => setCategory(e.target.value)}
                  className="donate-input-field"
                >
                  <option value="" style={{ fontSize: "16px"
                  }}>Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat} style={{ fontSize: "16px"}}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount */}
              <div className="space-y-4 mt-4">
                <label>Select Amount</label>
                <div className="grid grid-cols-4 gap-2">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setAmount(preset.toString())}
                      className={`preset-button ${amount === preset.toString() ? 'selected' : 'unselected'}`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Other amount"
                  className="input-field"
                />
              </div>

              {/* Payment Form */}
              <div className="space-y-4 mt-4">
                <input type="text" placeholder="Card Number" className="input-field" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="MM/YY" className="input-field" />
                  <input type="text" placeholder="CVV" className="input-field" />
                </div>
              </div>

              <button onClick={handleDonationSubmit} className="submit-button mt-6">
                {donationType === "one-time" ? "Donate" : "Start Monthly Donation"} {amount && `$${amount}`}
              </button>

              <p className="stripe-info mt-4">
                Secure payment powered by Stripe. Your financial information is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;