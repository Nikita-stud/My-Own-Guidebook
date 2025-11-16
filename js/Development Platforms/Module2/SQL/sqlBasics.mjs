//MySQL is database that stores data and uses SQL to manage it
//MySQL Workbench, since SQL does not have a workbench, we can only run commands, browse,edit,create and modify structures
//We need to download both

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

CREATE DATABASE blog; //1.Press lightning and create a database called blog
USE blog; //2.Switch to that database
SHOW DATABASES; //Check if database was created

//Refresh the link tab to see database, rightclick 
//Table - has rows,cols, this is where we store data
//Row = one item
//Col = one piece of info about that item
//Field - one piece of info I want to store
//Data types - tells database what info each field can store

INT //whole number
VARCHAR //text

//Create user table to store info
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100),
  email VARCHAR(255)
);

SHOW TABLES; //To see created tables
DESCRIBE users; //See structure of table users