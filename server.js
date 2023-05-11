const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const engRouter = require("./routes/engRouter");

app.set("view engine", "html");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/eng", engRouter);

app.get("/", (req, res) => {
  res.render("index");
});
//RO links
app.get("/cpu", (req, res) => {
  res.render("./RO/cpu.ejs");
});
app.get("/motherboard", (req, res) => {
  res.render("./RO/motherboard.ejs");
});
app.get("/gpu", (req, res) => {
  res.render("./RO/gpu.ejs");
});
app.get("/ram", (req, res) => {
  res.render("./RO/ram.ejs");
});
app.get("/storage", (req, res) => {
  res.render("./RO/hdd.ejs");
});
app.get("/psu", (req, res) => {
  res.render("./RO/psu.ejs");
});
app.get("/case", (req, res) => {
  res.render("./RO/case.ejs");
});
app.get("/guide", (req, res) => {
  res.render("./RO/guide.ejs");
});
app.listen(3000, () => {
  console.log("Server has started");
});
