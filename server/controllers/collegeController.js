const College = require("../models/collegeModel");
const researchPaperModel = require("../models/researchPaperModel");
const reviewModel = require("../models/reviewModel");

exports.getColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCollegeById = async (req, res) => {
  try {
    const { id } = req.params;
    const college = await College.findById(id)
      .populate({
        path: "reviewIds",
        model: reviewModel,
      })
      .populate({
        path: "researchPaperIds",
        model: researchPaperModel,
      });

    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }

    // Return the college data if found
    res.status(200).json(college);
  } catch (error) {
    console.error("Error fetching college:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
