    items: {
        // productId is the key
        'prod123': { productId: 'prod123', quantity: 2 },
        'prod456': { productId: 'prod456', quantity: 1 }
        // ... other items
    },


// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // { prod123: { productId, quantity }, ... }
};

const cartSlice = createSlice({
  name: 'cart', //// Name for the slice (used in action types)
  initialState, //// The initial state defined above
  reducers: {
    // payload: { productId, name, ... }
    addItem: (state, action) => {
      const { productId } = action.payload;
      if (state.items[productId]) {
        state.items[productId].quantity += 1; // Immer lets you mutate directly
      } else {
        state.items[productId] = { ...action.payload, quantity: 1 };
      }
    },

    // payload: 'prod123'
    removeItem: (state, action) => {
      delete state.items[action.payload]; //Delete the property from the items object
    },

    // payload: { productId, quantity }
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      if (!state.items[productId]) return;
      if (quantity <= 0) {
        delete state.items[productId];
      } else {
        state.items[productId].quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

//dispatch looks like this
dispatch(addItem({ productId: 'prod123', name: 'Apple' }));
dispatch(removeItem('prod123'));
dispatch(updateQuantity({ productId: 'prod123', quantity: 3 }));
dispatch(clearCart());