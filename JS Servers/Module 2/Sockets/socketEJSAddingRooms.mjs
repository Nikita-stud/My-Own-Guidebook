//adding rooms with EJS POST method from the body of the JSON

//1. middleware that specifically parses JSON bodies. So when a request comes in with a JSON payload, it converts it from raw text into a JavaScript object
//without it we wouldnt get the req body
//THis is for only one specific route to use req.body
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//or use ( — ALL routes get req.body parsed)
app.use(bodyParser.json());

//2.get room from JSON body and create new endpoint with the name, then return JSON in response

let rooms = ['room1', 'room2']//old rooms and on post, we add new room to it

app.post('/newroom', jsonParser, (req, res) => {
  const room = req.body.room;
  app.get('/' + room, (req, res) => {
    res.render(__dirname + '/room.ejs', { room: room });
  });
  rooms.push(room);
  res.send({
    room: room,
  });
});

//index route will be
app.get('/', (req, res) => {
  res.render(__dirname + '/index.ejs', {rooms: rooms});
});

//3.SEND-POSTMAN if we send then new endpoint will be created
{
  "room": "room2"
}

//4.index.ejs, show all rooms available
<ul>
    <%rooms.forEach(function(room){ %>
      <a href="/<%-room%>"><%- room %></a>
    <% }); %>
  </ul>

//TO SAVE THEM PERMANently
//We would just have room names array saved as a seprate file that we will read at the start of the server load
//rooms.json
["room1", "room2"]

//1.index.js
var fs = require('fs');
let rooms = JSON.parse(fs.readFileSync('./rooms.json', 'utf-8'));


app.post('/newroom', jsonParser, (req, res) => {
    const room = req.body.room;
    app.get('/' + room, (req, res) => {
        res.render(__dirname + '/room.ejs', {room: room});
    });
    if(!rooms.includes(req.body.room)) {
        rooms.push(room);
        if(req.body.save) {
            let rooms = JSON.parse(fs.readFileSync('./rooms.json', 'utf-8'));
            const newRooms =  rooms.concat([req.body.room])
            fs.writeFileSync("./rooms.json", JSON.stringify(newRooms));
        }
        res.send({
            'room': room
        });
    }
    else {
        res.send({
            'error': 'room already exist'
        })
    }
})