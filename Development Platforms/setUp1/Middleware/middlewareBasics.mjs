//When making request ot api
// app.use runs and then searches for the next
// .use and runs it until no more,
//only then runs app.get etc.
import express, { Request, Response, NextFunction } from 'express';
const app = express();

// app.use() runs middleware
//example of how you can write req, res, next
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  //next tells to move to next middleware
  //if  no next added then next will call a route
  //like app.get("/")
  next();
});

// express.json turns client data into JSON data
//now available in req.body. Without req.body will be undefined
//This middleware runs next automatically
app.use(express.json());

//res.on("finish") runs after code above it has run
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`Finished`);
  });
  next();
});

/*
  Middleware Function 
*/
//You have to write in import and in the function the request etc
//Since it is not being passed in automatically
function logRequest(req: Request, res: Response, next: n) {
  console.log('Hello');
  next();
}
//You can call them on certain endpoints
//When /user/ or /user? etc will run then the function too
app.use('/user', logRequest());

//Else add in requests (Can add multiple functions just by , function ,)
app.get('/user', logRequest, (req, res) => {
  res.json({ user: [] });
});

/*
Headers
*/

//Found in network tab after request to api
//Request network tab, headers section
//-Request header send by browser
//-Response Headers send by server

User - Agent; //Browser operating system
Accept; //Type response client wants
Content - Type; // Type data being sent
Authorization; // Authentication tokens
Origin; // Where request came from (Important for CORS)

//When the word has - then use []
const userAgent = req.headers['user-agent'];
const authorization = req.headers.authorization;
