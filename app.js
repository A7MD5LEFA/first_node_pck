// const os = require("os");

// const user = os.userInfo();

// console.log(user);

// console.log(`System uptime is ${os.uptime() / 3600} hours`);

// const currentOS = {
//   name: os.type( ),
//   release: os.release(),
//   totalMe: os.totalmem(),
// };

// console.log(currentOS);

// const path = require("path");

// console.log(path.sep);

// const filePath = path.join("/content", "subfolder", "test.txt");

// console.log(filePath);

// const base = path.basename(filePath);

// console.log(base);
// const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

// console.log(absolute);

// const { readFileSync, writeFileSync } = require("fs");
// const { log } = require("util");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// console.log(first);
// console.log(second);

// writeFileSync('./content/result.txt',`here is the result file :  ${first},${second}`,{flag:'a'})

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile("./content/result-async.txt", `Here is the result : ${first}, ${second}`, (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(result);
//     });
//   });
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("welcome to our Home page");
//   }
//   if (req.url === "/about") {
//     res.end("here is our short history");
//   }
//   res.end(
//     `<h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `
//   );
// });

// server.listen(5000);

const _ = require('lodash')

const item = [1, [2, [3, [4]]]]

const newItem = _.flatMapDeep(item)

console.log(newItem);