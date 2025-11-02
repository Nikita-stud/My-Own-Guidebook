//1. add this to src/index.ts

import express from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

//Option 1
//To run and auto restart server run
//Changes shown in http://localhost:3000/
//tsc watch will automatically restart server
npx tsx watch src/index.ts

//Option 2
// Compile TypeScript to JS and run Node.js
//Will be compiled into dist folder and need to be compiled again
//Use for production only and not development
npx tsc
node dist/index.js

//Tip /Info
http://localhost:3000 - Our local API as we set PORT=3000
http://localhost:5432 - Our local database
https://google.com - Port 443 (hidden because it’s default)


//Reminder
//The port has to run to see the terminal console.log
//do it in postman
GET: Retrieve data from the server
POST: Send new data to the server
PUT: Replace existing data on the server (full update)
PATCH: Update part of an existing resource (partial update)
DELETE: Remove data from the server


//Explained
import express from 'express';

//Creates our Express application where we
//define routes and handle requests
const app = express();

//This is the port our server will listen on
const PORT = 3000;

// Sets up a route that listens for GET request to the root URL ('/')
//Every route handler received two arguments (req,res)
//req the request,info about incoming request
//res the response, sends data back with method lik res.json()
app.get('/', (req, res) => {

  // This sends a JSON response to the client
  // if we visit http://localhost:3000/ in browser we will see it
  //res.json just ensures all data is JSON format
  res.json({ message: 'Hello world!' }); 
});

// This starts the server and listens for incoming requests
//When server starts, it runs
app.listen(PORT, () => {
  //in back end console is visible in terminal or command port
  console.log(`Server running at http://localhost:${PORT}`);
});
