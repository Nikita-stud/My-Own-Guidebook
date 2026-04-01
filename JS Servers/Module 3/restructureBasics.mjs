//Node can not use Bootstrap etc
//so if we have a /lib folder with bootstrap, jquery code etc
//rather get rid of it and download all the frameworks
//use npm i bootstrap etc and add in tge index file the normal links

<link rel="stylesheet" href="css/bootstrap.min.css"/> //CSS of Bootstrap
<script src="js/bootstrap.bundle.min.js"></script> //Interactive components 
<script src="jquery.js"></script>
<script src="typed.js"></script>

//If I send back files from Express, express needs to have a link to the files in your code
//It will look for them after reading links above from index.ejs and ask for bootstrap etc from app.js
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static(__dirname + '/node_modules/typed.js/lib'));

//add them to scripts to call for express 
<script src="js/bootstrap.bundle.min.js"></script>
2 //will extend /node_modules/jquery/dist/ 

//partials should be in views/partials/ like navbar.ejs
//they are added like this in the index.ejs
<%- include('./partials/recommendations.ejs') %>
<%- include('./partials/portfolio.ejs') %>
<%- include('./partials/contact.ejs') %>

//Dont forget to tell express where to render the files (look for them) 
//It will look inside the views folder on .render your dont need to write ./views anymore 
//Tell also to render files as EJS 
//(views and view engine is express names of what to do)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//routes folder should have endpoints (is not in views)
///route/about.js etc
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home'); // so it will render /views/home.ejs
});

module.exports = router;

//views folder should have "views", the layout code for each page created in routes so home.ejs etc
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Portfolio</title>
        <%- include('./partials/head.ejs') %>
      </head>
    <body class="position-relative" data-bs-spy="scroll">
      <%- include('./partials/navbar.ejs') %>
      <div data-spy="scroll" data-target="#navbar" data-offset="0">
        <%- include('./partials/home.ejs') %>
      </div>
      <%- include('./partials/scripts.ejs') %>
    </body>
</html>

//In app.js you import all the exported routes (routes above app = express()) rest below 
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var aboutRouter = require('./routes/about');
var servicesRouter = require('./routes/services');

app.use('/', indexRouter);
app.use('/home', homeRouter); //now all the routes will start with /home/ in router.get("/")
app.use('/about', aboutRouter);
app.use('/services', servicesRouter);

//Now we need to enter public and add css
//The css shoould be in css/home <-folder of the page
//css/about/navbar.css something like
.about a {
    color: #000;
    display: inline-block;
    height: 62px;
    width: 62px;
    font-size: 30px;
    border-radius: 50%;
    border: 2px solid #d4d4d4;
    line-height: 60px;
    text-align: center;
}

//Connect the styles to ech ejs page
    <link rel="stylesheet" href="../font/bootstrap-icons.css" />
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link href="../css/about/navbar.css" rel="stylesheet" />
    <link href="../css/about/icons.css" rel="stylesheet" />


//JSON should be in data folder same level as public and views
//(GET REQUEST)All data has no access to Node, so we need to send it to the front end
var express = require('express');
var router = express.Router();
const fs = require("fs")
const path = require("path")

router.get('/', function(req, res, next) {
  let data = fs.readFileSync(path.resolve(__dirname, "../data/introductionArray.json"));
  res.render('home', { array: JSON.parse(data)});
});

module.exports = router;

//TypedJS works now when pass a script to index.esj or whatever file
  <script>
      var typed = new Typed(".aboutMe", {
        strings: <%- JSON.stringify(array) %> ,
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });
  </script>

//JSON should be in data folder same level as public and views
//(POST REQUEST)in routes file of the page, get the body parsed in
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.post('/', jsonParser, function(req, res, next) {
  let rawdata = fs.readFileSync(path.resolve(__dirname, "../data/introductionArray.json")); //we read the JSON file we want to save in
  let array = JSON.parse(rawdata); //we parse in the date
  const newArray = array.concat([req.body.newText]) //.concat() does not mutate the original array .newText is the value sent in the POST
  fs.writeFileSync(path.resolve(__dirname, "../data/introductionArray.json"), JSON.stringify(newArray)); //Converts newArray back to a JSON string and overwrites the file with it
  res.end(); //Sends an empty response back to the client 200
});

/**
 * WE WOULD SEND THIS IN POSTMAN
{
    "newText": "value"
}
 */
//same for delete, read file, make it js and then filter, make new file
router.delete('/', (req, res, next) => {
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, '../data/introductionArray.json'),
  );
  let array = JSON.parse(rawdata);

  const newArray = array.filter((text) => text !== req.body.deletedText); //the value text your parse in the body to delete 
  fs.writeFileSync(
    path.resolve(__dirname, '../data/introductionArray.json'),
    JSON.stringify(newArray),
  );
  res.end();
});