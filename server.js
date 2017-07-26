const http = require('http');
const templates = require('./index.js');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    message: null,
    status: 200,
    _links: templates.list(1),
  }));
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
