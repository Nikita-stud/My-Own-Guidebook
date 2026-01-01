//React is a library that does not include any books
//CRA = create-react-app is those books, so we need to download it
//my-first-app can be changed but have only lowercase letter and -
//React is SPA (single page application) meaning that it will load only one HTML file and use JS to change it
//Basically HTML will run once and only JS changes will apply and html will be deleted
//1. download CRA
npx create-react-app my-first-app 

//2. run CRA inside the my-first-app folder (never close during development the terminal it runs on)
cd my-first-app
npm run start

//0.open http://localhost:3000/ and have it open when developing!!
//In dependencies @testing-library is for testing
//react-dom is library that lets react write to the DOM /HTML
//(React-native) would be to write for apps
//react-scripts is library got react scripts that make it easier to user React
//like all the scripts down below that you can run 
//In scripts test is for for tests I wrote in React
//eject Cant be undone,it will unpack your entire app so you can make advanced configurations
//In src folder, index.js is where we specify HTML elements we are going to render
//app.js contains what we see on the screen

//0.In public index.html there is <div id="root"></div>
//in src index.js we connect to it and only add to it
//React.createElement() is same as document.createElement.
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />); We render our App components into the div 
//BTW: NEXT.js is react framework, is used to build backend for react 

//3. blank start would be in app.js
import React from 'react';

function App() {
  return <div>Hello world</div>;
}

export default App;

//OBS.
//if multiple elements then use (<></>)
return(
  <>
  <div>Hello</div>
  <h1>Wow</h1>
  </>
)

//Templates must have following structure template name is your own
cra-template-[template-name]/
  README.md (for npm)
  template.json
  package.json
  template/
    README.md (for projects created from this template)
    gitignore
    public/
      index.html
    src/
      index.js (or index.tsx)
//TO test template: 
npx create-react-app my-app --template file:../path/to/your/template/cra-template-[template-name]