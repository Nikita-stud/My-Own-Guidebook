//React is a library that does not include any books
//CRA = create-react-app is those books, so we need to download it
//my-first-app can be changed but have only lowercase letter and -
//React is SPA (single page application) meaning that it will load only one HTML file and use JS to change it 
//1. download CRA
npx create-react-app my-first-app 

//2. run CRA inside the my-first-app folder (never close during development the terminal it runs on)
cd my-first-app
npm run start

//3.open http://localhost:3000/ and have it open when developing!!
//In dependencies @testing-library is for testing
//react-dom is library that lets react write to the DOM
//react-scripts is library got react scripts that make it easier to user React
//In scripts test is for for tests I wrote in React
//eject Cant be undone,it will unpack your entire app so you can make advanced configurations
//In src folder, index.js is where we specify HTML elements we are going to render
//app.js contains what we see on the screen

//4.In public index.html there is <div id="root"></div>
//in src index.js we connect to it and only add to it
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />); We render our App components into the div 