require("./db/connect");
//require("./test");
const BlogPost = require("./models/BlogPost");
const fileUpload = require("express-fileupload");

//const TestPost = require("./test");
// createing first server
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { strict } = require("assert");

const app = new express();
// after install body-parser then
app.use(fileUpload());
// app.use(bodyParser.json()); //
// app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5050;

// static file access
app.use(express.static("public"));
//forhandle file uplod

// routing for / home page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

// routing for /about page
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/about.html"));
});

// routing for /post page
app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/post.html"));
});

// routing for /contact page
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/contact.html"));
});

// routing for /create page for a new post
app.get("/create", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/create.html"));
});

// ############ Saving the Post in  the database #################

// app.post("/posts/store", (req, res) => {
//   // models create a new doc with browser data
//   BlogPost.create(req.body, (error) => {
//     if (error) {
//       console.log(`error something is wrong.......`);
//     } else {
//       console.log(`Post Created sucessfully...Good Job!`);
//     }
//     res.redirect("/");
//   });
// });
app.post("/posts/store", (req, res) => {
  console.log("come in post-store...........");
  console.log("image req.files:>>>", req.files);
  let image = req.files.image;
  console.log("image:>>>", image);
  image.mv(path.resolve(__dirname, "public/img", image.name), (error) => {
    BlogPost.create(req.body);
    res.redirect("/");
  });
});

// require the models where we define the BlogPost.js file in this file create a script and also set the table name
// and this file at TOP side

// listener server
app.listen(port, () => {
  console.log(`Server is loading on ... http://${port}/`);
});
