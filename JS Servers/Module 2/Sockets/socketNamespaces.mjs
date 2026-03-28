//namespaces to authorise and separate users

//1.provide the io a name
const admin = io.of('/admin');

admin.on('connection', (socket) => {
  socket.on('join', (data) => {
    socket.join(data.room);
    admin
      .in(data.room)
      .emit('chat message', `New user joined ${data.room} room!`);
  });

  socket.on('chat message', (data) => {
    admin.in(data.room).emit('chat message', data.msg);
  });

  socket.on('disconnect', () => {
    admin.emit('chat message', 'user disconnected');
  });
});

//2.in html
var socket = io('/admin');

//You can leave or join a room
socket.join('some room');
socket.leave('some room');

//admit to send message to specific
admin.to('some room').emit('some text');


//EXAMPLE:
<script>
    const room = 'room1';
    var socket = io('/admin');

    socket.on('server message', (data) => {
      console.log(data);
    })

    var form = document.getElementById('form');
    var input = document.getElementById('input');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value) {
        var msg = input.value;
        socket.emit('chat message', { msg, room }); //pass inn the message and room name
        input.value = '';
      }
    });
    socket.on('chat message', function(msg) {
      var item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });

    socket.on('connect', () => {
      socket.emit('join', { room: room });
    })
  </script>