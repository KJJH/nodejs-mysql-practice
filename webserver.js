const http = require('http');  // 아래의 코드를 실행하기 위해서는 node.js에서 제공하는 'http' 모듈이 요구된다.

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\nThis is webServer');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});