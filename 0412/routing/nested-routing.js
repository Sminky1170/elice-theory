const express = require("express");

const app = express();

const blogRouter = express.Router();

blogRouter.get("/", (req, res) => {
  res.send("blog homepage");
});

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send("post homepage");
});

blogRouter.use("/post", postRouter);

app.use("/blog", blogRouter);

app.listen(4000);
