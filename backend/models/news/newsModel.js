const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  imageUrl: { type: String },
  newsUrl: { type: String },
  tags: { type: [String] },
});

module.exports = mongoose.model("News", NewsSchema);
