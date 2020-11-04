const http = require('http');
const express = require('express');
const app = express();

app.use(express.json());

const server = http.createServer(app);

app.post('/', (req, res) => {
  if (req.body) {
    res.send(req.body);
    console.log(req.body, req.url);
  }
});

app.put('/update', (req, res) => {
  if (req.body) {
    res.send(req.body);
    console.log(req.body, req.url);
  }
});

app.delete('/delete', (req, res) => {
  if (req.body) {
    res.send(req.body);
    console.log(req.body, req.url);
  }
});

server.listen(5000);
console.log('Server is running on PORT 5000');
