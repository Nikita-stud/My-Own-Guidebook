/**
 * To create users we need to get the body send in the API call
 * for this we need to add this code,
 * app.use(express.json());
 * It checks if request has Content-Type: application/json
 * Then reads string dat and turns it with JSON.parse() into req.body
 */
//Now all database operations need async
app.get('/users', async (req, res) => {});

//const [result] - Gets the first item from response array , so basically "ResultSetHeader" which has the knowledge of set id for the user
//[ResultSetHeader, any] - Returns numbers of changes made in "ResultSetHeader" and "any"is just ignored
//pool.execute() -  returns an array with two items:
/*
      EXPLANATION: mysql2 talking to the database and send us data back and we can then access,
      !!!ONLY sends us id of new created user 

      ResultSetHeader contains:
      insertId - The auto-generated ID of the new row (this is what we need).
      affectedRows - How many rows were changed (should be 1 for successful insert).
      changedRows - How many rows actually changed.
    */
const [result]: [ResultSetHeader, any] = await pool.execute(
  // INSERT INTO the new user into the database
  'INSERT INTO users (username, email) VALUES (?, ?)',
  [username, email]
);
const user: User = { id: result.insertId, username, email };

//UPDATE USER
affectedRows; // How many rows were changed (1 means success, 0 means user not found).
changedRows; // How many rows actually changed.

if (result.affectedRows === 0) {
  return res.status(404).json({
    error: 'User not found',
  });
}

//ADD TESTS TO BODY DATA
// takes in a number and returns true or false
function isValidRating(rating: number): boolean {
  return rating >= 1 && rating <= 5;
}

function isValidName(name: string): boolean {
  return name && name.length >= 2 && name.length <= 100;
}

function isValidCuisineType(cuisine: string): boolean {
  return cuisine && cuisine.length >= 2 && cuisine.length <= 50;
}
//BASICALLY
if (!isValidName(name)) {
  return res.status(400).json({
    error: 'Name must be between 2 and 100 characters',
  });
}
