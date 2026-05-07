//password saving in app.js
//user types password, app generates random salt, app hashes the password and then data is stored

var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    userService.getOneByName(username).then((data) => {
      if (data === null) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      crypto.pbkdf2(
        password,
        data.Salt,
        310000,
        32,
        'sha256',
        function (err, hashedPassword) {
          if (err) {
            return cb(err);
          }
          if (!crypto.timingSafeEqual(data.EncryptedPassword, hashedPassword)) {
            return cb(null, false, {
              message: 'Incorrect username or password.',
            });
          }
          return cb(null, data);
        },
      );
    });
  }),
);

//store the user ID and role to know who is logged in
passport.serializeUser((user, callback) => {
  process.nextTick(function () {
    callback(null, {
      id: user.id,
      username: user.UserName,
      roleId: user.RoleId,
    });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

//bit further down in app.js
app.use(
  session({
    secret: 'Secret',
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

//can add in routes/users.js
//own middleware function in which we will check whether the user wants to see their own details or is an admin user and can see all users’ details. Otherwise, the user will be redirected to the logging screen:
//We use the user object to access the session. If it is not set, no user is currently logged in. If it is set, we compare the ID from the session to the ID passed as the route parameter. If the user has all the necessary permissions, we go to the next function to be executed (logic within the handler). Otherwise, we redirect them to the login screen
function canSeeUserDetails(req, res, next) {
  if (req.user != null)
    if (req.user.role === 'Admin' || req.user.id == req.params.userId) {
      next();
      return;
    }
  res.redirect('/login'); //redirect to login if you access /users/1 and dont have permission
}

//we would pass in the check to each route
router.get('/:userId', canSeeUserDetails, async function (req, res, next) {
  const user = await userService.getOne(req.params.userId);
  res.render('userDetails', { user: user });
});

//in routes/authMiddlewares.js
//If the user is logged in and has the role of either User or Admin, the action is executed.
module.exports = {
  //either check if authorizes
  checkIfAuthorized: function (req, res, next) {
    if (req.user == null) {
      res.status(401).send('Not authorized');
      return;
    }
    next();
  },
  //check if member
  isMember: function (req, res, next) {
    if (req.user.roleId === 2) {
      next();
      return;
    }
    res.status(401).send('Not authorized');
  },
  //check if admin

  isAdmin: function (req, res, next) {
    if (req.user.roleId === 1) {
      next();
      return;
    }
    res.status(401).send('Not authorized');
  },
};

//then import it to routes to use
var { checkIfAuthorized } = require('./authMiddlewares');

//use it by adding it to requests you want to protect
router.post(
  '/',
  checkIfAuthorized,
  isMember,
  jsonParser,
  async function (req, res, next) {
    let Capacity = req.body.Capacity;
    let PricePerDay = req.body.PricePerDay;
    let HotelId = req.body.HotelId;
    await roomService.create(Capacity, PricePerDay, HotelId);
    res.end();
  },
);
