const Work = require("../../models/work/workModel");

// Fetch all work
exports.getWork = async (req, res) => {
  try {
    const work = await Work.find();
    res.status(200).json(work);
  } catch (error) {
    res.status(500).json({ error: "Error fetching work" });
  }
};

// Post a new work event
exports.createWork = async (req, res) => {
  const { title, description, date, location, imageUrl } = req.body;

  try {
    const newWork = new Work({
      title,
      description,
      date,
      location,
      imageUrl,
    });
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(500).json({ error: "Error creating work" });
  }
};

// Delete a work event
exports.deleteWork = async (req, res) => {
  try {
    await Work.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Work deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting work" });
  }
};
