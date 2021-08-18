// createing first server
const express = require("express");

const path = require("path");

const app = new express();

const port = process.env.PORT || 5050;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/about.html"));
});

app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/post.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/contact.html"));
});

app.get("/create", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/create.html"));
});

app.post("/post/store", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is loading on ... http://${port}/`);
});
