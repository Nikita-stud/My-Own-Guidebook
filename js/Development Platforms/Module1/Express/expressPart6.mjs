//Env like keys are not safe if
const apiUrl = import.meta.env.VITE_API_URL; // Visible in browser
//Rather make sure in back end that only
//Server can access the key
const apiKey = process.env.API_KEY; // Safe, stays on server

//1.get env package
npm install dotenv
//2.create .env and add to gitignore and add
PORT = 4000;
//3.Configure dotenv in your code 
import dotenv from "dotenv";
dotenv.config(); // Load .env file

//4.get PORT from env file 
const PORT = process.env.PORT || 3000; // Use env var or default to 3000


/*
Some differences from production to deployment
*/
// Development (.env file)
DATABASE_URL=postgresql://localhost:5432/dev_db
API_KEY=dev_key_123

// Production (hosting platform config)
DATABASE_URL=postgresql://prod-server:5432/prod_db
API_KEY=real_api_key_abc123