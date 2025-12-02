import express, { Request, Response, NextFunction } from 'express'; //allows us to write Express code (all of this)
import dotenv from 'dotenv'; //allows hidding and usage of .env file
import { pool } from './database'; //talks to pool in database.ts
import { off } from 'node:process';
import { ResultSetHeader } from 'mysql2'; //Gets data and Meta if we specify

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;

interface Restaurant {
  name: string;
  cuisine_type: string;
  rating: number;
}
function isValidRating(rating: number): boolean {
  return rating >= 1 && rating <= 5;
}

function isValidName(name: string): boolean {
  return name && name.length >= 2 && name.length <= 100;
}

function isValidCuisineType(cuisine: string): boolean {
  return cuisine && cuisine.length >= 2 && cuisine.length <= 50;
}

app.get('/restaurants', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM restaurants');
    res.status(200).json(rows);
  } catch (error) {
    console.log('Database error', error);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
});

app.post('/restaurants', async (req, res) => {
  try {
    const { name, cuisine_type, rating } = req.body;

    if (!isValidName(name)) {
      return res.status(400).json({
        error: 'Name must be between 2 and 100 characters',
      });
    }

    if (!isValidCuisineType(cuisine_type)) {
      return res.status(400).json({
        error: 'Cuisine type must be between 2 and 50 characters',
      });
    }

    if (!isValidRating(rating)) {
      return res.status(400).json({
        error: 'Rating must be between 1 and 5',
      });
    }

    const [result]: [ResultSetHeader, any] = await pool.execute(
      `INSERT INTO restaurants (name,cuisine_type,rating) VALUES (?,?,?)`,
      [name, cuisine_type, rating]
    );
    const createdRes: Restaurant = {
      id: result.insertId,
      name,
      cuisine_type,
      rating,
    };

    res.status(201).json(createdRes);
  } catch (error) {
    console.log('Database error', error);

    res.status(500).json({
      error: 'Something went wrong with the server',
    });
  }
});

app.put('/restaurants/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const { name, cuisine_type, rating } = req.body;

    if (isNaN(userId)) {
      return res.status(400).json({
        error: 'Id is required',
      });
    }
    if (!isValidName(name)) {
      return res.status(400).json({
        error: 'Name must be between 2 and 100 characters',
      });
    }

    if (!isValidCuisineType(cuisine_type)) {
      return res.status(400).json({
        error: 'Cuisine type must be between 2 and 50 characters',
      });
    }

    if (!isValidRating(rating)) {
      return res.status(400).json({
        error: 'Rating must be between 1 and 5',
      });
    }

    const [result]: [ResultSetHeader, any] = await pool.execute(
      `UPDATE restaurants SET name =? ,cuisine_type =?,rating= ? WHERE id = ? `,
      [name, cuisine_type, rating, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const createdRes: Restaurant = {
      id: userId,
      name,
      cuisine_type,
      rating,
    };

    res.status(200).json(createdRes);
  } catch (error) {
    console.log('Database error', error);

    res.status(500).json({
      error: 'Something went wrong with the server',
    });
  }
});

app.patch('/restaurants/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const { name, cuisine_type, rating } = req.body;

    if (isNaN(userId)) {
      return res.status(400).json({
        error: 'Id is required',
      });
    }
    if (!isValidName(name)) {
      return res.status(400).json({
        error: 'Name must be between 2 and 100 characters',
      });
    }

    if (!isValidCuisineType(cuisine_type)) {
      return res.status(400).json({
        error: 'Cuisine type must be between 2 and 50 characters',
      });
    }

    if (!isValidRating(rating)) {
      return res.status(400).json({
        error: 'Rating must be between 1 and 5',
      });
    }

    const fieldToUpdate = [];
    const value = [];

    if (name) {
      fieldToUpdate.push('name = ?');
      value.push(name);
    }
    if (cuisine_type) {
      fieldToUpdate.push('cuisine_type = ?');
      value.push(cuisine_type);
    }
    if (rating) {
      fieldToUpdate.push('rating = ?');
      value.push(rating);
    }

    value.push(userId);

    const query = `UPDATE restaurants SET ${fieldToUpdate.join(
      ', '
    )} WHERE id = ?`;
    const [result]: [ResultSetHeader, any] = await pool.execute(query, value);

    if (result.affectedRows === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const [rows] = await pool.execute(
      'SELECT id, name, cuisine_type, rating FROM restaurants WHERE id = ?',
      [userId]
    );

    const rest = rows as Restaurant[];
    const restau = rest[0];

    res.json(restau);
  } catch (error) {
    console.log('Database error', error);

    res.status(500).json({
      error: 'Something went wrong with the server',
    });
  }
});

app.delete('/restaurants/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);

    if (isNaN(userId)) {
      return res.status(400).json({
        error: 'Id is required',
      });
    }
    const [result]: [ResultSetHeader, any] = await pool.execute(
      'DELETE FROM restaurants WHERE id = ?',
      [userId]
    );

    if (result.affectedRows === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    res.status(204).send();
  } catch (error) {
    console.log('Database error', error);

    res.status(500).json({
      error: 'Something went wrong with the server',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
