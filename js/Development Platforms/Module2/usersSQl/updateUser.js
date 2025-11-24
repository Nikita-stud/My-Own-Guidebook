// Update a user (full replacement)
app.put('/users/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);
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

    const user: User = { id: userId, username, email };
    res.json(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({
      error: 'Failed to update user',
    });
  }
});
