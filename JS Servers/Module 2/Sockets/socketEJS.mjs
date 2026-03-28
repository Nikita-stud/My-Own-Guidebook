//for less code and easier room builds
npm install ejs@3.1.9

//2 normal setup of reading
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//3.index.js (render is same as sendFile but it is a thing of EJS)
//whatever we type in will be new file room
app.get('/:room', (req, res) => {
    res.render(__dirname + '/room.ejs', {room: req.room});
});


//4.room.ejs change to const room = '<%-room%>';

<script>
      const room = '<%-room%>';
      var socket = io('/admin');

      socket.on('server message', (data) => {
        console.log(data);
      });

      var form = document.getElementById('form');
      var input = document.getElementById('input');

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (input.value) {
          var msg = input.value;
          socket.emit('chat message', { msg, room });
          input.value = '';
        }
      });
      socket.on('chat message', function (msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
      });

      socket.on('connect', () => {
        socket.emit('join', { room: room });
      });
    </script>