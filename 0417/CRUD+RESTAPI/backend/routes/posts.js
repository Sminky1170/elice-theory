const { Router } = require("express");
const Post = require("../models/post");

const router = Router();

router.get("/", async (req, res) => {
  const posts = await Post.find({});

  res.json({ posts });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  res.json({ post });
});

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

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;

  const { title, content } = req.body;

  try {
    if (!title || !content) {
      return next(new Error("제목과 내용을 입력해 주세요."));
    }
    const post = await Post.findByIdAndUpdate(
      id,
      {
        title,
        content,
      },
      {
        new: true,
      }
    );

    // const postTwo = await Post.findOneAndUpdate(
    //   {
    //     title: "안녕하세요",
    //   },
    //   {
    //     title,
    //     content,
    //   },
    //   {
    //     new: true,
    //   }
    // );

    // const postThree = await Post.updateOne(
    //   {
    //     _id: id,
    //   },
    //   {
    //     title,
    //     content,
    //   }
    // );

    console.log(postThree);

    res.json({ post });
  } catch (err) {}
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const post = await Post.deleteOne({ _id: id });

  // const post = await Post.findByOneAndDelete(id);

  console.log(post);

  res.send("OK");
});

module.exports = router;
