const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

// connection strings
const connectionString =
  "mongodb+srv://nitin:1234@blogwebsitenodejs.9wrlh.mongodb.net/BLOG_WEBSITE_NODEJS?retryWrites=true&w=majority";

// connection to mongoose
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    console.log("Connection for dummy text.js file sucessfully...........")
  );

// proceed to connecto to the database if doesn't exist , it will be created for us.
