//MySQL is database that stores data and uses SQL to manage it
//MySQL Workbench, since SQL does not have a workbench, we can only run commands, browse,edit,create and modify structures
//We need to download both

//structure 
// - database is where stuff is saved
// - table is where we store our data in cols and rows
// - columns is where the id ,username etc is saved from top to bottom
// - rows is where data is stored in each col from left to right 


//!!! mysql.server start to start my sql afte those steps

/*
    1.Terminal enter: brew --version
    If no version download it on their website
    2. brew update
    3. Install MYSQL: brew install mysql.
    4. Start: brew services: start mysql
    5. Create security: mysql_secure_installation
    6. no, then password of your choice 
    7. anonymous users remove yes, Disallow root login remotely?  yes.
    Reload privileges table now?  yes.
    8.Install MySQL Workbench: brew install --cask mysqlworkbench.
  
*/

//Schemas panel- (your databases)
//Query editor- (where you write SQL)
//Output panel- (query results and messages)

//Refresh the link tab to see database, rightclick 
//Table - has rows,cols, this is where we store data
//Row = one item
//Col = one piece of info about that item
//Field - one piece of info I want to store
//Data types - tells database what info each field can store

//!!! SUM UP
INT //whole number
FLOAT // decimal number
VARCHAR(n) //text with n amount of characters
TEXT //Long text
BOOLEAN 
DATE //year-month-day
DATETIME // 2024-11-10 20:20:00
TIMESTAMP //Same as datetime but auto updates

CREATE DATABASE blog; //1.Press lightning and create a database called blog
USE blog; //2.Switch to that database
SHOW DATABASES; //Check if database was created
SHOW TABLES; //To see created tables
DESCRIBE users; //See structure of table users
SELECT * FROM users; //see all data in users table


//Create user table to store info
CREATE TABLE users (
  //id is field name, INT stores whole value, 
  // PRI is same as PRIMARY making it unique for identifying
  //AUTO_INCREMENT is assigning next available number through MySQL
  id INT PRIMARY KEY AUTO_INCREMENT,
  //username field with text, max 200 letters
  username VARCHAR(100),
  //email field wit text, max 255letters
  email VARCHAR(255)
);

NOT NULL // Prevents empty values (title and user_id cannot be empty).
PRIMARY KEY // Ensures each record has a unique identifier (id field).
FOREIGN KEY // Maintains relationships between tables (user_id must reference a valid user).
DEFAULT // Provides automatic values when none are specified (created_at gets current timestamp).

//Schema = structure of my database, id int, username varch etc
//-- to // basically but in SQL

//EXPORT DATABASE BY
//click server top, data export, select database to explore
//export to your own location as sql file, select both checkboxes