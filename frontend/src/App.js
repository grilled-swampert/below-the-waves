import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/homePage';  
import NewsPage from './pages/news/newsPage';
import DonatePage from './pages/donate/donatePage';
import WorkPage from './pages/work/workPage';
import WikiPage from './pages/wiki/wikiPage';
import Preloader from './pages/preloader/preloaderPage';
import ContactPage from './pages/contact/contactPage';
import FundraiserPage from './pages/fundraiser/fundraiserPage';

import AdminPreloader from './admin__pages/preloader/preloaderPage';
import AdminHomePage from './admin__pages/home/homePage';
import AdminNewsPage from './admin__pages/news/newsPage';
import AdminDonatePage from './admin__pages/donate/AdminDonatePage';
import AdminFundraiserPage from './admin__pages/fundraiser/fundraiserPage';
import AdminWorkPage from './admin__pages/work/workPage';
import AdminWikiPage from './admin__pages/wiki/wikiPage';
import AdminContactPage from './admin__pages/contact/contactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/newsroom" element={<NewsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/fundraiser" element={<FundraiserPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/wiki" element={<WikiPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/admin" element={<AdminPreloader />} />
        <Route path="/admin/" element={<AdminHomePage />} />
        <Route path="/admin/newsroom" element={<AdminNewsPage />} />
        <Route path="/admin/donate" element={<AdminDonatePage />} />
        <Route path="/admin/fundraiser" element={<AdminFundraiserPage />} />
        <Route path="/admin/work" element={<AdminWorkPage />} />
        <Route path="/admin/wiki" element={<AdminWikiPage />} />
        <Route path="/admin/contact" element={<AdminContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
