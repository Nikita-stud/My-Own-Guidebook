//USE THIS METHODS TO SEND FILES INSTEAD OF STRING JOINING SINCE IT IS SAFER // Safe — works on every OS
//https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/serving-html-pages-and-static-content?resume=false&u=43268076
//To return HTML file instead of text/JSON
router.sendFile;

//automatically serves files directly to the browser without you writing a route for each one.
express.static();

//Built-in Node.js module for working with file and folder paths.
path;

//current file directory
__dirname;

//1.Export
var express = require('express');
var path = require('path'); //1.import path
var router = express.Router(); //to split routes into different file

//Without this, if your index.html links to a stylesheet The browser would get a 404 because Express doesn't serve files aut
//express.static Serves ANY file in .. (one folder up) in the folder automatically (css, images, js) |
router.use(express.static(path.join(__dirname, '..')));

router.get('/', function (req, res, next) {
  //sendFile explicitly sends ONE specific file for ONE specific route |

  res.sendFile(path.join(__dirname, '..', 'index.html')); //2. send file but join current file, go up one folder and get index.html
});

module.exports = router;

//2.Import and use
const indexRoute = require('./index');
app.use('/add', addRouter);
