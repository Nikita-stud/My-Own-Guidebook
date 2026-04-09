//express.static sends js, images and styles as is  from public folder /stylesheets/style.css
app.use(express.static(path.join(__dirname, 'public')));

// tells Express where to find pages that get processed first:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//TOGETHER: express finds views/memes.ejs, processes it and sends the result to the browser
app.get('/memes', function (req, res) {
  res.render('memes', { memes: memesData });
});


//RESPONSES
res.write('<h1>Hello</h1>'); //Node way 
res.end(); //to finish response in Express only when sending status aand write data in pieces
res.send({ name: 'Doge', id: 123 }); //response send as text, html or object
res.json({ memes: memesData }); //response send as JSON
res.render('memes', { memes: memesData, searchQuery: query }); //Express finds views/memes.ejs and sends memesData and query to it, then sends the result to the browser
res.redirect('/memes'); //sends to a different URL
res.status(200).send('Everything is fine'); //send http status code with response


//FOLDERS
bin/ // for server files that run on the backend and listen to requests
data/ // for data files like JSON, images, etc that run from backend
public/ // for static files like CSS, JavaScript, and images that are served frontend
views/ // for EJS page files and partials that get processed and sent to the browser
routes/ // for route files that define endpoints and logic for handling requests

//Array joining 
const original = [1, 2, 3];
const newArray = original.concat([4]);

//next() when using app.use(), the browser runs forever if not used, but if used, it continues to the next middleware or route handler
function requireAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next();              // user is logged in, continue to the route
    } else {
        res.redirect('/login'); // not logged in, stop here and redirect
    }
}

//responses
res.sendFile(path.join(__dirname, '..', 'index.html')) //sends a file to the browser, but only if the file is in the public folder, otherwise use path to find it


//EJS has to be defined in app.js, if we send from router we also need to send it from router to app.js 
<title><%= title %></title> //partials.ejs
<%- include('./partials/navbar.ejs'), {title: myTitle}%> //views/index.ejs
res.render('index', { myTitle: 'Express' }); //router.js

//EXAMPLE FOR if LOGGED IN
<% if (user) { %>
    <a href="/logout" class="btn btn-outline-light">Logout</a>
<% } else { %>
    <a href="/login" class="btn btn-outline-light">Login</a>
<% } %>

// WEBSOCKET = a way to have a continuous connection between 
// the browser and the server, so they can send messages to 
// each other without having to refresh the page, used for 
// real-time applications like chat apps, online games, etc.

npm install express socket.io

const server = http.createServer(app); // need to create server manually
const { Server } = require("socket.io");
const io = new Server(server); // we put socket.io on top of server

io.on('connection', (socket) => { // real-time connection

    // Server sends a welcome message to the client that just connected
    socket.emit('server message', { server: 'any messages for me?' });

    // socket listen for 'chat message' from ANY client
    socket.on('chat message', (msg) => {
        //io send it to ALL connected clients
        io.emit('chat message', msg);
    });

}); 

server.listen(3000, () => { // not app.listen
    console.log('listening on *:3000');
});

<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io(); // connects to the server via WebSocket

    // Receives the welcome message from server
    socket.on('server message', (data) => {
        console.log(data); // { server: 'any messages for me?' }
    });

    // Receives chat messages sent to everyone
    socket.on('chat message', (msg) => {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
    });
</script>

//AUTH and PassportJS
//login form send, passportJs checks it, if correct, creates a session and sends cookie to the browser,
//then browser sends cookie with every request to the server, 
//server checks cookie and if valid, allows access to protected routes

npm install passport
npm install passport-local


//in app.js
//passport will call this when someone tries to log in
//cb is callback that is send to passport.authenticate in the router.post, if we call cb with user data, it means login is successful, if we call cb with false, it means login failed
var passport = require('passport');
var LocalStrategy = require('passport-local');
const path = require("path");
const fs = require('fs');

passport.use(new LocalStrategy(function verify(username, password, cb) {
  //IF I put this line above the passport.js, it will not run on each login, but only once when the server starts
  const usersArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json"))); //we check for the user saved in data folder
  const foundUser = usersArray.find(x => x.username === username && x.password === password); //we check if the username and password match

  if (foundUser) {
    return cb(null, foundUser); //login successful, we send the user data to passport
  }
  return cb(null, false); //login failed, wrong password
}));

//in routeer.js
router.get('/', (req, res) => {
    // req.user exists if someone is logged in
    // undefined if they're a guest
    const currentUser = req.user ? req.user : undefined;
    
    // Pass it to the template so the navbar knows
    // who is logged in
    res.render('login', { currentUser });
});

// handle the form submission:
router.post('/', passport.authenticate('local', { //passport handles saving the session and sending the cookie, we just need to tell it how to check the username and password
    successRedirect: '/memes',
    failureRedirect: '/login?error=1'
}), (req, res) => {
    req.session.currentUser = req.user;
    res.redirect('/');
});

module.exports = router;

app.use('/login', authRouter);  //in app.js to use the router

//-- POST — action="/login" send to the /login route
{/* <form action="/login" method="POST">
    <input name="username" value="john">
    <input name="password" value="secret123">
</form> */}


//SESSIONS = store data on server, access token that is stored in session storage
npm install express-session

//In app.js between require and app.listen
//var passport = require('passport');
var session = require('express-session');

//var app = express();

app.use(session({
  secret: 'Secret',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//responsible for saving user data in session 
passport.serializeUser((user, callback) => {
callback(null, user);
});

//delete user data from session when logging out
passport.deserializeUser((user, callback) => {
  const userId = user ? user.username : '';
  callback(null, userId);
});

//logout route auth.js: (logout is a get passport request)
//just use <a href="/logout">Logout</a>, no need for a form or page to log out
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});
//signup route auth.js:
// Shows a form where someone can type a new username and password
router.get('/signup', (req, res) => {
  const currentUser = req.user ? req.user : undefined;
  res.render('signup', { currentUser });
});
// Handles the form submission, creates a new user and logs them in
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



//
//-- GET — data goes IN the URL (visible) (search bar)
<form action="/memes" method="GET">
    <input name="search" value="doge"></input>>
</form>
//-- Browser goes to: /memes?search=doge