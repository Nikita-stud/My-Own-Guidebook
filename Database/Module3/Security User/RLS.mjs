//RLS = Row level security, controls which rows a user can see
//instead of writeing WHERE username = "jon", one mistake could lead to gaining access to whole table
//1. Basic setup — Two tables: users and sales. Sales rows are linked to users via UserID
CREATE DATABASE retail;

CREATE TABLE retail.users (
    UserID VARCHAR(36) NOT NULL  //THIS has no AUTO_INCREMENT because of GUID   
    UserName VARCHAR(45) NULL, //This is where we assign the users allowed to the row
    Password VARCHAR(45) NULL,
    PRIMARY KEY (UserID) 
);

CREATE TABLE retail.sales(
    SalesID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Country VARCHAR(100),
    Sales INT
);

//2.GUID = globally unique identifier, is a 128 bit generated for uniqueness like. "906a47b1-27c1-11ee-a5a7-244bfe9765c8"
//SAVE In stored procedure
// Instead of predictable IDs like 1, 2, 3 (which someone could guess), each user gets a UUID like 906a47b1-27c1-11ee-a5a7-244bfe9765c8. A BEFORE INSERT trigger generates this automatically so the application doesn't need to handle it.
DELIMITER $$
USE `retail`$$
CREATE DEFINER=`root`@`localhost` TRIGGER `users_BEFORE_INSERT` BEFORE INSERT ON `users` FOR EACH ROW BEGIN
SET NEW.UserID := uuid();
END$$
DELIMITER ; 


//3. THis is where we return values for a specific user only
//we would get both tables, but without the password
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_records`(_UserName VARCHAR(45), _Password VARCHAR(45))
BEGIN
SELECT sales.UserID, sales.Country, sales.Sales, users.UserName FROM sales
JOIN users on users.UserID = sales.UserID
WHERE users.UserName = _UserName and users.Password = _Password;
END

//4.call 4 to get the row
CALL sp_get_records(`Fred`, "Passwort")
