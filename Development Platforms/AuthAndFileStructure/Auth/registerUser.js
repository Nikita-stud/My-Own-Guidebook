//1.We need passwords in our database, in table of users
//(Passwords in database have to be encrypted)
ALTER TABLE users ADD COLUMN password VARCHAR(255) NOT NULL;

//2.Our interface will have to give use 2 things from now on
//2.1 Full user interface (for database operations)
export interface User {
  id: number;
  username: string;
  email: string;
  password?: string; // Needed for login password verification
}
//2.2 User response interface (for API responses - no password)
export interface UserResponse {
  id: number;
  username: string;
  email: string;
}

//3. We will encrypt our passports in our database with BCRYPT
npm install bcrypt jsonwebtoken
npm install --save-dev @types/bcrypt @types/jsonwebtoken

//4. in routes/auth.ts
import { Router } from "express";
import bcrypt from "bcrypt";
import { ResultSetHeader } from "mysql2";
import { pool } from "../database";
import {
  validateRegistration,
  validateLogin,
} from "../middleware/auth-validation";
import { User, UserResponse } from "../interfaces";

const router = Router();

router.post("/register", validateRegistration, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE email = ? OR username = ?",
      [email, username]
    );
    const existingUsers = rows as User[];

    if (existingUsers.length > 0) {
      return res.status(400).json({
        error: "User already exists with that email or username",
      });
    }

    // Hash the password, 10 times into password? OK
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user in database
    const [result]: [ResultSetHeader, any] = await pool.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    // Return user info (without password)
    const userResponse: UserResponse = {
      id: result.insertId,
      username,
      email,
    };

    res.status(201).json({
      message: "User registered successfully",
      user: userResponse,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      error: "Failed to register user",
    });
  }
});

export default router;

//4.In index.ts dont forget to import the route and use it
//naming is up to you 
app.use("/auth", authRoutes)