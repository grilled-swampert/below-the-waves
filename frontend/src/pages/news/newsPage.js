import React from "react";
import Footer from "../../components/footer/Footer"
import { Header } from "../../components/Header";
import Newsroom from "../../components/news_wrapper/Newsroom";

const NewsPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Newsroom />
      <Footer />
    </div>
  );
};

export default NewsPage;