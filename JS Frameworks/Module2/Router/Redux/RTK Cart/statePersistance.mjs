//Save data in localstorage and fetch it
whitelist: ['cart'] // controls what gets saved to localStorage
ignoredActions // stops RTK's serializable check from screaming at redux-persist's internal actions
PersistGate // holds rendering until localStorage data is loaded back into the store 
(loading={null} // blank screen while that happens, pass a spinner if you want)


//1.
npm install redux-persist

//2. store
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart'], // only persist cart
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

//3.main jsx
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);