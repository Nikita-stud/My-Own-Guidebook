//Redux Toolkit , store, slices, actions
//Redux is powerful and widely used state management library
//reducers = pure functions
//store = single container for your state@
//slice = piece of state and logic
//RTK’s configureStore function sets up the store

npm install @reduxjs/toolkit react-redux

//REDUX - create the object we want to use up in nesting
//SLICE = part but not main, we need the store 
import { configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', //this is what we would call counter/increment
  initialState: { value: 0 },
  reducers: { //all functions
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    reset:     (state) => { state.value = 0 },
  },
});

export const { increment, decrement, reset } = counterSlice.actions; //we export the methods
export default counterSlice.reducer; //export the reducer, this is what we import in other files





//EXAMPLE COMPARISON
//Redux is a worse version of Zustand
// Zustand — one file, done
const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set(...),
}));

// RTK — separate setup file
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
//