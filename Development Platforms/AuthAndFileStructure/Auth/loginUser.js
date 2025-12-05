//JWT token is generated when a user is logging in, it contains user ID
//It expires after some time and then you need to login again
//JWT token need to be signed with a secret key,something like a password our servers only know

//1.in .env add (it signs each token and allows us to see if the token has been faked)
//Secret should be a long and random string
JWT_SECRET=our-super-secret-key-change-this-in-production

//2.In utils/jwt.ts we generate token and verify it through BCRYPT 
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function generateToken(userId: number) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number };
  } catch (error) {
    return null;
  }
}

//3.In routes/auth.ts we create login
import { generateToken } from "../utils/jwt";

// User login
router.post("/login", validateLogin, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const [rows] = await pool.execute(
      "SELECT id, username, email, password FROM users WHERE email = ?",
      [email]
    );
    const users = rows as User[];

    if (users.length === 0) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    const user = users[0];

    // Verify password using bcrypt
    const validPassword = await bcrypt.compare(password, user.password!);

    if (!validPassword) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    // Generate JWT token
    const token = generateToken(user.id);

    // Return user info and token
    const userResponse: UserResponse = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    res.json({
      message: "Login successful",
      user: userResponse,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      error: "Failed to log in",
    });
  }
});