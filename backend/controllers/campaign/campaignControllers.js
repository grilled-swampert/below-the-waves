const Campaign = require("../../models/campaign/campaignModel");

// Fetch all campaigns
exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ error: "Error fetching campaigns" });
  }
};

// Post a new campaign
exports.createCampaign = async (req, res) => {
  const { title, description, goalAmount, startDate, endDate, imageUrl } =
    req.body;

  try {
    const newCampaign = new Campaign({
      title,
      description,
      goalAmount,
      startDate,
      endDate,
      imageUrl,
    });
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    res.status(500).json({ error: "Error creating campaign" });
  }
};

// Delete a campaign
exports.deleteCampaign = async (req, res) => {
  try {
    await Campaign.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Campaign deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting campaign" });
  }
};
