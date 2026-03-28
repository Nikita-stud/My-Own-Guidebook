app.get();
app.post();
app.put();
app.delete();

//res= responses to the client
//req= gets request from the client
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

//can be chained together
app
  .route('/')
  .get((req, res) => {
    res.send('Hello World!');
  })
  .post((req, res) => {
    res.send('Got a POST request');
  });

//TO EXPORT you have to call express.Router() and export
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

export default router;
//or module.exports = router;

//TO IMPORT you just specify app and import file
import helloRouter from './routes/hello.js';

app.use('/hello', helloRouter);

//TO USE PARAMS add : before param
//http://localhost:3000/users part is the default one for each handler in users.js file thus no need for /users
router.get('/:userId/books/:bookId', (req, res) => {
  res.send(req.params); // {users: "12", books: "143"}
});

//Make it a number sincee it is
router.get('/books/:bookId', (req, res) => {
  const booksId = Number(req.params.bookId); //143
  const book = data.filter((books) => booksId === books.id);
  res.send(book);
});

//ROUTE-level middleware chaining
//Request hits / , function calls, after it next calls next function
router.get(
  '/',
  function (req, res, next) {
    console.log('will return response in a callback');
    next(); // ← "I'm done, pass control to the next function"
  },
  (req, res) => {
    res.send('Hello world'); // ← this runs after next() is called
  },
);

//METHODS AVAILABLE
.json() //send JSON response
.send() //send HTTP response
.download() //transfer file as an attachement
.redirect("https://goole.com") //redicrect to another path
.route //chains multiple routes together

//EXAMPLE, /class can take get and post:
app.route("/class").get((req, res) => {
  res.send(req.params)
}).post((req, res) => {
  res.send(req.params); // {users: "12", books: "143"}
});