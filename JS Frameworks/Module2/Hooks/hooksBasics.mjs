//Hooks = always start with use....
//React relies on the consistent call order between renders
//useState is a hook, useEffect is also one
//they are a way to write states in React bypassing classes

//RULES:
// 1. Only called on top level, not loops, if statements or neste functions
//!!!else they would load randomly and thus change state
// 2. Only call hooks from React functions, or custom hooks (basically returning functions)

//
//useState = adds internal memory/state that is saved between renders
//WAY TO USE:
const [isOn, setIsOn] = useState(false); //set initial (first load) to false

const handleToggle = () => {
  //function to update the state
  setIsOn(!isOn); //true /false
};

return (
  <button onClick={handleToggle}>
    {/* 2. Use the current state value in rendering */}
    {isOn ? 'PÅ' : 'AV'} {/* Display depends on the 'isOn' state */}
  </button>
);

//
//Lazy loading
//THis will run calculate on each load making it EXPENSIVE
const [value, setValue] = useState(calculateInitialState());
//this will run calculate ONLY on first render
const [value, setValue] = useState(calculateInitialState);
const [todos, setTodos] = useState(() => createTodos()); //Same (Arrow functions only run once on first ever render)

//
//Functional updates, 2 ways to update value
setValue(5);

setValue(value + 1); //this will mess it up though since there are multiple seCounts sometimes and the count is the initial rendered value
setValue((prevCount) => prevCount + 1); //CORRECT way, React guarantees that prevCount will be last updated value

//EXAMPLE:
const handleIncrement = () => {
  setCount((previousCount) => previousCount + 1);
};
