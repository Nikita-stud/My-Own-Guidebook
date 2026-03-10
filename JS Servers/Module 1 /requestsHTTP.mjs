//Ta make a request
http.request(); //single request

//request details could be
const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload', //what comes after google.com
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};
http.request(options, (res) => {});

//Get does not need passed in data but only the url
http.get();

http.get('http://localhost:8080/', (res) => {});

//Create new server (requires http)
const https = require('http');
http.createServer();

//TWO WAYS FOR SAME
//EXAMPLE of HTTP request:
const request = https.request(options, (res) => {
  //We make request to a website
  let responseBody = ';';

  res.on('data', (chunk) => {
    //THis loads the data bit by bit adding it to the body
    responseBody += chunk;
  });

  res.on('end', () => {
    fstat.writeFile('newFile.js', responseBody, (err) => {
      if (err) {
        throw Err;
      }
    }); //When response finished loading we create a new file
  });
});
request.end();

//EXAMPLE of HTTP get:
const url = 'google.com/upload';

const request2 = https.get(url, (res) => {
  let download = fs.createWriteStream('newFile.html'); //file we want to write to
  res.pipe(download); //put data into the file

  res.on('data', () => {
    console.log('finito');
  });
});
request2.end();
