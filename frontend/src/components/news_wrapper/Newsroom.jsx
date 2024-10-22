import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './Newsroom.css'; // Import the CSS file

const Newsroom = () => {
    const [newsItems, setNewsItems] = useState([]); // State for news items
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of news items per page

    // Fetch news items from the backend
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('/news'); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNewsItems(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    // Calculate the news items for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="newsroom-container">
            <h1 className="newsroom-title">Newsroom</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search news..."
                    className="search-input"
                />
            </div>

            <div className="cards-container">
                {currentItems.map((news, index) => (
                    <div 
                        key={index} 
                        className={`news-card ${index === 0 ? 'first-card' : ''}`}
                    >
                        <h2 className="news-card-title">{news.title}</h2>
                        <p className="news-card-content">{news.content}</p>
                        <a href={news.newsUrl} className="read-more">Read more</a>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(newsItems.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`pagination-button ${currentPage === index + 1 ? 'active' : 'inactive'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Newsroom;
