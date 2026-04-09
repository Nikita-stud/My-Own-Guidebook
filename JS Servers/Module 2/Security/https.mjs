//to get https we need ssl certificate = authenticates a website’s identity and enables an encrypted connection.

import { parse } from 'dotenv';

//Limit maximum number of requests per IP to prevent DDoS attacks, brute-force attacks, etc.
npm install express-rate-limit

//in app.js
var RateLimit = require('express-rate-limit');
const limiter = new RateLimit({
  windowMs: 15*60*1000, // 15 min
  max: 100, // up to 100 requests per IP
  delay: 0
});
app.use(limiter)

//COOKIES You can set up your own 
//https://github.com/expressjs/cookie-session
//secure = only through https
//httpOnly = not accessible through client side js, only server can access it
//sameSite = prevent CSRF attacks, only send cookie if request is from same site

//OUTDATED Packages
npm outdated

npm install <package-name>@latest

npm uninstall <package-name>

npm audit

//cross-site scripting
//when someone code into a form and server runs it stealing data from cookies etc
1, all formss sanitized and validated
2. use helmet to set security headers that prevent this attack
3. use httpOnly cookies so that client side js cannot access them
4, prevent looping creating of data
use validator.js or safe regex package
5.never use eval, setTimeout or setInterval with user input
6use safee JSON parse or parser to prevent parsing of malicious data