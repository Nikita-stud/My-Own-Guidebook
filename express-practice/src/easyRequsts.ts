import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { pool } from './database';
import { off } from 'node:process';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

interface Restaurant {
  id: number;
  name: string;
  cuisine_type: string;
  rating: number;
}

app.get('/restaurants', async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    console.log('Pagination:', { page, limit, offset });

    const [rows] = await pool.query(
      'SELECT * FROM restaurants LIMIT ? OFFSET ?',
      [limit, offset]
    );
    const restaurants = rows as Restaurant[];

    if (restaurants.length === 0) {
      res.status(404).json({ error: 'No restaurants found' });
    }
    res.json(restaurants);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
app.get('/restaurants/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    const [restaurant] = await pool.execute(
      'SELECT * FROM restaurants WHERE id = ?',
      [id]
    );
    const restaurants = restaurant as Restaurant[];

    if (restaurants.length === 0) {
      res.status(404).json({ error: 'No restaurants found' });
    }
    res.json(restaurants[0]);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
