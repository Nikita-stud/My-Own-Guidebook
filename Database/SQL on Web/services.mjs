//Service = where we perform operations, update, delete etc
//uses CRUD method,findAll() method performs the SELECT * query
//Sequelize create() methods create a new instance of an object – it executes SQL INSERT query
//update() and destroy() methods execute PUT and DELETE queries


//https://learning.noroff.no/pluginfile.php/35137/mod_book/chapter/116458/Databases%20Module%202%20Task%203%20Solution.pdf

//1. service/UserService.js
class UserService {
  constructor(db) {
    this.client = db.sequelize;
    this.user = db.users;
  }

  async create(firstName, lastName) {
    return this.user.create({
      firstName: firstName,
      lastName: lastName,
    });
  }

  async getAll() {
    return this.user.findAll({
      where: {},
    });
  }

  async changeFirstName(userId, firstName) {
    return this.user.update({ firstName }, { where: { id: userId } });
  }

  async deleteUser(userId) {
    return this.user.destroy({
      where: { id: userId },
    });
  }
}
module.exports = UserService;


//2.users.ejs
<!DOCTYPE html>
<html>
  <head>
    <title>Users</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>Users:</h1>
    <ul>
      <% users.forEach(function(user) { %>
        <li><%= user.firstName %> <%= user.lastName %></li>
      <% }); %>
    </ul>
</body>
</html>

//3.users.js
var express = require('express');
var router = express.Router();
var UserService = require("../services/UserService")
var db = require("../models")
var userService = new UserService(db);
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()


router.get('/', async function(req, res, next) {
  users = await userService.getAll()
  res.render('users', {users: users});
})

router.post('/', jsonParser, async function(req, res, next) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  await userService.create(firstName, lastName);
  res.end()
});

router.delete('/', jsonParser, async function(req, res, next) {
  let id = req.body.id;
  await userService.deleteUser(id);
  res.end()
});

router.put('/', jsonParser, async function(req, res, next) {
  let firstName = req.body.firstName;
  let id = req.body.id;
  await userService.changeFirstName(id, firstName);
  res.end()
});

module.exports = router;