INNER JOIN // returns rows matched in both tables in SQL just use JOINc

//Get all posts with their authors
SELECT posts.title, posts.content, users.username
FROM posts
INNER JOIN users ON posts.user_id = users.id;

//JOIN TABLE SEARCH to find posts of specific users in another table
SELECT posts.title, posts.content, users.username, users.email  //What table and column
FROM posts //start at posts table as our main table
INNER JOIN users ON posts.user_id = users.id //Join with users table, then specify how to match rows
WHERE users.id = 4; //filter result where only posts by user 4

//Get posts with creation date and author
SELECT posts.title, posts.created_at, users.username
FROM posts
INNER JOIN users ON posts.user_id = users.id
ORDER BY posts.created_at DESC;

//Count how many posts a user has written
SELECT COUNT(*) as post_count //count (*) counts number of rows, as post_count creates a column with customn name, so it will be post_count = 10202 else would be just 10202
FROM posts
INNER JOIN users ON posts.user_id = users.id
WHERE users.id = 4;
