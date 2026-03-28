//Socket keeps communication with the server, not like HTTp connection, great for live chat updates
//Socket.io
//Express is set up differently if I only download express first, thus we need to download it fresh

//1.new project
npm init -y

//2.socket.io
npm install express socket.io

//3.index.js
const express = require('express'); //Imports the Express library.
const app = express(); //Creates your Express application — this handles routing and middleware.
const http = require('http'); //Imports Node's built-in HTTP module
const server = http.createServer(app); //Creates a raw HTTP server and passes app into it.
const { Server } = require('socket.io'); //Imports the Server class from socket.io.
const io = new Server(server); //Creates a socket.io instance and attaches it to your HTTP server

//pass in index.html on / route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Every time someone connects, they get a unique socket.id and this callback fires
io.on('connection', (socket) => { 
  console.log('a user connected', socket.id);
});

//Notice it's server.listen not app.listen — because socket.io is attached to server, not app
server.listen(3000, () => {
  console.log('listening on *:3000');
});

//RULE:
.emit("lolz") //sends lolz event
.on("lolz")// receives and triggest if lolz event is send


//FROM the SERVER to the CLIENT:
io.on('connection', (socket) => {
  //when this event happens "server message" do this event "any messages for me?"
    socket.emit('server message', { server: 'any messages for me?'});
});

<script src="/socket.io/socket.io.js"></script>
<script> //goes in body index.html
    var socket = io();
    socket.on('server message', (data) => {
      console.log(data);
    })
</script>

//FROM the CLIENT to the SERVER:
io.on('connection', (socket) => {
    socket.emit('server message', { server: 'any messages for me?'});
    socket.on('chat message', (msg) => { //we listen for chat message evetn
      console.log('message: ' + msg);
    });
});

<script>
    var socket = io();

    var form = document.getElementById('form');
    var input = document.getElementById('input');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
      }
    });
  </script>