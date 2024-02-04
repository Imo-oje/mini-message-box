const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("form", { title: "Add new message" });
});

module.exports = router;
