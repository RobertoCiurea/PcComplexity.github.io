const express = require("express");
const router = express.Router();

//ENG links
router.get("/", (req, res) => {
  res.render("./ENG/indexENG.ejs");
});

router.get("/cpu", (req, res) => {
  res.render("./ENG/cpuENG.ejs");
});
router.get("/motherboard", (req, res) => {
  res.render("./ENG/motherboardENG.ejs");
});
router.get("/gpu", (req, res) => {
  res.render("./ENG/gpuENG.ejs");
});
router.get("/ram", (req, res) => {
  res.render("./ENG/ramENG.ejs");
});
router.get("/storage", (req, res) => {
  res.render("./ENG/hddENG.ejs");
});
router.get("/psu", (req, res) => {
  res.render("./ENG/psuENG.ejs");
});
router.get("/case", (req, res) => {
  res.render("./ENG/caseENG.ejs");
});
router.get("/guide", (req, res) => {
  res.render("./ENG/guideENG.ejs");
});

module.exports = router;
