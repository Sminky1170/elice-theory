const http = require("http");
const url = require("url");
const data = require("./data.json");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const urlObj = url.parse(req.url, true).query;
  res.write(JSON.stringify(urlObj));

  //urlObj => 값을 뽑고 그 값을 DB(excel)
  res.end();
});

server.on("request", (req, res) => {
  const pathname = url.parse(req.url).pathname;

  const array = pathname.split("/");

  const username = array[array.length - 1];

  console.log(data);

  if (data[username]) {
    // 준비한 페이지
    res.write(`Hello ${data[username].nickname}`);
    res.end();
  } else {
    // error 페이지
    res.writeHead(404);
    res.end();
  }
});

server.on("request", (req, res) => {
  fs.readFile("./index.html", "utf-8", (err, data) => {
    res.end(data);
  });
});

server.listen(8080);
