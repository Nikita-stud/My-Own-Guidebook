import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
//gives access to the variables in .env
dotenv.config();

//Through app you can access and write commands
const app = express();

//.use express.json gets data send and allows access for json
app.use(express.json());
//Enables different endports unless sprecified
//This is front end server
app.use(cors({ origin: `http://127.0.0.1:5500` }));

//Defines LocalHost endport aka
//Back end server
const PORT = process.env.PORT || 3000;

let count = 0;

app.use((req: Request, res: Response, next: NextFunction) => {
  count += 1;
  res.setHeader('X-Request-Count', count.toString());
  next();
});

//Time for request
app.use((req, res, next) => {
  const time = Date.now();
  res.on('finish', () => {
    const totalTime = Date.now() - time;
    console.log(
      `Total Time in milliseconds ${totalTime} for ${req.method} ${req.originalUrl}`
    );
  });
  next();
});

//This is all authorization for now! Get authorization in header
function checkAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ error: 'No header' });
  }
  if (auth !== 'Bearer letmein') {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
}

app.get('/', (req, res) => {
  //response will have a header name "X etc" with amount
  res.json({
    message: 'Public page',
    body: `Request #${count} - ${req.method} ${req.originalUrl}`,
  });
});

//If correct token then
app.get('/protected', checkAuth, (req, res) => {
  res.json({ message: `Protected page` });
});

//If correct token
app.get('/admin', checkAuth, (req, res) => {
  res.json({ message: `Admin dashboard` });
});
//Wrong url
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});
//Error handling of everything
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Error:', err.message);
  res.status(500).json({
    error: 'Internal server error',
    message:
      process.env.NODE_END === 'development'
        ? err.message
        : 'Something went wrong',
  });
});

app.listen(PORT, () => {
  console.log(`We are running on ${PORT}`);
});
