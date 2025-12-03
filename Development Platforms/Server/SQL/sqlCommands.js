//Adds new row of data into the table
//(username, email) specifies what fields we provide values for (must match same order of values provided)
//We did not add id since AUTO_INCREMENT will give it an id
//If you want more data send, send with ,(values)
INSERT INTO users (username, email) VALUES ('alice', 'alice@example.com');

//Update
//in users update email to ..., only update where the id is 1
//WHERE is a must, else will update all email (did not do it with me since my setting are on safe)
UPDATE users SET email = 'alice.smith@example.com' WHERE id = 1;
//Multiple updates
UPDATE users SET username = 'alice_smith', email = 'a.smith@example.com' WHERE id = 1;

//DELETE (id does not delete the id, so the next user will get 5)
DELETE FROM users WHERE id = 4;

//CASCADE DELETE 
SELECT * FROM posts WHERE user_id = 4; //check posts
DELETE FROM users WHERE id = 4; //delete those posts
SELECT * FROM posts WHERE user_id = 4; //check again

//Modify a table that exists use ALTER TABLE
//We add column created at to users, TIMESTAMP stores data
//DEFAULT CURRENT_TIMESTAMP auto sets current time in a row created
ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
//Dont allow username in users to have more than 150char and have a null value
ALTER TABLE users MODIFY COLUMN username VARCHAR(150) not null;
//Drop columns ???
ALTER TABLE users DROP COLUMN created_at;
//rename column username to user_name
ALTER TABLE users RENAME COLUMN username TO user_name

//Empty entire table
TRUNCATE TABLE users
//DELETE THE WHOLE table users
DROP TABLE users;
//Deletes database + tables
DROP DATABASE blog;


