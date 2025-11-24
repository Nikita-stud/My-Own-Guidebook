interface User {
  id: number;
  username: string;
  email: string;
}

// Get all users from the database
app.get('/users', async (req, res) => {
  try {
    //pool.execute() runs the sql command of getting everything from users table
    //execute runs only because of created pool 
    //we await and save it in array named rows
    const [rows] = await pool.execute('SELECT * FROM users');
    //we let data go through Users typescript to check data 
    const users = rows as User[];
    // Return the users array to the frontend
    res.json(users);
    
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({
      error: 'Failed to fetch users',
    });
  }
});


/*
sending single data on id data 
Dangerous !!! SQL injection.
// DANGEROUS - Don't do this!
const userId = req.params.id;
const query = `SELECT * FROM users WHERE id = ${userId}`;
*/
// SAFE - Always do this!
//the ? is the placeholder for id, then we add userId as array
const userId = req.params.id;
const [users] = await pool.execute("SELECT * FROM users WHERE id = ?", [
  userId,
]); //response:  1; DROP TABLE users and thus safe

//FULL CODE FETCHING SINGLE USER
// Get single user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    if (isNaN(userId)) {
      return res.status(400).json({
        error: "Invalid user ID",
      });
    }

    // This is like: SELECT * FROM users WHERE id = 1
    const [rows] = await pool.execute(
      "SELECT id, username, email FROM users WHERE id = ?",
      [userId]
    );
    const users = rows as User[]; // check with Typescript
    //=== 0 because array is always returned
    if (users.length === 0) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Extract the single user (TypeScript knows this is User type)
    const user = users[0];
    res.json(user); // Return single User object
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      error: "Failed to fetch user",
    });
  }
});

/*REMINDER
200: Success — returns user object, e.g. { id: 2, username: "bob", email: "bob@example.com" }.
400: Bad request — returns { error: "Invalid user ID" }.
404: Not found — returns { error: "User not found" }.
500: Server error — returns { error: "Failed to fetch user" }.
*/