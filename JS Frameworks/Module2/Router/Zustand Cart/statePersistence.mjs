//State managed by JavaScript libraries like Zustand or Redux Toolkit exists only in the browser’s memory
//use LocalStorage to save items in cart
//in zustand we use persist middleware

// 1. Import the persist middleware
import { persist, createJSONStorage } from 'zustand/middleware';

// 2. Wrap the setup function with persist
//saves auto to localStorage and fetches from there on first load
const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (product) => set((state) => {}),
      removeItem: (productId) => set((state) => {}),
      updateQuantity: (productId, quantity) => set((state) => {}),
      clearCart: () => set({ items: [] }),
    }),
    // 3. Configuration object for persist middleware
    {
      name: 'shopping-cart-storage', // Unique key for localStorage
      // storage: createJSONStorage(() => localStorage), // Default is localStorage
      // Example: Only persist the 'items' part of the state
      // partialize: (state) => ({ items: state.items }),
    },
  ),
);

export default useCartStore;
