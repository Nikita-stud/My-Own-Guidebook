//npm package to have a constant connection to our database
//also called connection pool
npm install -s mysql2

//users.js
const sql = require('mysql2')

const pool = new sql.createPool({
  database: 'university', //which database we use
  connectionLimit: 10, //limit on users at a time
  host: 'localhost', //host where it is running
  user: 'root', //your user and password for sql database
  password: 'P@ssw0rd'
})

router.get('/', function (req, res, next) {
  //query allows us to run sql queries on our database
  pool.query('SELECT 1 as number', (err, result) => {
    if (err) console.log(err)
    console.dir(result)
  })
  let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
  res.render('users', { users: users });
});

//or straight from table
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM Users', (err, data) => {
      res.render('users', { users: data});
    });
});

//ADD POST REQUEST
//in postman we send the request, we then catch it
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.post('/', jsonParser, function (req, res, next) {
  let toAddArray = req.body.users; //we can now use this because of jsonParser
  //since it is an ARRAY of objects we need to map through it
  const query = 'INSERT INTO Users(FirstName, LastName) VALUES ' + toAddArray.map(user => '(' + "'" + user.FirstName + "'" + ',' + "'" + user.LastName + "'" + ')').toString();
  pool.query(query, (err, data) => {
    res.end()
  });
});

//ADD DELETE REQUEST
router.delete('/', jsonParser, (re, res, next) => {
  const deleteUser = req.body.user;
  const query =
    'DELETE FROM Users WHERE FirstName=' +
    "'" +
    deleteUser.FirstName +
    "'" +
    'AND LastName=' +
    "'" +
    deleteUser.LastName +
    "'";
  pool.query(query, (err, result) => {
    res.end();
  });
});

//OBS EXTRA:
//rather than having the pool in ea ch request, have it in db folder
// db/dbConfig.js, if error use npm I mysql

const sql = require('mysql2')

const pool = new sql.createPool({
    database: 'databaseapp',
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    connectionLimit: 10,
})

module.exports = pool

//import and use as learned
var pool = require('../db/dbConfig')
