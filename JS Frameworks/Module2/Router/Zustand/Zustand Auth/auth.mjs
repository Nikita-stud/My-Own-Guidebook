import { create } from 'zustand';

const mockLoginAPI = async ({ email, password }) => {
  await new Promise((r) => setTimeout(r, 1000)); // simulate network delay
  if (email === 'test@example.com' && password === 'password') {
    return {
      user: { id: 'u123', name: 'Test User', email },
      token: 'fake-jwt',
    };
  }
  throw new Error('Invalid email or password');
};

const useAuthStore = create((set) => ({
  // --- State ---
  user: null, // null = not logged in
  token: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,

  // --- Actions ---
  loginUser: async (credentials) => {
    set({ status: 'loading', error: null }); // start loading, clear old errors

    try {
      const data = await mockLoginAPI(credentials); // call the API
      set({
        // success → store user + token
        status: 'succeeded',
        user: data.user,
        token: data.token,
      });
    } catch (err) {
      set({
        // failure → store error message
        status: 'failed',
        error: err.message,
        user: null,
        token: null,
      });
    }
  },

  logout: () => set({ user: null, token: null, status: 'idle', error: null }), // reset everything
}));

export default useAuthStore;

//LoginForm
function LoginForm() {
  const { loginUser, status, error } = useAuthStore(); // grab what we need
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password }); // call async action directly
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button disabled={status === 'loading'}>
        {status === 'loading' ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
      {/* show error if any */}
    </form>
  );
}

//UserDispaly
function UserDisplay() {
  const { user, logout } = useAuthStore(); // grab user + logout action

  if (!user) return null; // not logged in → render nothing

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
