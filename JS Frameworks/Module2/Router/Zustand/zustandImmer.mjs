//TO WRITE LESS CODE when deep nested
//Use IMMER to change an object in react state
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useCounterStore = create(
  immer((set) => ({
    count: 0,
    user: { name: 'Anon', age: 0 }, //the object we have

    // Without Immer — spread the object manually
    setUserName: (newName) =>
      set((state) => ({
        user: { ...state.user, name: newName },
      })),

    // With Immer — mutate directly
    setUserName: (newName) =>
      set((state) => {
        state.user.name = newName;
      }),

    decrement: () =>
      set((state) => {
        state.count -= 1;
      }),
    reset: () => set({ count: 0 }),
  })),
);
