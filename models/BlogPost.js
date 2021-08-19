const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
  title: String,
  body: String,
});

// we access the database via monogoose.model
const BlogPost = mongoose.model("Store", BlogPostSchema);
module.exports = BlogPost;
