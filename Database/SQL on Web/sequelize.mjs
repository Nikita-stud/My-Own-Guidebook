//ORM= Object relational mapping/libraries that implement their techniques
//one such library is SEQUELIZE for NodeJS
//PROS: no need for SQL knowledge, MVC pattern, one data model
//CONS: all team members must learn it, only good for basic queries

//STEP 1.
//create a new user and not root user for SQL Workbench (database access)
//Administration-> Users and Privileges -> Add Account ->
//On login page the % is allow login from any host for this user
//Go to Administrative Roles and click DBA (All rights)

//Step 2. then go back to Users and Privileges and schema privilages and add  entry, select the database
CREATE DATABASE sequelizedatabase

//Step3. give access in Object Rights section below

//Step 4. Test by closing SQL workbench then opening it again, then clicking on add new connection
//write username you created for the new user and test connection.

//1.NOW create new Express app to test
express --view=ejs sequelizeApp
Cd sequelizeApp
npm install -s sequelize@6.28.0
npm install -s mysql@2.18.1
npm install -s mysql2@3.1.0

//2.in app.js 
const { Sequelize, Model, DataTypes } = require('sequelize');

initialize()
async function initialize() {
connection = {
    dialect: "mysql",
    dialectModel: "mysql2",
    database: "sequelizedatabase",
    username: "sequelizeUser",
    password: "P@ssw0rd",
    host: "localhost"
  }

  // connect to db
  const sequelize = new Sequelize(connection);

  // init models and add them to the exported db object
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  });

  // sync all models with database
  await sequelize.sync({ alter: true });
}

//shows something like:
/**
 * 
 * Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Users' AND TABLE_SCHEMA = 'sequelizedatabase'
Executing (default): CREATE TABLE IF NOT EXISTS `Users` (`id` INTEGER NOT NULL auto_increment , `username` VARCHAR(255), `birthday` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Users` FROM `sequelizedatabase`
 * 
 * 
 */

//OBS!!!! The table will be populated with columns
//username and birthday fields,id, createdAt, and updatedAt

