const express = require("express");
const blogRouter = require("./routes/blog");

const app = express();

app.use("/blog", blogRouter);

app.listen(4000);
