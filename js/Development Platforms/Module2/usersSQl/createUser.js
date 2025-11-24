//POST to create user
import { ResultSetHeader } from 'mysql2';

app.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({
        error: 'Username and email are required',
      });
    }

    // INSERT INTO the new user into the database
    //const [result] takes the first element from the returned array
    /*
      Basically mysql2 talking to the database and send us data
      ResultSetHeader, any] tells TypeScript what types to expect, contains:

      insertId - The auto-generated ID of the new row (this is what we need).
      affectedRows - How many rows were changed (should be 1 for successful insert).
      changedRows - How many rows actually changed.
    */
    const [result]: [ResultSetHeader, any] = await pool.execute(
      'INSERT INTO users (username, email) VALUES (?, ?)',
      [username, email]
    );

    //We are building the response to the user
    //insertId only possible because of [ResultSetHeader, any] that got id from database
    const user: User = { id: result.insertId, username, email };
    res.status(201).json(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({
      error: 'Failed to create user',
    });
  }
});
