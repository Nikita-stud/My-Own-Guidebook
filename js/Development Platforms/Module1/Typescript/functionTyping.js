// Syntax for typing a function in TypeScript
function functionName(parameter: type): returnType {
  // function body
}

// Function that returns a user object
//:User the definition is that is being returned,
// could have been a number or interface... with rules
//if no return just :void
// if you want multiple types of returns use |

function getUserById(id: number): User | null {
  return {
    id: id,
    name: 'Test User',
    email: 'test@example.com',
    createdAt: new Date(),
  };
}

// Type alias - give a name to a type
type UserID = number;
type Email = string;

// Union - can be either type
type ID = string | number;

// Using them
let userId: UserID = 123;
let email: Email = 'user@example.com';
let id: ID = 'abc123'; // Can be string
let id2: ID = 456; // Or number

//ASYNC AND AWAIT FUNCTION TYPE EXAMPLE
//ASYNC always return a Promise and what type
async function fetchUser(id: number): Promise<User> {
  // Simulate database call (pseudo code)
  const user = await database.getUser(id);
  return user;
}
