//After creating the slice using createSlice
//we need to create the store and make it available

//1.configureStore after configureSlice
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer, // accessed as state.user
    counter: counterReducer, // accessed as state.counter
  },
});

//2.Wrap all components that need the data
import { Provider } from 'react-redux';
import { store } from './app/store';

<Provider store={store}>
  {' '}
  {/* ← every component can now access the store */}
  <App />
</Provider>;

//3.Now you can read states
const userName = useSelector((state) => state.user.userName);

//4.Also update states
import { useDispatch, useSelector } from 'react-redux'; // 1. Import useDispatch and useSelector

const dispatch = useDispatch();
dispatch(login('Niki')); // send the action to the store
