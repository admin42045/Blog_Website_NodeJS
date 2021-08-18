const connectionString =
  "mongodb+srv://nitin:1234@blogwebsitenodejs.9wrlh.mongodb.net/BLOG_WEBSITE_NODEJS?retryWrites=true&w=majority";

const mongoose = require("mongoose");

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection sucessfuly......");
  });
