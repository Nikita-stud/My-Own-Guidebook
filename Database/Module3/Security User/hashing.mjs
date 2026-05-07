//Encryption = scramble data by using cryptographic key that changes data, only with the key can it be read
//THis is a column level security, meaning we add it to passwords, id numbers, medical results etc, all that would be private info

//Hashing = one way encryption, use this to hash passwords
//will create PASSWORD2 function under functions section
SET GLOBAL log_bin_trust_function_creators = 1;
DELIMITER $
CREATE FUNCTION PASSWORD2 (pass_in varchar(50))
RETURNS varchar(50)
BEGIN
declare n_pass varchar(50);
set n_pass = CONCAT('*', UPPER(SHA1(UNHEX(SHA1(pass_in)))));
return n_pass;
END$

//in RLS file change the proceidure to take save password under hash
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_records`(_UserName VARCHAR(45), _Password VARCHAR(45))
BEGIN
  SELECT sales.UserID, sales.Country, sales.Sales, users.UserName FROM sales
  JOIN users ON users.UserID = sales.UserID
  WHERE users.UserName = _UserName AND users.Password = PASSWORD2(_Password);
END

//HASH all the passwords by updqating users table Password column
UPDATE users SET Password = PASSWORD2('Password')

