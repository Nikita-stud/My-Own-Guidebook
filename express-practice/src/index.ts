import express from 'express';
import dotenv from 'dotenv';
//gives access to the variables in .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

interface anyObjects {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  price: number;
  rating: number;
  duration: number;
}

const movieArray: anyObjects[] = [
  {
    id: 1,
    title: 'Bor',
    genre: 'action',
    releaseYear: 2012,
    price: 20,
    rating: 5,
    duration: 20,
  },
  {
    id: 2,
    title: 'Bor2',
    genre: 'scary2',
    releaseYear: 2013,
    price: 22,
    rating: 2,
    duration: 20,
  },
  {
    id: 3,
    title: 'Bor3',
    genre: 'scary3',
    releaseYear: 2013,
    price: 23,
    rating: 3,
    duration: 20,
  },
  {
    id: 4,
    title: 'Bor4',
    genre: 'comedy',
    releaseYear: 2014,
    price: 24,
    rating: 4,
    duration: 20,
  },
  {
    id: 5,
    title: 'Bor5',
    genre: 'scary5',
    releaseYear: 2023,
    price: 25,
    rating: 5,
    duration: 20,
  },
  {
    id: 6,
    title: 'Bor6',
    genre: 'comedy',
    releaseYear: 2016,
    price: 26,
    rating: 6,
    duration: 20,
  },
];
app.listen(PORT, () => {
  console.log(`Server runs on Port: ${PORT}`);
});

app.get('/movies', (req, res) => {
  const { genre, maxDuration } = req.query;
  const filteredByGenreAndDuration = movieArray.filter((movie) => {
    return movie.genre === genre && movie.duration <= Number(maxDuration);
  });
  res.json(filteredByGenreAndDuration);
});
