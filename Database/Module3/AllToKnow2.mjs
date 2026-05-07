//As admin we want to display hotels and allow to add and delete existing hotels
//CRUD stuff is saved in services folder
//.create(), .findAll(), .update(), .destroy() that translate into SQL behind the scenes
//1. services/HotelService.js

//LEARN firs!!!!
findOne() → SELECT ... LIMIT 1
findAll() → SELECT *
findByPk() → SELECT ... WHERE id = ?
create() → INSERT INTO
update() → UPDATE
destroy() → DELETE

const existingUser = await db.User.findOne({
  where: { UserName: username }
}); // SELECT * FROM Users WHERE UserName = 'whatever' LIMIT 1;

//

const { sequelize } = require('../models'); //allows to fetch/use other models
const { QueryTypes } = require('sequelize'); //allows to run SQL commands in here

class HotelService {
  constructor(db) {
    this.client = db.sequelize; //allows to run raw SQL commands
    this.Hotel = db.Hotel; //allows to run ORM methods on Hotel model like .create(), .findAll(), .update(), .destroy()
  }
  async create(name, location) {
    // can also be replaced with this.client.query to run the command
    sequelize
      .query('INSERT INTO hotels (Name, Location) VALUES (:Name, :Location)', {
        replacements: {
          Name: name,
          Location: location,
        },
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  async get() {
    const hotels = await sequelize.query('SELECT * FROM hotels', {
      type: QueryTypes.SELECT, //makes a nice array of objects to read
    });
    return hotels;
  }
  async deleteHotel(hotelId) {
    await sequelize
      .query('DELETE FROM hotels WHERE id = :hotelId', {
        replacements: {
          hotelId: hotelId,
        },
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}
module.exports = HotelService;

//2.Create routers where we call the the right class method
//routes/hotels.js
var express = require('express');
var router = express.Router();
var HotelService = require('../services/HotelService');
var db = require('../models');
var hotelService = new HotelService(db);
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/', async function(req, res, next) {
  const hotels = await hotelService.get();
  res.render('hotels', { title: 'Hotels', hotels: hotels }) //in views folder we run hotels.ejs sending data
});

router.post('/', jsonParser, async function (req, res, next) {
//if a post request from a form is submitted with name and location we, can call other services
  let Name = req.body.Name;  
  let Location = req.body.Location;
  await hotelService.create(Name, Location);
  res.end();
});

router.delete('/', jsonParser, async function (req, res, next) {
  let id = req.body.id;
  await hotelService.deleteHotel(id);
  res.end();
});

module.exports = router;

//3. app.js ... if you visit /hotels now you will see the get request
var hotelsRouter = require('./routes/hotels');
app.use('/hotels', hotelsRouter);

//4. The ejs interface to display data/edit
//since frontend cant talk to backend, this is how it is done
//views/hotels.ejs
<!DOCTYPE html>
<html>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="/stylesheets/hotels.css" rel="stylesheet">
  </head>
  <body>
    <h2 class="p-3">Choose a hotel</h2>
    <div class="list-group">
      <% hotels.forEach(function(hotel) { %>
        <div class="row px-3 py-1 w-100">
          <span class="col py-1 bg-info"><%=hotel.Name%><span class="right"><%=hotel.Location%></span></span>
          <a href="/rooms/<%=hotel.id%>" class="col btn btn-secondary"> Rent a room</a>
          <a href="/hotels/<%=hotel.id%>" class="col btn btn-secondary"> Details</a>
      <% }); %>
    </div>
  </body>
</html>


</head>


//5. To add buttons to the 4. and add or delete the hotels
//we need to create the button in tje html and add onlcik function to public/javascript/deleteHotel.js etc
async function deleteHotel(url, hotelId) {
    console.log(url, hotelId)
    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id: hotelId
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Hotel deleted...';
            location.reload()
            return Promise.resolve(resData);
        }
        return Promise.reject(response);
    })
    .catch((response) => {
        alert(response.statusText);
    });;
}