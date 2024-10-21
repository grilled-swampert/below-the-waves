const Donation = require("../../models/donations/donationsModel");

// Fetch all donations
exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate("campaign");
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: "Error fetching donations" });
  }
};

// Post a new donation
exports.createDonation = async (req, res) => {
  const { donorName, donorEmail, amount, campaign } = req.body;

  try {
    const newDonation = new Donation({
      donorName,
      donorEmail,
      amount,
      campaign,
    });
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(500).json({ error: "Error creating donation" });
  }
};

// Delete a donation
exports.deleteDonation = async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Donation deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting donation" });
  }
};
