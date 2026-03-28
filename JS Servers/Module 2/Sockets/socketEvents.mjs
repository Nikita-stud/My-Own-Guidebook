//To add multiple chatrooms for clients
//io is the server
//socket is listening to the client
io.emit(); //sends message to everyone
socket.emit() //sends to the others and yourself
socket.broadcast.emit(); //sends message to every connected client besides yourself

//we want our users to see their own messages , so we’ll use the first option
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => { //msg is input value from form
    io.emit('chat message', msg);
  });

  socket.on("disconnect", ()=>{
    console.log("user disconnected")
    io.emit("message", "user disconnected")
  })
});

<script>
    var socket = io();

    socket.on('server message', (data) => {
      console.log(data);
    })

    var form = document.getElementById('form');
    var input = document.getElementById('input');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
      }
    });
    socket.on('chat message', function(msg) {
      var item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });
  </script>