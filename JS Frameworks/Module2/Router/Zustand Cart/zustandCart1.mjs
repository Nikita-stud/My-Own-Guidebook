// Proposed state structure inside our Zustand store:
{
  items: [
    { productId: 'prod123', quantity: 2 },
    { productId: 'prod456', quantity: 1 },
    // ... other items
  ];
}

//1.create store (all the functions of the cart, add,remove etc.)
// src/stores/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],

  // If item exists → bump quantity. If not → add it with quantity: 1
  addItem: (product) =>
    //set ensures updates are based on latest state
    set((state) => {
      const exists = state.items.find((i) => i.productId === product.productId); //checks if an item with the same productId already exists.
      if (exists) {
        return {
          items: state.items.map((i) =>
            i.productId === product.productId
              ? { ...i, quantity: i.quantity + 1 } // new object, never mutate,with the incremented quantity
              : i,
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

  // Drop the item entirely, regardless of quantity
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.productId !== productId), //create a new array containing only the items whose productId does not match the one to be removed.
    })),

  // quantity <= 0 → remove it. Otherwise update it.
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((i) => i.productId !== productId)
          : state.items.map((i) =>
              i.productId === productId ? { ...i, quantity } : i,
            ),
    })),

  // Nuke everything
  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
