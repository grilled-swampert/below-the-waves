import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './homePage.css';
import mainLogo from '../../assets/images/main-logo.png';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const grid = document.querySelector('.bento-grid');
        setTimeout(() => {
            grid.classList.add('loaded');
        }, 100); // Delay to ensure all items are rendered
    }, []);

    return (
        <div className="bento-grid">
            <div className="bento-item large" onClick={() => navigate('/')}>
                <img src={mainLogo} alt="below-the-waves" className="logo-image" />
            </div>
            <div className="bento-item small" onClick={() => navigate('/wiki')}>Wiki</div>
            <div className="bento-item small" onClick={() => navigate('/news')}>Ocean News</div>
            <div className="bento-item medium" onClick={() => navigate('/overview')}>Life Overview</div>
            <div className="bento-item tall">GIFS</div>
            <div className="bento-item small" onClick={() => navigate('/donate')}>Donate</div>
            <div className="bento-item wide" onClick={() => navigate('/mysteries')}>Mysteries</div>
            <div className="bento-item lean" onClick={() => navigate('/game')}>Pokemon</div>
        </div>
    );
};

export default HomePage;
