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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="/home" element={<HomePage />} />  
        <Route path="/newsroom" element={<NewsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/fundraiser" element={<FundraiserPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/wiki" element={<WikiPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
