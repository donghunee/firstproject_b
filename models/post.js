const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String },
  content: String,
  createdDate: Date,
});

module.exports = mongoose.model("post", postSchema);
