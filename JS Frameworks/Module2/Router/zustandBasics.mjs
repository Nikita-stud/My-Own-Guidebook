//Less code to handle more states globally
npm install zustand

// Stores = where zustand saves data
//src/stores/counterStore.js (Example store file)
import { create } from 'zustand'; 

const useCounterStore = create((set) => ({
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setCount: (newCount) => set({ count: newCount }),
}));

export default useCounterStore;

//IN OTHER FILES import only count
  const bears = useCounterStore((state) => state.bears)

//  
const increment = useCounterStore((state) => state.increment);
      <button onClick={increment}>Øk (+1)</button>


//
//
//TO WRITE LESS CODE, use IMMER to allow to add +1 to counter +=
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useCounterStore = create((set) => ({
  count: 0,
  user: { name: 'Anon', age: 0 }, // Example nested state

  increment: () =>
    set((state) => {
      state.count += 1; // Directly modify the draft state
      // No need to return anything here if using Immer's mutation pattern this way
      // (Though returning { count: state.count + 1 } still works perfectly fine too!)
    }),

  setUserName: (newName) =>
    set((state) => {
      state.user.name = newName; // Modify nested property directly
    }),

  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));


//Fetch data
import { create } from 'zustand';

const useDataStore = create((set) => ({
  data: null,
  isLoading: false,
  error: null,

  // Async action to fetch data
  fetchData: async (url) => {
    set({ isLoading: true, error: null }); // Set loading state
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const jsonData = await response.json();
      set({ data: jsonData, isLoading: false }); // Set data on success
    } catch (err) {
      set({ error: err.message, isLoading: false }); // Set error on failure
    }
  },
}));

export default useDataStore;