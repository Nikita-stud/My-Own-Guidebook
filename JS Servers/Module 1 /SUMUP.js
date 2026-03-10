const { createServer } = require('http'); //to run server
const fs = require('fs'); //to manipulate files in our folders
const howManyPizza = require('how-many-pizza'); //npm package that does stuff

createServer((req, res) => {
  switch (true) {
    case req.url.toLowerCase() === '/api/howmanypizza' && req.method === 'GET': //always lowercase
      const people = JSON.parse(fs.readFileSync('./api/peopleNumber.json')); //we read the files one by one and convert those json files into Javascript
      const perPerson = JSON.parse(
        fs.readFileSync('./api/piecesPerPerson.json'),
      );
      const pieces = JSON.parse(fs.readFileSync('./api/piecesNumber.json'));

      const result = howManyPizza(people, perPerson, pieces); //we run the npm package that takes data from 3 last fetched files of json
      res.end(JSON.stringify({ pizzas: result })); //we send back data
      break;
    case req.url.toLowerCase() === '/api/peoplenumber' && req.method === 'POST': //on post, (use postman) we can send raw data in body like 20
      let peopleData = '';

      req.on('data', (chunk) => {
        //we load the data in chunks asynchronously
        peopleData += chunk;
      });

      req.on('end', () => {
        //on end we change the file with new data send to us by the user though postman
        fs.writeFileSync('./api/peopleNumber.json', peopleData);
        res.end();
      });
      break;
    case req.url.toLowerCase() === '/api/piecesperperson' &&
      req.method === 'POST':
      let piecesData = '';

      req.on('data', (chunk) => {
        piecesData += chunk;
      });

      req.on('end', () => {
        fs.writeFileSync('./api/piecesPerPerson.json', piecesData);
        res.end();
      });
      break;
    case req.url.toLowerCase() === '/api/piecesnumber' && req.method === 'POST':
      let data = '';

      req.on('data', (chunk) => {
        data += chunk;
      });

      req.on('end', () => {
        fs.writeFileSync('./api/piecesNumber.json', data);
        res.end();
      });
      break;
    default:
      res.end(); //we end by default if mistakes
      break;
  }
}).listen(8000); //listen to all of it on localhost:8000
