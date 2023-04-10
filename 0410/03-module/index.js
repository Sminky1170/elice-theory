const fs = require("fs");

// fs.readFile("./package.json", "utf-8", (err, data) => {
//   console.log(data);
// });

const path = require("path");

const myPath = "/foo/bar/baz.txt";

console.log(path.basename(myPath), "base");
console.log(path.dirname(myPath), "dir");
console.log(path.extname(myPath), "ext");

// const moment = require("moment");

// console.log(moment().format("YY-MM-DD"));
