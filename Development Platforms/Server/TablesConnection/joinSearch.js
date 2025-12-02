INNER JOIN // returns rows matched in both tables in SQL just use JOIN

//JOIN TABLE SEARCH to find posts of specific users in another table
SELECT posts.title, posts.content, users.username, users.email
FROM posts
INNER JOIN users ON posts.user_id = users.id
WHERE users.id = 4;