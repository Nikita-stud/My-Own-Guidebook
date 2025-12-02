//CREATE USER, return object of created user and
//show the created user to the user in response
import { ResultSetHeader } from 'mysql2';

app.post('/users', async (req, res) => {
  try {
    //Extract username and email from the incoming JSON body.
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({
        error: 'Username and email are required',
      });
    }
    const [result]: [ResultSetHeader, any] = await pool.execute(
      // INSERT INTO the new user into the database
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
