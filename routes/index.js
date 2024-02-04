var express = require("express");
var router = express.Router();

const messages = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages });
});

router.post("/new", (req, res, next) => {
  const { authorName, messageBody } = req.body;
  messages.push({ text: messageBody, user: authorName, added: new Date() });
  res.redirect("/");
});

module.exports = router;
