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
