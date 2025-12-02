//1. After EXPRESS with NODE setup, get mysql2
//Allows you to access database through api
//This is way faster than opening a new network socket each time
//We would have to authenticate each time, set up connection state
//Basically the connection is ready and can be accessed by users faster without making connection for each new user
npm install mysql2 dotenv

//2. The .env file has to be same level as package.json file
//env has to be in .gitignore, inside env have:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=blog
PORT=3000

//3. In src/ create database.ts, add this:
import "dotenv/config";
import mysql, { Pool } from "mysql2/promise";

// Create a connection pool to manage database connections
//change DB_Password to yours for database and DB_Name to the name of the database
const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export { pool };

//in index.ts import dotenv and configure it, then import {pool}
import dotenv from "dotenv";
import { pool } from "./database"

dotenv.config();




//EXPLANATION:
//loads env variables
import "dotenv/config";
//imports mysql2 and pool type (demonstrates TypeScript use)
import mysql, { Pool } from "mysql2/promise";

//const pool: Pool - types connection pool
//mysql.createPool() - creates connection to mysql database
//process.env.DB_HOST - uses data from env file 
//All this auto manages connection to database
const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  //max 10 users and then when finished, next in que runs
  //so 10 connections are busy, new requests wait automatically instead of failing
  connectionLimit: 10,
  queueLimit: 0,
});

//need to exp
export { pool };