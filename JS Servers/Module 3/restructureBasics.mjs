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
<script src="jquery.js"></script> //will extend /node_modules/jquery/dist/ 

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

//Now we need to enter public and add css / img and js for each page home.css etc