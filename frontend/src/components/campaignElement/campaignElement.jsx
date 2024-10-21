import React from "react";
import "./campaignElement.css";

const CampaignElement = () => {
  return (
    <div
      class="section service"
      id="service"
    >
      <div class="container">
        <p class="section-subtitle">
          <span>What We Do</span>
        </p>

        <h2 class="h2 section-title">
          We Work Differently to keep The World Safe
        </h2>

        <ul class="service-list">
          <li>
            <div class="service-card">
              <div class="card-icon">
                <ion-icon name="leaf-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">Save Nature</h3>

              <p class="card-text"></p>

              <a href="#" class="btn-link">
                <span>Read More</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div class="service-card">
              <div class="card-icon">
                <ion-icon name="earth-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">Save Ecology</h3>

              <p class="card-text"></p>

              <a href="#" class="btn-link">
                <span>Read More</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div class="service-card">
              <div class="card-icon">
                <ion-icon name="flower-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">Oil Spills</h3>

              <p class="card-text"></p>

              <a href="#" class="btn-link">
                <span>Read More</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div class="service-card">
              <div class="card-icon">
                <ion-icon name="boat-outline"></ion-icon>
              </div>

              <h3 class="h3 card-title">Clear Ocean</h3>

              <p class="card-text"></p>

              <a href="#" class="btn-link">
                <span>Read More</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CampaignElement;
