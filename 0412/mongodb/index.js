const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");

const app = express();

app.get("/", (req, res) => {
  res.send("hello rest-api");
});

app.get("/product", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

app.get("/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

app.post("/product", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send("잘 생성됨!!");
});

app.put("/product/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.send("잘 수정됨!!");
});

app.delete("/product/:id", async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.send("잘 삭제됨!!");
});

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("connect success"));

app.listen(4000);
