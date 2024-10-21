const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  raisedAmount: { type: Number, default: 0 },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  imageUrl: { type: String },
  status: { type: String, enum: ['ongoing', 'completed'], default: 'ongoing' }
});

module.exports = mongoose.model('Campaign', CampaignSchema);
