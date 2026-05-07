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

//1.INSTEAD OF POOL!!!!
//USE SEQUELIZE
express --view=ejs sequelizeApp
Cd sequelizeApp
npm install -s sequelize@6.28.0
npm install -s mysql@2.18.1
npm install -s mysql2@3.1.0

//2.in app.js we pull from sequilize package
const { Sequelize, Model, DataTypes } = require('sequelize');

initialize() //create and call function right away
async function initialize() {
connection = {
    dialect: "mysql",           // which database engine
    dialectModule: "mysql2",    // which npm driver to use
    database: "sequelizedatabase",  // database name
    username: "sequelizeUser",      // login credentials
    password: "P@ssw0rd",
    host: "localhost"               // where the DB lives
  }}

const sequelize = new Sequelize(connection); //this creates the pool



//HOW TO USE:
//"I want a database table called 'Users' with these columns"
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});
  // Instead of: INSERT INTO Users (username, birthday) VALUES ('Fedorov', '1995-03-15')
await User.create({ username: 'Fedorov', birthday: '1995-03-15' });

// sync all models with database
//"look at all the models I've defined and make sure the actual database tables match."
//{ alter: true } means "if a table exists but is different, alter it to match my model" 
//{ force: true } would drop and recreate tables 
//PUT THIS IN THE END OF ALL DEFINED MODULES
await sequelize.sync({ alter: true })

