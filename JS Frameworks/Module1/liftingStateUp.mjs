//If 2 components need to update at same time like euro and nok when typing in
//They will be out of sync since those would be stored as 2 separate values
//In React YOU need to find closest ancestor to store the values of both for them not to be put of sync
//The input for nok cant change parent, thus there is a function passed down to child that allows to update value@

/***
 * 1.Move the State: Identify the shared state and the useState call managing it. Move this useState call from the child component(s) into the common ancestor component.
   2.Pass State Down: The ancestor component passes the state value down to the child components that need to display it, using props.
   3.Pass Handlers Down: The ancestor component passes the state setter function (or a custom function that calls the setter) down to the child components that need to update the state, again, using props. The child components will call this function (often in response to an event) to notify the parent about the change.
 */

//THIS CREATES INPUTS WHEN CALLED (EASY) This is CHild component that gets the values
//Does not hold any states, just receives them and can be reused.
import React from 'react';

const scaleNames = { //Just for Name in legend , will be max 2 input fields
  c: 'Celsius',
  f: 'Fahrenheit',
};

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset style={{ marginBottom: '10px' }}>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature} //With value={}, you're telling React: "whatever is in text prop, always show that in the textarea." Now React controls what's displayed
        onChange={handleChange} // Notify parent on change
      />
    </fieldset>
  );
}

export default TemperatureInput;



//This is the PARENT COMPONENT that gets the values and 
import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

// Helper functions for conversion
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}


// Tries to convert, returns empty string on invalid input
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input); //toCelsius or toFahrenheit
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


function Calculator() {
  // State lifted up to the common ancestor
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c'); // Which input was last edited

  // Handlers passed down to children
  const handleCelsiusChange = (newTemperature) => { //this is TemperatureInput from the child, it will set useState of both values
    setScale('c');
    setTemperature(newTemperature);
  };

  const handleFahrenheitChange = (newTemperature) => {
    setScale('f');
    setTemperature(newTemperature);
  };

//if the last edit was in Fahrenheit: convert the stored number TO celsius  
  const celsius =
    scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      {/* Pass state down as 'temperature' prop */}
      {/* Pass handler down as 'onTemperatureChange' prop */}
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />

      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />

      <p>
        {parseFloat(celsius) >= 100 ? 'Vannet koker!' : 'Vannet koker ikke.'}
      </p>
    </div>
  );
}

export default Calculator;



//EASY EXAMPLE I DID MYSELF
import { useState } from 'react';

function TextViewer({ text }) { //Text to show that wil change from textarea
  return <p>{text}</p>;
}

function TextEditor({ text, onTextChange }) { //Textarea that displays "Dette er delt tekst." until handleTextChange sets the setSharedText text as new text
  const textChange = (e) => {
    onTextChange(e.target.value);
  };
  return <textarea value={text} onChange={textChange}></textarea>;
}
export function SharedTextApp() {
  const [sharedText, setSharedText] = useState('Dette er delt tekst.');

  function handleTextChange(newText) {
    setSharedText(newText);
  }

  return (
    <>
      <TextViewer text={sharedText} /> 
      <TextEditor text={sharedText} onTextChange={handleTextChange} /> //"Dette er delt tekst." and setSharedText function
    </>
  );
}