//Select gets all fields from table users
//will return empty since no data yet
SELECT * FROM users;
//Will only return those params you set in to retrieve, like username here
SELECT id, username FROM users;
//will filter all fields and find users with this it
SELECT * FROM users WHERE username = 'alice_smith';
//When LIKE % is on start then anything before
SELECT * FROM users WHERE email LIKE '%@gmail.com';
//LIKE a% with anything after a, so all names starting with a
SELECT * FROM users WHERE username LIKE 'a%';
//Users with a username
SELECT * FROM users WHERE username IS NOT NULL;
//alphabetically sort usernames
SELECT * FROM users ORDER BY username;
//DESC (Z-A, 10-1) sort by id by descending
SELECT * FROM users ORDER BY id DESC;
//ASC (A-Z, 1-10) sort by email but ascending
SELECT * FROM users ORDER BY email ASC;
//only two returned
SELECT * FROM users LIMIT 2;
//ORDER BY id 
//DESC LIMIT 1 show only newest user /highest id user
SELECT * FROM users ORDER BY id DESC LIMIT 1;

//all together, find users with example.com ending email
//sort alphabetically and only show 2 results
SELECT username, email FROM users
WHERE email LIKE '%@example.com'
ORDER BY username ASC
LIMIT 2;