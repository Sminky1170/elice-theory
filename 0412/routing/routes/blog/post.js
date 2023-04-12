const express = require("express");

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send("post homepage");
});

module.exports = postRouter;
