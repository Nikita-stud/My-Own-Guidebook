//PATCH allows some changes to data instead of all data 
//Harder to set up since if we only get: {"username": "newname"}, we only update the username
// Partially update a user
app.patch("/users/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const { username, email } = req.body;
    if (isNaN(userId)) {
      return res.status(400).json({
        error: "Invalid user ID",
      });
    }
    //CHanged to & from ||
    if (!username && !email) {
      return res.status(400).json({
        error: "At least one field (username or email) is required",
      });
    }

    // Build dynamic UPDATE query based on provided fields
    const fieldsToUpdate = [];
    const values = [];

    //If username is provided: add "username = ?" to the fieldsToUpdate array and the value to the values array.
    if (username) {
      fieldsToUpdate.push("username = ?"); //what we add in command
      values.push(username); //we push values too in order
    }
    //If email is provided: add "email = ?" to the fieldsToUpdate array and the value to the values array.
    if (email) {
      fieldsToUpdate.push("email = ?");
      values.push(email);
    }

    values.push(userId); // Add ID after all other values

    // Uses UPDATE SET , but only for provided fields
    const query = `UPDATE users SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;
    //Run Command and Value for database
    const [result]: [ResultSetHeader, any] = await pool.execute(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Get the updated user to return to the frontend
    const [rows] = await pool.execute(
      "SELECT id, username, email FROM users WHERE id = ?",
      [userId]
    );
    const users = rows as User[];
    const user = users[0];

    res.json(user);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      error: "Failed to update user",
    });
  }
});