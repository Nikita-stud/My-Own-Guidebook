//in routes/users.ts we add this, where we chen for JWT token
//and user.id that the JWT token sends back and the id in the URL
//Here on PATCH, only !!! Users can only modify their own accounts, not others.
//From now send in headers Headers: Authorization Bearer token
import { authenticateToken } from "../middleware/auth-validation";

router.patch(
  "/:id",
  authenticateToken,
  validateUserId,
  validateRequiredUserData,
  async (req, res) => {
    const userId = Number(req.params.id);
    const { username, email } = req.body;

    // Check if user is trying to update their own account
    //From jwrMiddleware and warnings.js
    if (req.user!.id !== userId) {
      return res.status(403).json({
        error: "Users can only update their own account",
      });
    }

    // ... rest of existing PATCH code
  }
);