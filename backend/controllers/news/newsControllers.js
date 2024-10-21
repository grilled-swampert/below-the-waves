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
  const { title, content, author, imageUrl, tags } = req.body;

  try {
    const newNews = new News({
      title,
      content,
      author,
      imageUrl,
      tags,
    });
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
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
