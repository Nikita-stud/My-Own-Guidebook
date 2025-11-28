/*
  Authorization
*/
function checkAuth(req, res, next) {
  //get headers auth token
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Missing authorization header' });
  }
  // Check if the token is correct
  if (authHeader !== 'Bearer secret123') {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
}

// Public route - no auth needed
app.get('/public', (req, res) => {
  res.json({ message: 'Public page' });
});

// Protected route - uses checkAuth middleware
app.get('/protected', checkAuth, (req, res) => {
  res.json({ message: 'Protected page' });
});

/*
Middleware Order
*/
// 1. Built-in middleware
app.use(cors());
app.use(express.json());

// 2. Custom middleware
app.use(loggingMiddleware);

// 3. Routes
app.get('/', handler);
app.get('/users', handler);

// 4. 404 handler (after all routes)
app.use(handle404);

// 5. Error handler (must be last)
app.use(errorHandler);
