const mongoose = require('mongoose');

const FundraiserSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organizerName: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  raisedAmount: { type: Number, default: 0 },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ["ongoing", "completed"], default: "ongoing" },
});

module.exports = mongoose.model("Fundraiser", FundraiserSchema);
