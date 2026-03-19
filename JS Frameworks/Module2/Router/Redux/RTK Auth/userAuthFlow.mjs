//Saving user
//user object saved if logged in, auth token in security storage, current state if  user idle, logged in or succeeded and any errors

//authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulates an API call
const mockLoginAPI = async ({ email, password }) => {
  await new Promise((r) => setTimeout(r, 1000));
  if (email === 'test@example.com' && password === 'password') {
    return {
      user: { id: 'u123', name: 'Test User', email },
      token: 'fake-jwt-token',
    };
  }
  throw new Error('Invalid email or password');
};

// Async thunk — dispatches pending/fulfilled/rejected automatically
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      return await mockLoginAPI(credentials);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, //// Holds user object { id, name, email } when logged in
    token: null, // Holds the auth token
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null, // Holds error message string on failure
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // from rejectWithValue
        state.user = null;
        state.token = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectUser = (state) => state.auth.user;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;
export const selectIsAuthenticated = (state) => !!state.auth.user;
