const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/**", function (req, res, next) {
  res.status(404);
  res.send("not found");
});

router.put("/**", function (req, res, next) {
  res.status(404);
  res.send({ 404: "not found" });
});

router.post("/**", function (req, res, next) {
  res.status(404);
  res.send({ 404: "not found" });
});

module.exports = router;
