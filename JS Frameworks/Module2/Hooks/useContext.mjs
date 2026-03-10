//context Hook makes it easy to pass info down the nesting
//instead going from one function to inner to inner to inner or the otber way around
//we can use hooks to pass info easier and cleaner
//https://www.youtube.com/watch?v=5LrDIWkK_Bc

//1.Create the flow (Object to save data)
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light'); // 'light' is the fallback default

export default ThemeContext;

//2.Pump data into flow
// Wrap the relevant part of the tree with the Provider
// Pass the current theme state as the value
//ALl stuff inside will rerender
import ThemeContext from './UserContext.js';

<ThemeContext.Provider value={contextValue}>
  {' '}
  //the value is accessable for all children of all components inside //you wrap
  all the functions that need access to the info
  <Toolbar />
</ThemeContext.Provider>;

//3.Harder way to use
<ThemeContext.Consumer>
  ;
  <Toolbar />
</ThemeContext.Consumer>;

//3Easier way with context
import { useContext } from 'react';
import { ThemeContext } from './app.jsx';

const theme = useContext(ThemeContext);
