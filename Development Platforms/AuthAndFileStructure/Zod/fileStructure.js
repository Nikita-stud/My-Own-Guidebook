//For all Interface create a src/interfaces.ts: file
//Export all Interface when needed
export interface Animal {
  name: string;
}
export interface Dog extends Animal {
  breed: string;
}

//TYPES vs INTERFACE
//types have types.ts folders and file structure
//Interface uses extends for build on, Types use &
//Similar but used for different things I guess
type Animal = {
  name: string,
};
type Dog = Animal & {
  breed: string,
};

//MOVING FILES
//create routes folder and add in files for users, posts endpoints etc.
//so, routes/users.ts and get rid of /users in all the endpoints listeners
//change app. to routes and import router in each file
//Dont forget to import all other stuff you need to import, like the pool, etc

import { Router } from 'express'; //import function that creates routes
const router = Router(); //creates new router object
router.get('/', async (req, res) => {}); //in / will be /users when calling from main file, same method add app, just different object
export default router; //export for use in main ts file

//in main file
import userRoutes from './routes/users'; //name it whatever but import the file from the folder will all the methods with the endpoint
import postRoutes from './routes/posts';

app.use('/users', userRoutes); //all routes in userRoutes get prefixed with /users.

//VALIDATION, have it in middleware/validation.ts
//All code that checks if something exists
//because of no router.get("/", (req, res) => {...}) we need to import in each such validation
//if validation passes, continue to next handler
import { Request, Response, NextFunction } from 'express';

export function validateUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  next();
}

//In our routes folder we can add all the validations
//we add the function after the route, if multiple, we add more
import {
  validateUserId,
  validateRequiredUserData,
  validatePartialUserData,
} from "../middleware/validation";

router.put("/:id", validateUserId, validateRequiredUserData, async (req, res) => {
  const userId = Number(req.params.id);
  const { username, email } = req.body;
  const [result]: [ResultSetHeader, any] = ...
});
