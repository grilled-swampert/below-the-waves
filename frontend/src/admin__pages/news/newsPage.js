import React from "react";
import Footer from "../../admin__components/footer/Footer"
import { Header } from "../../admin__components/Header";
import Newsroom from "../../admin__components/news_wrapper/Newsroom";

const AdminNewsPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Newsroom />
      <Footer />
    </div>
  );
};

export default AdminNewsPage;