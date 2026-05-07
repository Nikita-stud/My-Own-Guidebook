//1 create a unique GUID id for each user
DELIMITER $$
USE `retail`$$
CREATE DEFINER=`root`@`localhost` TRIGGER `users_BEFORE_INSERT` BEFORE INSERT ON `users` FOR EACH ROW BEGIN
SET NEW.UserID := uuid();
END$$
DELIMITER ; 

//2 save the function to hash passwords save as function
SET GLOBAL log_bin_trust_function_creators = 1;
DELIMITER $
CREATE FUNCTION PASSWORD2 (pass_in varchar(50))
RETURNS varchar(50)
BEGIN
declare n_pass varchar(50);
set n_pass = CONCAT('*', UPPER(SHA1(UNHEX(SHA1(pass_in)))));
return n_pass;
END$

//3 mask the email save as function
SET GLOBAL log_bin_trust_function_creators = 1;
DELIMITER $$
CREATE FUNCTION mask_email (email_in varchar(50))
RETURNS varchar(50) CHARSET utf8mb4
BEGIN
DECLARE endString int;
DECLARE firstChar VARCHAR(1);
DECLARE charBeforeAt VARCHAR(1);
DECLARE firstCharAfterAt VARCHAR(1);
DECLARE lastChars VARCHAR(4);
DECLARE test VARCHAR(100);
SET firstChar = SUBSTR(email_in, 1,1);
SET charBeforeAt = SUBSTR(email_in, POSITION("@" IN email_in) - 1, 1);
SET firstCharAfterAt = SUBSTR(email_in, POSITION("@" IN email_in) + 1,1);
SET lastChars = SUBSTR(email_in, CHAR_LENGTH(email_in)-2, 5);
RETURN CONCAT(firstChar, REPEAT("*", CHAR_LENGTH("dummy")), charBeforeAt, "@", firstCharAfterAt, REPEAT("*", CHAR_LENGTH("dummy")), lastChars);
END$$
DELIMITER ;

//4. save proceidure to use userName and password on call to get data related to that user 
//call it by CALL sp_get_records('Fred', 'Password');
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_records`(_UserName VARCHAR(45), _Password VARCHAR(45))
BEGIN
SELECT sales.userId, sales.country, sales.sales, users.UserName, mask_email(users.emailaddress) FROM sales
JOIN users on users.userId = sales.userId
WHERE users.UserName = _UserName and users.Password = PASSWORD2(_Password);
END