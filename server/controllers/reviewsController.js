const Review = require("../models/reviewModel");
const { replaceMongoIdInArray } = require("../utils/convertId");
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
