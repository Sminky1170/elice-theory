const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const products = [
  { id: "ec1", name: "마우스" },
  { id: "ec2", name: "키보드" },
  { id: "ec3", name: "모니터" },
];

app.get("/", (req, res) => {
  res.send("hello rest-api");
});

app.get("/product", (req, res) => {
  console.log(req.body);
  res.send(products);
});

app.get("/product/:id", (req, res) => {
  const product = products.filter((el) => el.id === req.params.id);

  if (product.length < 1) {
    throw new Error("자료 없음");
  }

  res.send(product);
});

app.post("/product", (req, res) => {
  const { id, name } = req.body;

  products.push({ id, name });

  res.send("잘 생성됨!!");
});

app.put("/product/:id", (req, res) => {
  const id = req.params.id;

  const { name } = req.body;

  const index = products.findIndex((el) => el.id === id);

  if (index < 0) {
    throw new Error("자료 없음");
  }

  products[index].name = name;

  res.send("잘 수정됨!!");
});

app.delete("/product/:id", (req, res) => {
  const id = req.params.id;

  const index = products.findIndex((el) => el.id === id);

  if (index < 0) {
    throw new Error("자료 없음");
  }

  products.splice(index, 1);

  res.send("잘 삭제됨!!");
});

app.use((error, req, res, next) => {
  res.send(error.message);
});

app.listen(4000);
