const News = require("../../models/news/newsModel");

// Fetch all news
exports.getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: "Error fetching news" });
  }
};

// Post a new news article
exports.createNews = async (req, res) => {
  const { title, content, author, imageUrl, tags, newsUrl } = req.body;

  // Debug: Log incoming request data
  console.log("Incoming request to create news:", {
    title,
    content,
    author,
    imageUrl,
    tags,
    newsUrl,
  });

  try {
    const newNews = new News({
      title,
      content,
      author,
      imageUrl,
      tags,
      newsUrl
    });
    await newNews.save();
    
    // Debug: Log the newly created news item
    console.log("Successfully created news:", newNews);
    
    res.status(201).json(newNews);
  } catch (error) {
    // Debug: Log the error message
    console.error("Error creating news:", error);
    
    res.status(500).json({ error: "Error creating news" });
  }
};


// Delete a news article
exports.deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "News deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting news" });
  }
};
