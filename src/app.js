const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;

      // Write code here to calculate power of a number
      if(value1 <= 0) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("The operation cannot be performed");
      } else if(!value1 || !value2) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("The operation cannot be performed");
      } else {
        const answer = Math.pow(value1, value2);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("The result is " + answer);
      }
    });
    }
});

module.exports = server;
      
