const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, World!</h1>');
});

// const server = http.createServer(function (request, response) {
//   response.writeHead(200, {
//     'Content-Type': 'text/html; charset=utf-8'
//   });
//   const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//   myReadStream.pipe(response);
// });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});