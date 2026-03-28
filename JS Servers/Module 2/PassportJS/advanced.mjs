//session= on login, we store token in browser. when browser exit, it deletes the toke

npm install express-session

//in app.js
var session = require('express-session');
var passport = require('passport');

//3.add session support
//secret= sign inn session cookie and protects data
//resave = wether save on every request even when data did not change
//saveUninitialized = if session should save to storage if new data and not been modified.
//passport.initialize() = initializes passport (look in basic)
//passport.session() = manages the session saves
var app = express();

app.use(session({
  secret: 'Secret',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

//4.serialization= saving user data in session
//deserializing= retrieving data using user id
//in auth.js
passport.serializeUser((user, callback) => {
callback(null, user);
});

passport.deserializeUser((user, callback) => {
  const userId = user ? user.username : '';
  callback(null, userId);
});

//5 for signing out auth.js
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


//6 for signing in  auth.js
router.get('/signup', (req, res) => {
  const currentUser = req.user ? req.user : undefined;
  res.render('signup', { currentUser });
});

//7. logic of saving new users to the users.json file
router.post('/signup', (req, res) => {
  const { username, password } = req.body;

  try {
    const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
      res.send('<script>alert("User already exists"); window.location.href="/login";</script>');
      return;
    }

    const newUser = { username, password };
    users.push(newUser);
    fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
    res.redirect('/login');
  } catch (err) {
    res.redirect('/login/signup');
  }
});