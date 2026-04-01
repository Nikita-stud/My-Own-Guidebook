//ADDING NEW IMG file TO THOSE IMGS in data/img
//request package to download img from URL
npm install request

//in route add
var request = require('request');

//download image to the server:
var download = function(url, filename, callback){
  request.head(url, function(err, res, body){
    request(url).pipe(fs.createWriteStream(path.resolve(__dirname, '../data/img/'+ filename))).on('close', callback);
  });
};

router.post('/', jsonParser, function(req, res, next) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../data/portfolio.json"));
  let portfoliosArray = JSON.parse(rawdata);
  if(portfoliosArray.filter(x => x.name === req.body.name).length == 0) {
    download(req.body.url, req.body.name, function(){ //we download the img now, we save only when no img with speficied name
      console.log('done');
    });
    const newArray = portfoliosArray.concat([req.body])
    fs.writeFileSync(path.resolve(__dirname, "../data/portfolio.json"), JSON.stringify(newArray));
  }
  res.end();
});


/**
 * POST IMG REQUEST
{
  "url": "h ttps://www.google.com/images/srpr/logo3w.png",
    "name": "google.png",
    "alt": "google 1",
    "category": "anniversary",
    "header": "Google'd!",
    "description": "It's not a cake, it's Google!"
}

 */

//DELETING THESE IMG
//use unlink() method . it deletes the file
router.delete('/', jsonParser, function(req, res, next) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../data/portfolio.json"));
  let portfoliosArray = JSON.parse(rawdata);
  const newArray = portfoliosArray.filter(x => x.name !== req.body.name)
  if(newArray.length !== portfoliosArray.length) {
    fs.unlink(path.resolve(__dirname, '../data/img/'+ req.body.name), () => {
      console.log(req.body.name + " deleted!");
    });
    fs.writeFileSync(path.resolve(__dirname, "../data/portfolio.json"), JSON.stringify(newArray));
  }
  res.end();
});


/**
 * DELETE Request
 * {
    "name": "google.png"
}
 */