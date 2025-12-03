interface Post {
  id: number;
  title: string;
  content: string;
  user_id: number;
  created_at: string;
}

interface PostWithUser extends Post {
  username: string;
  email: string;
}

//Get ALL Posts with their author info through JOIN
app.get("/posts", async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT 
        posts.id,
        posts.title,
        posts.content,
        posts.user_id,
        posts.created_at,
        users.username,
        users.email
      FROM posts 
      INNER JOIN users ON posts.user_id = users.id
      ORDER BY posts.created_at DESC
    `);

    const posts = rows as PostWithUser[];
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

//Get All Posts by a Specific User, no join needed since only posts table is needed 
app.get("/users/:id/posts", async (req, res) => {
  try {
    const userId = Number(req.params.id);

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const [rows] = await pool.execute(
      `
      SELECT 
        posts.id,
        posts.title,
        posts.content,
        posts.user_id,
        posts.created_at
      FROM posts 
      WHERE posts.user_id = ?
      ORDER BY posts.created_at DESC
    `,
      [userId]
    );

    const posts = rows as Post[];
    res.json(posts);
  } catch (error) {
    console.error("Error fetching user posts:", error);
    res.status(500).json({ error: "Failed to fetch user posts" });
  }
});

//Get Posts by specific User with their author info
app.get("/users/:id/posts-with-user", async (req, res) => {
  const userId = Number(req.params.id);

  const [rows] = await pool.execute(
    `
    SELECT posts.id, posts.title, posts.content, posts.user_id, posts.created_at,
           users.username, users.email
    FROM posts 
    INNER JOIN users ON posts.user_id = users.id
    WHERE users.id = ?
  `,
    [userId]
  );

  const posts = rows as PostWithUser[];
  res.json(posts);
});

//DELETE a user (all their posts will be deleted too if their id was connected)
app.delete("/users/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const [result]: [ResultSetHeader, any] = await pool.execute(
      "DELETE FROM users WHERE id = ?",
      [userId]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});