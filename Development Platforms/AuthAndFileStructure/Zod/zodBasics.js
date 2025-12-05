//schema library is easy and is great for validations
//1.Download Zod for Typescript
npm install zod

//2. in middleware/user-validation.ts or schemas/
import { z } from 'zod';

//object,defines schema with properties we want to validate, (NOT CHECK EMAIL, just that both name and email are provided)
//we validate username and email, username must be a string, min 2 char, max 50, with custom error messages
const requiredUserDataSchema = z.object({
  username: z
    .string()
    .min(2, 'Username must be at least 2 characters')
    .max(50, 'Username must not exceed 50 characters')
    .optional(), //to tell that that this field is optional
  email: z.email('Email must be a valid email'),
});

/**
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  } 
 */
//Checks that id is only a number, same as isNaN(userId)
const userIdSchema = z.object({
  id: z.string().regex(/^\d+$/, 'ID must be a positive number'),
});

//3.Check code , write it then run
//npx tsx src/middleware/user-validation.ts
//npx = run package without installing it
//tsx = execute typescript file

const user = {
  //This is usually req.body
  username: 'john123',
  email: 'john@test.com',
};
const result = requiredUserDataSchema.safeParse(user); //safeParse(): Returns a result object with success/error information.
console.log(result);

//4.Add those into validations
import { z } from 'zod';

export function validateRequiredUserData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //INSTEAD OF:
  // const { username, email } = req.body;
  // if (!username || !email) {
  //   return res.status(400).json({ error: 'Username and email are required' });
  // }

  const result = requiredUserDataSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: 'Validation failed',
      details: result.error.issues.map((issue) => issue.message), //We extract only the error message from whole data array of issues
    });
  }
  next(); //Continues to the route handler if validation passes.
}
