// Create web server and listen on port 8000
// Create a server that responds to a request on the path /comments with the string "Comments page" and a status code of 200

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Comments page');
}).listen(8000);