//Partials = components like navbar that will be reused on all pages

//DYNAMIC FILES: for .ejs files
//1.Tells Express when I call res.render(), use EJS to process the template"
app.set('view engine', 'ejs');

//2.Tells Express "look for template files inside the views/ folder"
app.set('views', path.join(__dirname, './views'));

//3.When I call, it will go into views/index.ejs
res.render('index');

//STATIC FILES: CSS,JS and Images
var path = require('path');
router.use(express.static(path.join(__dirname, 'public')));

//EXAMPLE all together:
var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs'); // "I'll use EJS"
app.set('views', path.join(__dirname, 'views')); //DYNAMIC "templates are in views/ folder"
app.use(express.static(path.join(__dirname, 'public'))); //STATIC "serve public/ folder files automatically"

//looks in views/ and finds index.ejs because of line 23,24
app.get('/', (req, res) => {
  res.render('index');
});




//FOR LAYOUT AND RENDING BASED ON PATH

//views/layout/index.ejs 
//there the whole layout would be and
<!doctype html>
<html lang="en">
  <head>
    <title>Hello, world!</title>
  </head>
  <body>
    <%- include('../partial/navbar') %>
    <%- include('../partial/carousel') %>
    <%- include('../partial/button-group') %>
    <%- include('../partial/toast') %>
    <%- include('../partial/scripts') %>
  </body>
</html>

//in the app we set views as main folder but when we call index we go inside the layout
app.get('/', (req, res) => {
  res.render('layout/index');
});