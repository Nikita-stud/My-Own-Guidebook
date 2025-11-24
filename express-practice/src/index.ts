import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { pool } from './database';
import { off } from 'node:process';

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
