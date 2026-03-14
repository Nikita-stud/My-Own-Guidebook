import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

//all components to have access
import { store } from './app/store';

<Provider store={store}>
  <App />
</Provider>;

//3.
import { useSelector } from 'react-redux';
const selectUserName = (state) => state.user.userName;
const userName = useSelector(selectUserName);
