//Less code to handle more states globally
npm install zustand

//updates all instance on change

//1.Stores = where zustand saves data
//"set" is how you update value
create()        // makes the store
set()           // updates the data
useCounterStore // how components access it
(state) =>      // pick what you need

//EXAMPLE
//src/stores/counterStore.js (Example store file)
import { create } from 'zustand'; 

const useCounterStore = create((set) => ({
  //initial data
  count: 0,

  // FUNCTIONS THAT CHANGE THE DATA
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setCount: (newCount) => set({ count: newCount }),
}));

export default useCounterStore;

//2.IN OTHER FILES import only count
const bears = useCounterStore((state) => state.bears)

//  
const increment = useCounterStore((state) => state.increment);
      <button onClick={increment}>Øk (+1)</button>
