const { Router } = require("express");
const Post = require("../models/post");

const router = Router();

router.get("/", async (req, res) => {
  const posts = await Post.find({});

  res.json({ posts });
});

router.get("/:id", (req, res) => {});

router.post("/", async (req, res, next) => {
  const { title, content } = req.body;
  try {
    if (!title || !content) {
      // throw new Error("제목과 내용을 입력해주세요!!");
      return next(new Error("제목과 내용을 입력해주세요!!"));
    }
    const post = await Post.create({
      title,
      content,
    });
    res.json({ post });
  } catch (err) {
    next(new Error(err.message));
  }
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
