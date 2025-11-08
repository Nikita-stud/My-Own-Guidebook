//This will run a call to the server with auth
//Making request to back end and CORE then check my
//http://127.0.0.1:5500/index.html origin which I specified to accept
fetch('http://localhost:4000/', {
  headers: {
    Authorization: 'Bearer letmein',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
