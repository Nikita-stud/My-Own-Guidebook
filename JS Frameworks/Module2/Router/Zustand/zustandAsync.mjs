//ASYNC FUNCTION with Zustand if you want
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
