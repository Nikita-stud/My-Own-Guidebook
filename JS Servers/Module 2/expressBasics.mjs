//Express is a Framework on NodeJS, helps with Rest API
//https://expressjs.com/en/5x/api.html

//Instead of client->node
//We now have Client → node → Express/Middleware → node (Express is has many helper functions that make it easier to handle http)
npm install express --save

const express = require('express')
const app = express()

npm install express-generator -g //creating skeletons etc. download globaly

express myapp //create the express in myapp folder

//EXpress runs on
localhost:3000