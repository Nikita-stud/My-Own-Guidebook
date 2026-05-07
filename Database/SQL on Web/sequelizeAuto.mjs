//Code-first = model classes and back end then we create database with ORM
//Database-first, schema then generate JS models based on that
npm install sequelize-auto

//WE CREATE an instance of connection AND add models to it
//THIS IS THE RIGHT WAY AND ONLY WAY
//!!!1 = main model we add user.js model to
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

//Store the connection on the db object so other files can access it later if needed
//loads user.js, gets back a FUNCTION,calls that function, passes in the dependencies
//The result (the User model) gets stored as db.users.
db.users = require("./user.js")(sequelize, Sequelize);

//Sync all models to the database, then export the whole db object.
sequelize.sync({ alter: true})
module.exports = db

//DEPENDENCY INJECTION = passing an created instance to another file
//exports a function that waits to receive sequelize and Sequelize from whoever calls it
//2. In models/user.js
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        firstName: Sequelize.DataTypes.STRING,
        lastName: Sequelize.DataTypes.STRING,
    });
    return User
}


//3.Define relationship between models
//User.belongsTo(Role) !!!puts the roleId inside User table
//1-1 = model2.belongsTo(model1) in one and model1.hasOne(model2) in another
//1-many = model2.belongsTo(model1) and model1.hasMany(model2)
//many-many = model1.belongsToMany (model2, {through: {model3}) and
//so many to many needs a 3rd table tpo hold those keys
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        FirstName: Sequelize.DataTypes.STRING,
        LastName: Sequelize.DataTypes.STRING
    },{
        timestamps: false //else createdAt and updatedAt field will be set by default too in the table
    });
    //this is where 
    User.associate = function(models) {
        User.belongsToMany(models.Hotel, {through: models.Rate})
        User.belongsToMany(models.Room, {through: models.Reservation})
    };
    return User
}

//OTHER WAYS:
//1. Sequelize auto-creates a simple junction table with just two foreign key columns. You don't define a model for it.
Animal.belongsToMany(models.Temperament, { 
  through: 'AnimalTemperaments'  // just a table name
});

//2. option 
User.belongsToMany(models.Hotel, { 
  through: models.Rate  // an actual model
});

//many to many

  Temperament.associate = function (models) {
    Temperament.belongsToMany(models.Animal, { //temperant can belong to many animals 
      through: 'AnimalTemperaments', //since many to many, they need an extra column to connect to, in that table through temperamentID
      foreignKey: 'temperamentId' //col defines in the Animal table named temperamentId
    });
  };



//validate property, value will be integer and only between 1-5
Value: {
    type: Sequelize.DataTypes.INTEGER,
    validate: {
        min: 1,
        max: 5
    }
}
//isIn is whitelist of allowed values