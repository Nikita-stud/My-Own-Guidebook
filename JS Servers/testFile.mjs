const { createServer } = require('http');

const server = createServer((req, res) => {
  if (req.url === '/even' && req.method === 'GET') {
    let data = '';
    req.on('data', (chuck) => {
      data += chuck;
    });
    req.on('load', () => {
      const filtered = data.map((number) => {
        number % 2;
      });
      res.write(filtered);
    });
  } else {
    throw Error;
    res.end();
  }
});
server.listen(8000);
