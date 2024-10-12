import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/homePage';  
import NewsPage from './pages/news/newsPage';
import DonatePage from './pages/donate/donatePage';
import MysteriesPage from './pages/mysteries/mysteriesPage';
import WikiPage from './pages/wiki/wikiPage';
import GamePage from './pages/game/gamePage';
import OverviewPage from './pages/overview/overviewPage';
import Preloader from './pages/preloader/preloaderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="/home" element={<HomePage />} />  
        <Route path="/news" element={<NewsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/mysteries" element={<MysteriesPage />} />
        <Route path="/wiki" element={<WikiPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
