import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { error } from 'console';

interface Book {
  id?: number;
  title: string;
  author: string;
  year?: number;
}

// In-memory storage
const books: Book[] = [
  { id: 1672531200000, title: 'John Doe', author: 'john@example.com' },
  { id: 1672531200200, title: 'Lol Doe', author: 'lol@example.com' },
  { id: 1672531260000, title: 'Jane Smith', author: 'jane@example.com' },
];

//gives access to the variables in .env
dotenv.config();

//Through app you can access and write commands
const app = express();

//.use express.json gets data send and allows access for json
app.use(express.json());
//Enables different endports unless sprecified
//This is front end server
app.use(cors({ origin: `http://127.0.0.1:5500` }));

//Defines LocalHost endport aka
//Back end server
const PORT = process.env.PORT || 3000;

app.use('/', (req, res, next) => {
  const date = Date.now();
  res.on('finish', () => {
    const totalTime = Date.now() - date;
    console.log(
      `Total time in mls ${totalTime} for ${req.method}${req.originalUrl}`
    );
  });
  next();
});
function checkAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authentication;
  if (!auth) {
    return res.status(401).json({ error: 'No header' });
  }
  if (auth !== 'Bearer letmein') {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  next();
}

app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const number = Number(id);
  const filtered = books.find((book) => book.id === number);
  if (!filtered) {
    res.status(400).json({ error: 'no item found' });
  }
  res.json(filtered);
});

app.post('/books', checkAuth, (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    res.status(404).json({ error: 'author and title required' });
  }
  const newId = Date.now();
  const newUser: Book = { id: newId, title, author };
  books.push(newUser);

  res.status(201).json(newUser);
});

app.put('/books/:id', checkAuth, (req, res) => {
  const { id } = req.params;
  const number = Number(id);

  if (isNaN(number)) {
    res.status(400).json({ error: 'Invalid ID user' });
  }

  const { title, author } = req.body;
  if (!title || !author) {
    res.status(404).json({ error: 'author and title required' });
  }

  const userIndex = books.findIndex((user) => user.id === number);
  if (userIndex === -1) {
    res.status(404).json({ error: 'No such item found' });
  }

  books[userIndex] = { id: userIndex, title, author };
  res.json(books[userIndex]);
});

app.patch('/books/:id', checkAuth, (req, res) => {
  const { id } = req.params;
  const number = Number(id);
  if (isNaN(number)) {
    res.status(400).json({ error: 'Invalid ID user' });
  }

  const updates = req.body;
  if (!updates.title && !updates.author) {
    return res.status(404).json({ error: 'author and title required' });
  }

  const userIndex = books.findIndex((user) => user.id === number);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'No such item found' });
  }

  books[userIndex] = { ...books[userIndex], ...updates };
  res.json(books[userIndex]);
});

app.delete('/books/:id', checkAuth, (req, res) => {
  const { id } = req.params;
  const number = Number(id);
  if (isNaN(number)) {
    return res.status(400).json({ error: 'Invalid ID user' });
  }

  const userIndex = books.findIndex((user) => user.id === number);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'No such item found' });
  }

  books.splice(userIndex, 1);
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Error', err.message);
  res.status(500).json({
    error: 'Internal server error',
    message:
      process.env.NODE_END === 'developer'
        ? err.message
        : 'Something went wrong',
  });
});

app.listen(PORT, () => {
  console.log(`We are running on ${PORT}`);
});
