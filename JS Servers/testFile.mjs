const { createServer } = require('http');

const server = createServer((req, res) => {
  if (req.url === '/even' && req.method === 'GET') {
    let data = '';
    req.on('data', (chuck) => {
      data += chuck;
    });
    req.on('load', () => {
      const filtered = data.map((number) => {
        number % 2;
      });
      res.write(filtered);
    });
  } else {
    throw Error;
    res.end();
  }
});
server.listen(8000);


req.isAuthenticated() is a method Passport.js adds to every request. It returns true if the current user has a valid, authenticated session, and false otherwise. It doesn't do the authentication itself — it just checks whether it already happened.

How It Gets Set Up (the chain)
1. User logs in via POST /auth (routes/auth.js)

passport.authenticate('local', ...) is called
Passport runs your LocalStrategy in app.js — it reads users.json, finds a matching Username + Password, and returns the user object.

2. Passport serializes the user into the session (app.js:53-55)

passport.serializeUser((user, callback) => {
  callback(null, user);  // stores the whole user object in req.session
});
The session cookie is sent to the browser, so the server can identify this user on future requests.

3. On the next request, Passport deserializes the session (app.js:56-59)

passport.deserializeUser((user, callback) => {
  callback(null, user.Username);  // puts just the Username on req.user
});
Passport reads the session cookie, pulls the stored user, and attaches user.Username to req.user.

4. Now req.isAuthenticated() returns true
Passport marks a request as authenticated only when req.user is set. If the session is missing, expired, or invalid, req.user is undefined and req.isAuthenticated() returns false.

