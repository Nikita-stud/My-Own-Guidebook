// Since you're using Sequelize, you're working with a relational database
//0. IN env have the right data
ADMIN_USERNAME = "ProjectAdmin"
ADMIN_PASSWORD = "2202"
DATABASE_NAME = "projectdatabase"
DIALECT = "mysql"
DIALECTMODEL = "mysql2"
PORT = "3000"
HOST = "localhost"

//1. NOW WE CAN HAVE models/index.js model look like
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
require('dotenv').config();

const connection = {
  dialect: process.env.DIALECT,
  dialectModel: process.env.DIALECTMODEL,
  database: process.env.DATABASE_NAME,
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
  host: process.env.HOST,
};
const sequelize = new Sequelize(connection);

const db = {};
db.sequelize = sequelize;
//this code adds all files to database models that will be added
fs.readdirSync(__dirname) //reads all filenames in current directory
  .filter((file) => {
    //keeps only files that are not . files, is not the current file itself and only includes .js files
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    //for each remaining file it imports the file with function and calls it immediately
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model; //makes info from called function accessible elsewhere
    console.log(db);
  });
  //this runs assosiations in models
  Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;

//2. THIS IS CALLED ORM
// All other models like models/user.js will look like
//they are all called at start of the app in the index.js
//that is the blueprint for future requests
//!!!(It is a BLUEPRINT of how the data should be stored when a request comes to db.User)
//!!!you make 1 model for 1 table of defined structure
//id is added automatically as primary key
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'User', //creates table called Users (also what is later called db.User)
    {
      FirstName: Sequelize.DataTypes.STRING,
      LastName: Sequelize.DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );
  return User;
};

//3. add the db to app.js
//this will create all tables from model if (force false) = if they dont exist

var db = require('./models');
db.sequelize.sync({ force: false });

//4. Now that we have all the models, we need to specify relationship between them
//now the models will look like:
//Species,Temperament,Size and Adoption will be added to this table!!!!
module.exports = (sequelize, Sequelize) => {
  const Animal = sequelize.define(
    'Animal',
    {
      Name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      Birthday: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
  Animal.associate = function (models) {
    Animal.belongTo(models.Species);
    Animal.belongsToMany(models.Temperament, {
      through: models.AnimalTemperament,
    });
    Animal.belongTo(models.Size);
    Animal.hasOne(models.Adoption);
  };
  return Animal;
};


//6.This will create ALL the table (with no data yet in the sql workbench)
//can check relationships https://vimeo.com/990477818/02d4c2e186?share=copy
npm start

//7. SQL Workbench has safe features to not delete or update All rows
//to get rid of press MySequelWorkbench next to apple logo -> Setting -> SQL Editor -> Safe Updates off

//8. Create a Procedure function in SQL
//if user already has booked this room, update the date and not throw error
CREATE PROCEDURE `insert_reservation` (_UserId INT, _RoomId INT, _StartDate DATETIME, _EndDate DATETIME)
BEGIN
INSERT INTO Reservations SET UserId = _UserId,  StartDate = _StartDate, EndDate = _EndDate, RoomId = _RoomID
ON DUPLICATE KEY UPDATE StartDate = _StartDate, EndDate = _EndDate;
END

//9. Call the procedure when user rebooks the room
CALL insert_reservation(1, 1, '2023-11-15 10:00:00', '2024-11-16 10:00:00');
