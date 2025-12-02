//PAGINATION = decide what page and limit of data is presented

//Returning all records can be too much for the memory
page // 1,2,3
limit //users per page (5,10,20)
/users?page=2&limit=5 //page 2 with 5 users per page, so 6-10 users 

//SQL -how many users to show from what point
LIMIT //how many rows returned 
OFFSET //how many rows skipped 
LIMIT 5 OFFSET 7 //after skipping 7 first give me 5 users

offset = (page - 1) * limit //Formula 

// Get users with pagination
//users?page=1&limit=5 gets the first 5 users (OFFSET 0, LIMIT 5).
//users?page=2&limit=5 gets users 6–10 (OFFSET 5, LIMIT 5).
//users — First 10 users (default).
//users?page=2 — Users 11–20.
//users?limit=5 — First 5 users.
//users?page=3&limit=5 — Users 11–15.
app.get("/users", async (req, res) => {
  try {
    // Get pagination parameters with defaults if not provided
    //Will return 1 page with 10 users
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    // Calculate offset
    const offset = (page - 1) * limit;

    //We turn numbers from query in URL we fetched into 
    //strings and place them securely into the request for Database
    //it goes in under "?" in Command
    const [rows] = await pool.execute(
      "SELECT id, username, email FROM users LIMIT ? OFFSET ?",
      [limit.toString(), offset.toString()]
    );
    //We say that rows should be checked in typescript as array of objects
    const users = rows as User[];

    
    res.json(users);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      error: "Failed to fetch users",
    });
  }
});