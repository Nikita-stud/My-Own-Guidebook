//Code-first = model classes and back end then we create database with ORM
//Database-first, schema then generate JS models based on that
npm install sequelize-auto

//1. create models/index.js and user.js and add in index.js
const Sequelize = require('sequelize')
const db ={}

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

db.sequelize = sequelize
db.users = require("./user.js")(sequelize, Sequelize);
sequelize.sync({ alter: true})
module.exports = db

//DEPENDENCY INJECTION = passing an created instance to another file 
//2. In user.js
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        firstName: Sequelize.DataTypes.STRING,
        lastName: Sequelize.DataTypes.STRING,
    });
    return User
}