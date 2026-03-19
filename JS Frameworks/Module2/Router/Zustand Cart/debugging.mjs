///(To make the action history readable in DevTools, it’s highly recommended to provide an “action type” string as the third argument to Zustand’s set function (e.g., set(..., false, ‘cart/addItem’)). This string will appear as the action name in the DevTools log. The false argument replaces the state entirely rather than merging.)

//Download devTools for Zustand
npm install @redux-devtools/extension

//1.Import it
import { devtools } from 'zustand/middleware';

//2.Wrap your store setup function with the devtools middleware
const useCartStore = create(


// 2. Wrap with devtools (can be inside or outside persist)
const useCartStore = create(
  devtools(
    persist( //this is the localStorages save
      (set) => ({
        items: [],

        removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        }), false, 'cart/removeItem'), // shows as 'cart/removeItem' in DevTools
  }))))