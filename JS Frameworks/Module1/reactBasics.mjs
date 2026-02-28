//Vite tool is easiest to start a React project
npm create vite@latest my-react-app -- --template react

//2.choose react and Js for now
cd my-react-app
npm install
npm run dev 

//in my-react-app folder
/**
 * index.html is main HTML file
 * src/ is where work happens
 * main.jsx where to render main app components into
 * App.jsx where I build UI
 * App.css where css  is 
 * 
 * npm run dev starts indec.htmll file and watches .js.jsx.css for changes,
 *             on save, Vite rebuild the parts needed in the browser without full refresh
 * 
 * Components = small parts of code that you can set up together
 *              start with capital letter "PascalCode"
 * Function Components = accept single argument, called props and returns jsx that describes UI
 * https://react.dev/learn
 */

//JSX: looks like HTML and can be JS in same code, is from XML back in the days
//!!! can only return ONE and only ONE element. It can have million stuff inside but it has to be alone
//Just have a returned <div> </div> and put stuff inside or empty <></>
import React from 'react'; // May not be needed in newer setups, but good practice. Need for <> fragment 
{} //let you "escape back" into JS to embed code
<WelcomeMessage/> //to call function in the code
{/* */} //comment syntax 
className="" // class 
htmlFor="" // same as "for"" in a label, calling the form id
style={{ backgroundColor: 'darkgreen' }} //inline styles in double {{}} they are written in camelCase
disabled={true} // for buttons or just disabled


//Basic example:
import React from 'react'; //Old way of calling react
import './App.css'; //css styles

function WelcomeMessage() {
    return <h1>Velkommen til vår React-app!</h1>;
}


function App() { // The main App component that uses the others
  const cityName = 'Oslo';

  return (
    <div className="city-info">
      <WelcomeMessage/> //We call the function above 
      <h1>{cityName}</h1>
    </div>
  );
}

export default App;

//Old way of writing, might encounter
import React from 'react';
class OldStyleWelcome extends React.Component {
    render() {
        return <h1>Velkommen (gammel stil)!</h1>;
    }
}

//Functional components + Hooks are the modern standard. Class components are legacy.
/**
 * Functional — simpler: const Greet = ({ name }) => <h1>Hi {name}</h1>
Class — verbose: class Greet extends React.Component { render() {...} }
Functional uses Hooks: useState, useEffect, useContext...
Class uses lifecycle methods: componentDidMount, componentDidUpdate...
Functional — no 'this': No this.state, no this.props
Both accept props: Props passed from parent either way
**/

/** 
 * Props flow DOWN the component tree.
 * Prop drilling = passing through many layers.
* */