import React from "react";
import "./newsPage.css";
import { Header } from "../../components/Header";

const NewsPage = () => {
  return (
    <div className="screen-grid">
      <Header />
      <div className="content-wrapper">
        {/* <img
          src={DolphinBg}
          alt="News Background"
          className="news-background"
        /> */}
      </div>
    </div>
  );
};

export default NewsPage;
