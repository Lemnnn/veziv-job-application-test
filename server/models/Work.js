const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String },
  link: { type: String },
  description: { type: String },
});

const Work = mongoose.model("Work", WorkSchema);
module.exports = Work;
