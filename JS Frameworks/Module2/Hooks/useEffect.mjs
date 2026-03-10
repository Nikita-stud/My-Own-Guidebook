//When React needs to talk to outside world, it is called side effects
//Example, fetching APIs, chat, changing DOM, setting timers, updating browser document.title
//During rendering there should be NO changes to React inner state, thats why we ween useEffect
//https://www.youtube.com/watch?v=0ZJgIjIuY7U

//useEffect als to perform side effects
import React, { useState, useEffect } from 'react';

//it is always a function we pass into, every TIME our application renders, this will run
useEffect(() => {});

//inside the array we can add a useState, if it changes then the useEffect will run (Dependency Array)
useEffect(() => {}, []);

//Example
const [isOn, setIsOn] = useState(false);

useEffect(() => {
  console.log('I changed');
}, [isOn]);

//Unique... will run once since array never changes, this is wrong though
useEffect(() => {
  console.log('I changed');
}, []);
//We could parse in a fetch function and change the url by having useState change the url
///!!!WE ALWAYS HAVE TO ADD THIS values in [] if we listen for them in the useEffect anywhere in the code, else on old state will be looked at and nothing will change

//
//CLEANING THE EFFECT
//When setTime, fetch API, sub or event listener
//They have to be removed
//stuff runs in background and need to stop
//runs when component removed from DOM or before rerunning the effect

useEffect(() => {
  // 1. Setup — runs after render
  const timer = setInterval(() => console.log('tick'), 1000);

  // 2. Cleanup — runs before the NEXT effect, or on unmount
  return () => {
    clearInterval(timer); // close what you opened
  };
}, []);

useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);

  window.addEventListener('resize', handleResize); // open
  return () => {
    window.removeEventListener('resize', handleResize); // close
  };
}, []);
