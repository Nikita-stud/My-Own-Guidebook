//SECURITY and USERS:
//With sequelize we connect to database and not the server itself.
//thus we need a way to register them
//caching_sha2_password = hashes the password!!!! but the database does it auto so you can get rid of the WITH and cachet
CREATE USER 'jon'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'password';

//to change login data
ALTER USER 'jon'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'NewPassworD'

//to give access to specific database
//GRANT <PERMISSION_NAME> ON <DBObjectName> TO <UserName>;
//GRANT ALL PRIVILEGES ON database_name.* TO 'jon'@'localhost';
GRANT ALL PRIVILEGES ON database_name.* TO 'jon'@'localhost';
GRANT SELECT ON Students TO 'jon'@'localhost';
GRANT SELECT ON Students TO 'NewUserName'@'%'; ////to create a user that can lof in from any host/IP address use %

//inside <PERMISSION_NAME> can be either
SELECT // Grants the user the ability to perform SELECT operations on the table.
INSERT // Grants the user the ability to perform INSERT operations on the table.
UPDATE // Grants the user the ability to perform UPDATE operations on the table.
DELETE // Grants the user the ability to perform DELETE operations on the table.
ALTER // Grants the user the ability to change the table structure.
REFERENCES // Grants the user the ability to create foreign key constraints (for example, to create relationships).
CONTROL // Grants the user SELECT, INSERT, UPDATE, DELETE, and REFERENCES permissions on the table.

//Granding permission is annoying an prone to error, thus we user role command
//Create a role then its permission and the you can add users to the role
CREATE ROLE dbrole
GRANT SELECT ON Students TO dbrole
GRANT 'dbrole' TO NewUserName
SET DEFAULT ROLE 'dbrole' TO NewUserName //!!! THIS ACTIVATES THE ROLE you set, ONLY then will it work

//THIS is another way to do it, it will activate all roles on login because of PERSIST keyword. it will save it in sql config 
SET @PERSIST.activate_all_roles_on_login := 'ON'
