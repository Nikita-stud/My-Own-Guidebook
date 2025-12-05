//When error: Property ‘user’ does not exist on type ‘Request’.
//We create types/express.d.ts to tell typescript we will have other req besides req.body and req.params
//We will add req.user that has id
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
      };
    }
  }
}

export {};

/**GENERAL HOW AUTH WORKS
 * Registration: User provides credentials → bcrypt hashes password → user stored in database with hashed password.
   Login: User provides email/password → bcrypt verifies against stored hash → JWT token generated with user ID and expiry.
   Protected requests: Client sends JWT in Authorisation header → middleware verifies token signature and expiry → user ID extracted for route access control.


   Authentication: JWT middleware verifies the user’s identity through valid tokens.
   Authorisation: Route-level checks ensure users can only access their own data.
 */