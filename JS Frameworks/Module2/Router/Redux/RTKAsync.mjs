//redux-thunk = tool for fetching data in Redux
//thunk =function with async logic
//createAsyncThunk = easier when having RXK toolkit

//1.Define the fetch logic
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts', // RTK takes that string and creates 3 states, pending,fulfilled,rejected

  async () => {
    const response = await fetch('https://api.example.com/posts');
    return response.json(); // this becomes action.payload
  },
);

//2. Handle the 3 states
const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], status: 'idle', error: null },
  reducers: {}, // sync actions go here
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        //posts/fetchPosts
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload; // ← the returned data
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

//3.Use the data on success by fetching it in nested objects (RTK2.mjs)
const dispatch = useDispatch();
const posts = useSelector((state) => state.posts.posts);
const status = useSelector((state) => state.posts.status);
