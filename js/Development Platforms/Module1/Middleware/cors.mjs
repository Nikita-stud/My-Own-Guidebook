/*When error of 
Access to fetch at 'https://api.example.com/data' from 
origin 'https://mywebsite.com' has been blocked by CORS policy
*/

//FRONT-End host is 5173
//Back-End host is 3000/4000
//That is why the browser will block your request because of CORS
//Since both origins arent the same
//Server sends header with either yes or no to the browser

//authentication and validation are extremely important in back end


//In network tab headers
Access - Control - Allow - Origin; // Which origins are allowed to make requests
Access - Control - Allow - Methods; // Which HTTP methods (GET, POST, etc.) are allowed
Access - Control - Allow - Headers; // Which headers the frontend can send

//To auto or manually allow request to origins is:
//Only needed in dev because of TypeScript?
//1 download cors
npm install cors
npm install -D @types/cors

//2
import cors from "cors";

app.use(cors())  // Adds CORS headers to every response

//All origins will now allow access but better to write your own origin depending on the domain/port
app.use(cors({ origin: "https://myfrontend.com" }));