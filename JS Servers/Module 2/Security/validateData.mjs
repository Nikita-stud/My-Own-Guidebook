//ValidatorJS, save data in database only after checking it@
//https://github.com/validatorjs/validator.js/
npm install validator

var validator = require('validator');
validator.isEmail('foo@bar.com'); //=> true
validator.isEmail('foobar'); //=> false

//HelmetJS = actually amazing, it makes your Express secure, way more than it would be
npm install helmet --save

const helmet = require("helmet");
//const app = express();

app.use(helmet());

//CRYPTOJS = encrypting data, hashing passwords, etc.
npm install crypto-js

var CryptoJS = require("crypto-js");