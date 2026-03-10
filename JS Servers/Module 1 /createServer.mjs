var http = require('http');

//req gives info from client
//res gives info back to client
http
  .createServer((req, res) => {
    res.write('Hello World!'); //Will show on localhost page
    res.end();
  })
  .listen(8080); //all local applications will have http://localhost so we only specify the port number

//different localhost endpoint (file pathname)
var { createServer } = require('http');
var secret = require('./data/secretNumbers'); //we access a file

createServer((req, res) => {
  if (req.url === '/api/secret') {
    res.write(secret.toString());
  } else {
    res.write('Hello World!');
  }
  res.end();
}).listen(8080);

//ONE way of checking for method and delivering back newest data
if (req.url === '/api/secret' && req.method == 'GET') {
  let rawdata = fs.readFileSync('./data/secretNumbers.json');
  let secret = JSON.parse(rawdata);
  res.write(secret.toString());
}

//https://learning.noroff.no/mod/book/view.php?id=25820&chapterid=115630#mod_book-chapter
