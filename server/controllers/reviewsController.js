const Review = require("../models/reviewModel");
const User = require("../models/userModel")
const College = require("../models/collegeModel")
const { replaceMongoIdInArray } = require("../utils/convertId");
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { rating, review, email } = req.body;
    const user = await User.findOne({ email })
    console.log(user)
    const userId = user._id 
    const name = user.name
    const college = user.university

    const findTheCollege = await College.findOne({ name: college })
    const collegeId = findTheCollege._id

    const letsSave = new Review({
      userId,
      collegeId,
      rating,
      comment: review, 
      name
    })
    const isSaved = await letsSave.save();

    if (!isSaved) {
      return res.json({ success: false, message: "Something went wrong" })
    }

    res.json({ success: true, message: "Successfully added" })



  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getReviewsWithMine = async (req, res) => {
  try {
    const { email } = req.params;
    let reviews = [];

    if (email && email !== "undefined") { // Check for a valid email value
      const getUser = await User.findOne({ email });
      if (!getUser) {
        return res.status(404).json({ message: "User not found" });
      }

      const { _id } = getUser;
      const getAllReview = await Review.find();
      
      // Find user-specific review
      const getMyReview = getAllReview.find((item) => item.userId.toString() === _id.toString());
      
      // Get other users' reviews
      const getOthersReview = getAllReview.filter((item) => item.userId.toString() !== _id.toString());
      let othersReview = getOthersReview.length > 2 ? getOthersReview.slice(0, 2) : getOthersReview;
      
      // Add getMyReview only if it exists
      if (getMyReview) {
        reviews.push(getMyReview);
      }
      reviews = [...reviews, ...othersReview];
    } else {
      // Handle the case when email is not provided or is undefined
      const getAllReview = await Review.find();
      reviews = getAllReview.length > 3 ? getAllReview.slice(0, 3) : getAllReview;
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


