// models/ResearchPaper.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const researchPaperSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String }, // Optional
  collegeId: [{ type: Schema.Types.ObjectId, ref: "College", required: true }], 
});

module.exports = mongoose.model("ResearchPaper", researchPaperSchema);
