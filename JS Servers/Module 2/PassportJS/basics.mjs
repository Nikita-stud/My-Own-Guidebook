//knowledge test = password etc
//ownership test = verification code etc
//bio test = facial recognition etc

//PassportJS = nodeJS middleware that provides auth methods, we then save in session storage

//Authenticate function = 500 strategies to authenticate the user.
//Serialize function = determines which data of the user should be stored in the session

//1.routes/auth.js that renders /login path and checks for req.user, then assigns value to currentUser
var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
  const currentUser = req.user ? req.user : undefined;
  res.render('login', { currentUser });
});
module.exports = router;

//2. In app.js
var authRouter = require('./routes/auth');

app.use('/login', authRouter);

//3.Install PAsspoerJS as well as others
npm install passport
npm install passport-local
npm install path
npm install fs

//4.Use in  auth.js and app.js
var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
const path = require("path");
const fs = require('fs');

//5.json file to store user data, folder data/users.json
[
    {
      "username": "admin",
      "password": "12345"
    },
    {
      "username": "Benny",
      "password": "12345"
    }
  ]

//6.passport.use() 
//fs package= reads data from json
//then we filter and find the user with usernamr that matches
// > check if contains elements
// [0] assign first element to userData variable
//cb= callball null = error and userData as auth user
//down below we tell that userauth failed
passport.use(new LocalStrategy(function verify(username, password, cb) {
  let usersArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json")));
  let filteredArray = usersArray.filter(x => x.username == username);
  if (filteredArray.length > 0) {
    let usersData = filteredArray[0];
    if (usersData.password == password) {
      return cb(null, usersData);
    }
  }
  else {
    return cb(null, false);
  }
}));

//7.add it as endpoint
//passport.authenticate() = adds 
router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}), (req, res) => {
    req.session.currentUser = req.user;
    res.redirect('/');
});