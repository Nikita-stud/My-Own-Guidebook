//Components dont remember stuff, they do change but cant fetch info or remember it
//State = remembered data that can change
//Rule 1. Only call Hooks at the top level of your function component
//Rule 2. Only call Hooks from React function components or custom Hooks. Don’t call them from regular JavaScript functions

//useState hook allows state variable to be added to function component
import React, { useState } from 'react';

useState(0); //you call it with a start value

const [count, setCount] = useState(0); //can also destructure, count is current state value, setCount is the value we want to add or what not , 0 is the first render value
const [theme, setTheme] = useState('light'); //multiple times in a code is also possible
const [notificationsEnabled, setNotificationsEnabled] = useState(true);

<button onClick={() => setCount(count + 1)}></button>; //on click it would add +1 to 0 that is initial value. In react dont do count = count + 1
<button
  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
></button>;

//or this which is better !!!! (call it in the button and it will handle lot of new data)
const handleIncrement = () => {
  setCount((prevState) => prevState + 1);
};
<p>Nåværende verdi: {count}</p>; //you can still show count like this in this case too


//OBS!!!
onClick={setIsVisible(...)} //runs immediately on render
onClick={function} //runs function on click
onClick={()=>setIsVisible(...)} //runs when is clicked

//if isVisible is true then render the p tag
{isVisible && <p>Hemmelig melding!</p>}

//Different options: If false then on click true else if true then on click false
setIsVisible(isVisible === false ? true : false)
setIsVisible(!isVisible)
setIsVisible(prev => !prev)

//React events are named using camelCase
//HTML: onclick -> React: onClick
//HTML: onmouseover -> React: onMouseOver
//HTML: onsubmit -> React: onSubmit
onClick={}
onChange={}
onSubmit={}

//Form input event handler
const handleChange = (e) => {
        // Update state with the input field's current value
        setName(e.target.value);
    };
<label htmlFor="nameInput">Navn: </label>
<input
type="text"
id="nameInput"
value={name} // Controlled component: input value reflects state
onChange={handleChange} // Update state when input changes
/>

//Can also 
e.preventDefault();



//FULL EXAMPLE
import { useState } from 'react';

export function BackgroundColorChanger() {
  const [backgroundColor, setbackgroundColor] = useState('white');

  const handleChangeColor = () => {
    setbackgroundColor(backgroundColor === 'white' ? 'lightblue' : 'white');
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: backgroundColor,
          height: '100px',
          border: '1px solid black',
        }}
        onClick={handleChangeColor}
      >
        Bytt Farge
      </button>
    </div>
  );
}