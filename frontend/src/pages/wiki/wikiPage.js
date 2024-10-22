import React from "react";
import { Header } from "../../components/Header";
import "./wikiPage.css";

const WikiPage = () => {
  return (
    <div className="screen-grid">
      <Header />
      <div class="notifications-container">
        <div class="alert">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                class="h-500 w-500 alert-svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="alert-prompt-wrap">
              <p class="text-2xl text-yellow-700">
                Your trial 18 years of life has expired. Continue by working
                your sweat off or
                <a class="alert-prompt-link" href="#">
                  Upgrade To Hell.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikiPage;
