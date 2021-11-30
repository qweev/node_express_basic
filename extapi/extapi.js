var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("api base");
});

router.get("/about", function (req, res) {
  res.send("About path");
});

module.exports = router;
