//in middleware/auth-validation.ts we add code that
//checks for valid JWT token in HEADER of Request and extracts user ID for auth
//
import { verifyToken } from '../utils/jwt';

// JWT Authentication Middleware
export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      error: 'Access token required',
    });
  }

  // Check if header follows Bearer format
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Token must be in format: Bearer <token>',
    });
  }

  // Extract token from "Bearer <token>" 7 because "Bearer "
  const token = authHeader.substring(7);
  const payload = verifyToken(token); //function from loginUsers.js

  if (!payload) {
    return res.status(403).json({
      error: 'Invalid or expired token',
    });
  }

  // Add user info to request object
  req.user = { id: payload.userId }; //so we can catch it somewhere else in the code
  next();
}
