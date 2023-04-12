const express = require("express");
const postRouter = require("./post");

const blogRouter = express.Router();

blogRouter.get("/", (req, res) => {
  res.send("blog homepage");
});

blogRouter.use("/post", postRouter);

module.exports = blogRouter;
