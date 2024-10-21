import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './Newsroom.css'; // Import the CSS file

const Newsroom = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of news items per page
    const totalNewsItems = 30; // Total number of news items
    const newsItems = Array.from({ length: totalNewsItems }, (_, index) => ({
        title: `News Title ${index + 1}`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis sed velit quis aliquet.',
    }));

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {currentItems.map((news, index) => (
                    <div 
                        key={index} 
                        className={`news-card ${index === 0 ? 'first-card' : ''}`}
                    >
                        <h2 className="news-card-title">{news.title}</h2>
                        <p className="news-card-content">{news.content}</p>
                        <a href="#" className="read-more">Read more</a>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(totalNewsItems / itemsPerPage) }, (_, index) => (
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
