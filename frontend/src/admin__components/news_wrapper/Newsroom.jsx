import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure you have axios installed

const NewsForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [newsUrl, setNewsUrl] = useState('');
    const [tags, setTags] = useState('');
    const [newsItems, setNewsItems] = useState([]);
    const [error, setError] = useState('');
    
    // Fetch existing news items on component mount
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('/news'); // Adjust endpoint if necessary
                setNewsItems(response.data);
            } catch (err) {
                console.error('Error fetching news:', err);
                setError('Failed to fetch news items.');
            }
        };
        fetchNews();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Convert tags string into an array
        const tagsArray = tags.split(',').map(tag => tag.trim());

        const newsData = {
            title,
            content,
            author,
            imageUrl,
            newsUrl,
            tags: tagsArray,
        };

        try {
            const response = await axios.post('/news', newsData); // Adjust the API endpoint
            console.log('News submitted:', response.data);
            // Reset form fields after successful submission
            setTitle('');
            setContent('');
            setAuthor('');
            setImageUrl('');
            setNewsUrl('');
            setTags('');
            // Re-fetch news items after adding new one
            setNewsItems([...newsItems, response.data]);
        } catch (err) {
            console.error('Error submitting news:', err);
            setError('Failed to submit news. Please try again.');
        }
    };

    // Handle deleting a news item
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/news/${id}`); // Adjust the API endpoint for deletion
            setNewsItems(newsItems.filter(news => news._id !== id)); // Remove deleted news from state
        } catch (err) {
            console.error('Error deleting news:', err);
            setError('Failed to delete news item. Please try again.');
        }
    };

    return (
        <div className="newsroom-container">
            <h1>Add News</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label>News URL:</label>
                    <input
                        type="text"
                        value={newsUrl}
                        onChange={(e) => setNewsUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label>Tags (comma-separated):</label>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            <h2>Existing News Items</h2>
            <div>
                {newsItems.length === 0 ? (
                    <p>No news items available.</p>
                ) : (
                    <ul>
                        {newsItems.map(news => (
                            <li key={news._id}>
                                <div className='news-card-title'>{news.title}</div>
                                <p>{news.content}</p>
                                <p>Author: {news.author}</p>
                                {news.imageUrl && <img src={news.imageUrl} alt={news.title} />}
                                <button onClick={() => handleDelete(news._id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default NewsForm;
