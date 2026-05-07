//masking data = hidding parts of it, ab*******@gmail.com

//SUBSTR("The string",1,4) AS Result = start and end of of a sting 
//this will show "The"

//CHAR_LENGTH("The string") AS Result = find how many char there are 
//this will show 10

//POSITION("@" IN "testingemail@no-email.co.za") = find position of @ in string 
//this will show 10

//to hide email in table where we have
//function!!!!
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


//change the RLS proceidure to after hashing
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_records`(_UserName VARCHAR(45), _Password VARCHAR(45))
BEGIN
SELECT sales.userId, sales.country, sales.sales, users.UserName, mask_email(users.emailaddress) FROM sales
JOIN users on users.userId = sales.userId
WHERE users.UserName = _UserName and users.Password = PASSWORD2(_Password);
END