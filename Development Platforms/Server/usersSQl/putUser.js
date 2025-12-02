//Update a user (full replacement)
//We need send all data into body PUT request
//put call to http://localhost:3000/restaurants/16
//with all data change the 16th id item
app.put('/users/:id', async (req, res) => {
  try {
    //Id specifics of which user to update
    const userId = Number(req.params.id);
    //PUT replaces whole user, so we need all params
    const { username, email } = req.body;
    if (isNaN(userId)) {
      return res.status(400).json({
        error: 'Invalid user ID',
      });
    }
    if (!username || !email) {
      return res.status(400).json({
        error: 'Username and email are required',
      });
    }

    // Update the user in the database
    const [result]: [ResultSetHeader, any] = await pool.execute(
      'UPDATE users SET username = ?, email = ? WHERE id = ?',
      [username, email, userId]
    );

    // Check if user was found and updated
    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    //Unlike in creating User, we set id as id passed into query
    const user: User = { id: userId, username, email };
    res.json(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({
      error: 'Failed to update user',
    });
  }
});
