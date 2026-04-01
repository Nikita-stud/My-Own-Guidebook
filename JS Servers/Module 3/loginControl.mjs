//the partials login.ejs itself
<section class="login" id="login">
    <div class="p-5 text-center">
    <h1>Sign in</h1>
        <form action="/login/password" method="post">
            <div class="row">
                <label for="username">Username</label>
                <input id="username" name="username" type="text" autocomplete="username" required autofocus>
            </div>
            <div class="row">
                <label for="current-password">Password</label>
                <input id="current-password" name="password" type="password" autocomplete="current-password" required>
            </div>
            <div class="row">
                <button type="submit">Sign in</button>
            </div>
        </form>
    </div>
</section>

//login.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

module.exports = router

//link to app.js
var loginRouter = require('./routes/login');
app.use('/login', loginRouter);

//have a users.json file where you check for
npm install passport
npm install passport-local


/**
*
[
    {
        "username": "admin",
        "password": "C@keMa$ter"
    }
]
 */


//in login.js route add the packages and check
//if user exists and if password correct
//!!!there is NO password encryption
const fs = require("fs")
const path = require("path")
var passport = require('passport')
var LocalStrategy = require('passport-local');

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

router.post('/password', passport.authenticate('local', { //redirects on success or fail
  successReturnToOrRedirect: '/',
  failureRedirect: '/login'
}));


//save password
npm install express-session
npm install express-session-json

//in app.js
var passport = require('passport')
var session = require('express-session');
var JsonStore = require('express-session-json')(session);