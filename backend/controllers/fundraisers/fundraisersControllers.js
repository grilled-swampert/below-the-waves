const Fundraiser = require("../../models/fundraisers/fundraisersModel");

// Fetch all fundraisers
exports.getFundraisers = async (req, res) => {
  try {
    const fundraisers = await Fundraiser.find();
    res.status(200).json(fundraisers);
  } catch (error) {
    res.status(500).json({ error: "Error fetching fundraisers" });
  }
};

// Post a new fundraiser
exports.createFundraiser = async (req, res) => {
  const { title, organizerName, goalAmount, description, startDate, endDate } =
    req.body;

  try {
    const newFundraiser = new Fundraiser({
      title,
      organizerName,
      goalAmount,
      description,
      startDate,
      endDate,
    });
    await newFundraiser.save();
    res.status(201).json(newFundraiser);
  } catch (error) {
    res.status(500).json({ error: "Error creating fundraiser" });
  }
};

// Delete a fundraiser
exports.deleteFundraiser = async (req, res) => {
  try {
    await Fundraiser.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Fundraiser deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting fundraiser" });
  }
};
