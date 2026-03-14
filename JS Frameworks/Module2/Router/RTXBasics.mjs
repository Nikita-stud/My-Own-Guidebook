//Redux Toolkit , store, slices, actions
//Redux is powerful and widely used state management library
//reducers = pure functions
//store = single container for your state@
//slice = piece of state and logic
//RTK’s configureStore function sets up the store

npm install @reduxjs/toolkit react-redux


//src/app/store.js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: counterReducer, //slice: value
    user: userReducer,
  },
});

//EXAMPLE:
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle', // Example other state in the slice
};

export const counterSlice = createSlice({
  name: 'counter', // Name used in action types
  initialState, // Initial state for this slice
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;