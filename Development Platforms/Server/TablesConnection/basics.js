//In reality Tables are used for different parts of the webpage
//blog posts are written users,orders are places by customers etc.
//If we dont create tables for different purposes, we store all info in every situation
//A post would have all email, password data, friendships etc
//This would add too much info to our database each time they post
//Updating of info like the email would have to happen on every post 

INT //Number
NOT NULL // Prevents empty values (title and user_id cannot be empty).
PRIMARY KEY // Ensures each record has a unique identifier (id field).
FOREIGN KEY // Maintains relationships between tables (user_id must reference a valid user).
DEFAULT // Provides automatic values when none are specified (created_at gets current timestamp).

//Instead store only reference to the user 
//Table with a foreign key
//With this table each user can have many posts but each post will belong to 1 user
CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT, //unique identifier for each post. Created by database
  title VARCHAR(200) NOT NULL, //NOT NULL means it cannot be empty
  content TEXT,
  user_id INT NOT NULL, //References which user wrote this post.
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, //Automatically records when the post was created.
  //FOREIGN KEY (user_id): Declares that the user_id column in the posts table is a foreign key.
  //REFERENCES users(id): Specifies that this foreign key points to the id column in the users table.
  //ON DELETE CASCADE: When a user is deleted, all their posts are automatically deleted too (prevents orphaned data).
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

//TO SEE RELATIONSHIPS
//press database on top, reverse engineering, next,next,blog,next,next,execute,next

//AFTER having 2 tables you can add this data into your created posts table
//users Id from users table have to go into user_id in the Values
INSERT INTO posts (title, content, user_id) VALUES
('Getting Started with Backend', 'Excited to learn about servers', 4),
('Database Fundamentals', 'Sharing insights about SQL and data modeling.', 5),
('My Second Post', 'More thoughts on web development.', 4),
('Hello World API', 'Writing about building her first API endpoint.', 6),
('Advanced Queries', 'Back with tips on optimising database queries.', 5);

SELECT * FROM posts; //Will have a table with user_id connected to the title, content post with its own id
