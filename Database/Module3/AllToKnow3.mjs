//1. get single item for details page:
//returns array of objects thus we need to return [0]
//!!!SINCE it is a many to many relationship, we JOIN hotel and users 
//BTW THOSE QUERIES SHOULD BE STORED IN public/JSON 
async getHotelDetails(hotelId) {
    //Retrive hotel data
    const hotel = await sequelize.query('SELECT h.id, h.Name, h.Location, ROUND(AVG(r.Value), 1) AS AvgRate FROM hotels h LEFT JOIN rates r ON h.id = r.HotelId WHERE h.id = :hotelId', {
        replacements:
        {
            hotelId: hotelId
        },
        type: QueryTypes.SELECT,
    });

    //Retrive user rating count
    const userRateCount = await sequelize.query('SELECT COUNT(*) as Rated FROM rates WHERE HotelId = :hotelId AND UserId = :userId;', {
        replacements:
        {
            hotelId: hotelId,
            userId: 1
        },
        type: QueryTypes.SELECT,
    });
    //Check if user has rated this hotel.
    if (userRateCount[0].Rated > 0) {
        hotel[0].Rated = true;
    } else {
        hotel[0].Rated = false;
    }

    return hotel[0];
}

//2.in hotel.js router for details
router.get('/:hotelId', async function(req, res, next) {
  const hotel = await hotelService.getHotelDetails(req.params.hotelId);
  res.render('hotelDetails', { hotel: hotel });
});

//3.in same services js file to get the ratings we need to add
constructor(db) {
      this.client = db.sequelize;
      this.Hotel = db.Hotel;
      this.Rate = db.Rate;
      this.User = db.User;
  }

  //4. make a rating function in services HotelService 
  async makeARate(userId, hotelId, value) {
    sequelize.query('INSERT INTO rates (Value, HotelId, UserId) VALUES (:value, :hotelId, :userId)', {
        replacements:
        {
            userId: userId,
            hotelId: hotelId,
            value: value,
        }
    }).then(result => {
        return result
    }).catch(err => {
        return (err)
    })
}
//5. to use rthe rating we need a handler in router hotels.js
router.post('/:hotelId/rate', jsonParser, async function(req, res, next) {
  let value = req.body.Value;
  await hotelService.makeARate(1, req.params.hotelId, value);
  res.end()
});

//6. since the rating is done on front end we need to make a function to send to back end in public folder
async function makeRate(userId, url) {
    let value = prompt("Rate the hotel from 1 to 5")
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            UserId: userId,
            Value: value
        })
    });
    const resData = 'Made a rate';
    location.reload()
    return resData;
}

//7. html button for rating (hardcoded user id)
<script src="../javascripts/makeRate.js"></script>

  <button onclick="makeRate(1,'/hotels\/<%=hotel.id%>\/rate' )" class="btn btn-success"> Rate a hotel</button>


//LIST ALL RESERVATIONS OF A USER:
//1.UserService.js
class UserService {
    constructor(db) {
        this.client = db.sequelize; 
        this.User = db.User; //THIS IS where we get the ORM model
        this.Room = db.Room;
        this.Hotel = db.Hotel;
        this.Reservation = db.Reservation;
    }

    async create(firstName, lastName) {
        return this.User.create(
            {
                FirstName: firstName,
                LastName: lastName
            }
        )
    }

    async getAll() {
        return this.User.findAll({
            where: {}
        })
    }

    async getOne(userId) {
        return await this.User.findOne({
            where: {id: userId},
            include: {
                model: this.Room,
                through: {
                    attributes: ['StartDate', 'EndDate']
                },
                include: {
                    model: this.Hotel
                }
            }
        });
    }

    async deleteUser(userId) {
        return this.User.destroy({
            where: {id: userId}
        })
    }
}
module.exports = UserService;