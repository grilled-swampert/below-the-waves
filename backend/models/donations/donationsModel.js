const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  amount: { type: Number, required: true },
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Donation", DonationSchema);
