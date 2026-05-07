//We should avoid endpoints with verbs, such as:
//users/save
//users/get
//users/delete

//HTTP status codes:
1xx (Informational)
2xx (Success) - 200 OK
3xx (Redirection) - 301 Moved Permanently
4xx (Client Error) - 400 Bad Request - 401 Unauthorized - 404 Not Found
5xx (Server Error)

//1 
npx express-generator --view=ejs

//OBS:
//res.render() = GET generate the HTML website and return it in the response
//res.send() – sends HTTP response
//res.json() – sends JSON response
//res.redirect() – used for redirection to the specified URL.
//res.end() – used to quickly end the response without any data
//app.js = specify which router files are responsible for the specified routes
//initialise the router as follows
var express = require('express');
var router = express.Router();

router.get('/path', function(req, res, next) {
  res.status(200).send("response")  
});

// MVC = Model-View-Controller
// Model – data & business logic (database structure, tables, relationships, validation rules), should be independent of other parts, stored and retrieves data, it also validates the data
// View – UI layer (HTML/CSS/JS, template engines like EJS) – displays data, captures user interaction
// Controller – intermediary between View (UI) and Model (data/business logic) handles user requests, tells models to update DB, renders views

// In Express:
//   models/   → Sequelize model files (database layer)
//   routes/   → router files act as controllers (request handling)
//   views/    → EJS templates (UI layer)

// In larger commercial apps:
//   Back-end (Java/.NET) handles controllers + ORM/database
//   Front-end (React/Angular/Vue + TypeScript) handles views + sending requests

//JS validation check. not database validation
//so check it before the query / table is created 
validate: {} // "before saving this to the database, run these checks first

//Validation in Sequilize look like: 
sequelize.define('foo', {
    bar: {
      type: DataTypes.STRING,
      validate: {
        is: /^[a-z]+$/i,          // matches this RegExp
        is: ["^[a-z]+$",'i'],     // same as above, but constructing the RegExp from a string
        not: /^[a-z]+$/i,         // does not match this RegExp
        not: ["^[a-z]+$",'i'],    // same as above, but constructing the RegExp from a string
        isEmail: true,            // checks for email format (foo@bar.com)
        isUrl: true,              // checks for url format (https://foo.com)
        isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
        isIPv4: true,             // checks for IPv4 (129.89.23.1)
        isIPv6: true,             // checks for IPv6 format
        isAlpha: true,            // will only allow letters
        isAlphanumeric: true,     // will only allow alphanumeric characters, so "_abc" will fail
        isNumeric: true,          // will only allow numbers
        isInt: true,              // checks for valid integers
        isFloat: true,            // checks for valid floating point numbers
        isDecimal: true,          // checks for any numbers
        isLowercase: true,        // checks for lowercase
        isUppercase: true,        // checks for uppercase
        notNull: true,            // won't allow null
        isNull: true,             // only allows null
        notEmpty: true,           // don't allow empty strings
        equals: 'specific value', // only allow a specific value
        contains: 'foo',          // force specific substrings
        notIn: [['foo', 'bar']],  // check the value is not one of these
        isIn: [['foo', 'bar']],   // check the value is one of these
        notContains: 'bar',       // don't allow specific substrings
        len: [2,10],         // only allow values with length between 2 and 10
        isUUID: 4,                // only allow uuids
        isDate: true,             // only allow date strings
        isAfter: "2011-11-05", //only allow date strings after a specific date
        isBefore: "2011-11-05",   // only allow date strings before a specific date
        max: 23,                  // only allow values <= 23
        min: 23,                  // only allow values >= 23
        isCreditCard: true,       // check for valid credit card numbers
        // Example of custom validators:
        isGreaterThanOtherField(value) {
          if (parseInt(value) <= parseInt(this.otherField)) {
            throw new Error('Bar must be greater than otherField.');
          }
        }
      }
    }
  });

//CODE WE WILL use to validate below 
module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define('Reservation', {
        StartDate: Sequelize.DataTypes.DATE,
        EndDate: Sequelize.DataTypes.DATE,
    },{
        timestamps: false,
        hasTrigger: true
    });
    return Reservation
}


//EXAMPLE OF EASY VALIDATION
module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize.define('Reservation', {

    StartDate: {
      type: Sequelize.DataTypes.DATE,
      //isAfter is also a sequilize validator
      //Reject any data that isnt after today
      validate: {
        isAfter: new Date().toDateString(), //toDateString is also what isAfter expects, instead of toString
      }
    },
    EndDate: {
      type: Sequelize.DataTypes.DATE,
      validate: {
        //Reject any data that isnt after today
        //checks that end date and start date is not today or in the past
        isAfter: new Date().toDateString(),
      }
    },
  }, {

    //custom validation
    validate: {
      //custom validation to check if both dates are provided
      bothDatesSet() {
        if (this.EndDate == null || this.StartDate == null) {
          throw new Error('Provide both dates.');
        }
      },

      //custom validation to check if the start date is before the end date and that they are at least one day apart
      differenceBetweenDates() {
        if (this.EndDate != null && this.StartDate != null) {
          if (this.StartDate.isAfter(this.EndDate)) {
            throw new Error('Start date must be before the end date.');
          }
          const start = new Date(this.StartDate);
          const end = new Date(this.EndDate);
          const diffTime = end - start;
          const dayTime = 1000 * 60 * 60 * 24;
          if (diffTime < dayTime) {
            throw new Error('Start date should be at least one full day before the end date.');
          }
        }
      }
    },
    //normal validation we would see
    timestamps: false,
    hasTrigger: true
  });
  return Reservation;
}