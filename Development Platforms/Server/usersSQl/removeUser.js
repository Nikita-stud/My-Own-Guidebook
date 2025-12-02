// Delete a user, no need for json response back to user instead of 204 code
app.delete('/users/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);
    if (isNaN(userId)) {
      return res.status(400).json({
        error: 'Invalid user ID',
      });
    }

    // Delete the user from the database
    const [result]: [ResultSetHeader, any] = await pool.execute(
      'DELETE FROM users WHERE id = ?',
      [userId]
    );

    //How many rows were deleted (0 means user not found, 1 means success).
    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    // Return 204 No Content - successful deletion with no response body
    res.status(204).send();
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({
      error: 'Failed to delete user',
    });
  }
});
