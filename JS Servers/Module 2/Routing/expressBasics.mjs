//Express is a Framework on NodeJS, helps with Rest API
//https://expressjs.com/en/5x/api.html

//npm install express --save  old way
//npm install express  //modern way — saves automatically

//EXpress runs on
localhost:3000

//Instead of client->node
//1.We now have Client → node → Express/Middleware → node (Express is has many helper functions that make it easier to handle http)
npm install express 

//2. generator 
npm install express-generator -g //creating skeletons etc. download globaly

//3.Create the express populated folder because of generator myapp 
//and npm install all stuff inside then npm start
express myapp 

//FOLDER STRUCTURE
//bin = there we create server and set its port
//node_modules = contains files from our dependencies
//public = JS, images and stylesheets
//routes = even if it says router.get("/") and it is in users.js file then the endpoint is /users
//app.js = creates instance of express by var app = express();

//BASIC SETUP
import express from 'express';

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log('I work');
});


//use should be above listens!!!
//With these you can access public folder by typing
//the image name in the URL example: /img.jps
app.use(express.static('public'));

//on route /images/ we get images folder and can get images based on name
//like /images/logo.png
app.use("/images" express.static("images"))

