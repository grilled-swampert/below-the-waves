import React from "react";
import "./campaignElement.css";
import { Leaf, Globe2, Droplets, Ship, Sun, PawPrint, Flower2, Book, Footprints } from "lucide-react"; 

const CampaignElement = () => {
  return (
    <div className="section service" id="service">
      <div className="container">
        <p className="section-subtitle">
          <span>What We Do</span>
        </p>

        <h2 className="h2 section-title">
          We Work Differently to Keep The World Safe
        </h2>

        <ul className="service-list">
          {/* Existing Objectives */}
          <li>
            <div className="service-card">
              <div className="card-icon">
                <Leaf className="w-40 h-40 text-green-600" />
              </div>

              <h3 className="h3 card-title">Save Nature</h3>

              <p className="card-text">
                We engage in various initiatives to protect and restore natural
                habitats, promoting biodiversity and conservation efforts
                worldwide.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Globe2 className="w-40 h-40 text-blue-600" />
              </div>

              <h3 className="h3 card-title">Save Ecology</h3>

              <p className="card-text">
                Our projects focus on restoring ecological balance through
                sustainable practices and community involvement, ensuring a
                healthier planet for future generations.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Droplets className="w-40 h-40 text-yellow-600" />
              </div>

              <h3 className="h3 card-title">Oil Spills</h3>

              <p className="card-text">
                We actively participate in cleanup efforts and advocacy to
                mitigate the impact of oil spills on marine ecosystems and
                wildlife.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Ship className="w-40 h-40 text-cyan-600" />
              </div>

              <h3 className="h3 card-title">Clear Ocean</h3>

              <p className="card-text">
                Our mission includes ocean clean-up operations, focusing on
                reducing plastic pollution and protecting marine life.
              </p>
            </div>
          </li>

          {/* New Objectives */}
          <li>
            <div className="service-card">
              <div className="card-icon">
                <Sun className="w-40 h-40 text-orange-600" />
              </div>

              <h3 className="h3 card-title">Promote Renewable Energy</h3>

              <p className="card-text">
                We advocate for the transition to renewable energy sources,
                working with communities to implement solar, wind, and hydro
                energy solutions to reduce our carbon footprint.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <PawPrint className="w-40 h-40 text-red-600" />
              </div>

              <h3 className="h3 card-title">Protect Endangered Species</h3>

              <p className="card-text">
                Our organization works to protect endangered species through
                habitat preservation, rehabilitation programs, and advocacy for
                wildlife conservation policies.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Book className="w-40 h-40 text-purple-600" />
              </div>

              <h3 className="h3 card-title">Educate Communities</h3>

              <p className="card-text">
                We conduct workshops and awareness campaigns to educate
                communities about sustainable practices, encouraging eco-friendly
                lifestyles and responsible consumption.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Flower2 className="w-40 h-40 text-green-700" />
              </div>

              <h3 className="h3 card-title">Support Sustainable Agriculture</h3>

              <p className="card-text">
                We promote sustainable farming practices that protect natural
                resources, enhance soil health, and support local farmers in
                producing organic crops.
              </p>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <Footprints className="w-40 h-40 text-gray-600" />
              </div>

              <h3 className="h3 card-title">Reduce Carbon Emissions</h3>

              <p className="card-text">
                We implement initiatives aimed at reducing carbon emissions
                through reforestation, energy efficiency projects, and
                transportation alternatives.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CampaignElement;
