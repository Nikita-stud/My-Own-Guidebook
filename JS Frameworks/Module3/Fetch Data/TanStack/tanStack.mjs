//TanStack Query = React Query,
//Client State = data on browser, managed by react
//Server State = data that lives on server and is fetched async. My app just has a copy, like user profiles,lists, api resopoon ses

//TanStack cachets the data, making application faster
//fetches data in background to keep it up to date
//simplifies error, loading and data states, pagination, mutations
//has own devtools, performance opt,

npm install @tanstack/react-query

//DevTools
npm install @tanstack/react-query-devtools --save-dev


//1.
//QueryClient = manages cachet and queries.
//QueryClientProvider = makes QueryClient available to all components
//is set up in APP.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    // Optional: Set default options for all queries
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes: how long data is considered fresh
      gcTime: 10 * 60 * 1000, // 10 minutes: (garbage collection time) how long inactive queries are kept in cache
      refetchOnWindowFocus: true, // Refetch on window focus
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

//2.useQuery hook
import { useQuery } from '@tanstack/react-query';

// An async function that fetches your data
const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function Todos() {
  const { data, error, isLoading, isFetching, isSuccess, isError, status } =
    useQuery({
      queryKey: ['todos'], // A unique key identifies this query if need to get specific key then [‘user’, userId]
      queryFn: fetchTodos, // The function that fetches the data
      // ... other options like staleTime, gcTime, enabled, etc.
    });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  if (!data) return <p>No data available.</p>; // Should be covered by isLoading/isSuccess

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

//data: The resolved data from your queryFn. undefined until fetched.

error // An error object if the queryFn throws an error. null otherwise.
isLoading// Boolean. true if the query is currently fetching for the first time and has no cached data. (Equivalent to status === ‘pending’ && isFetching).
isFetching// Boolean. true if the query is currently fetching, including background refetches.
isSuccess// Boolean. true if the query was successful and data is available. (Equivalent to status === ‘success’).
isError// Boolean. true if the query encountered an error. (Equivalent to status === ‘error’).
status// A string representing the query status: ‘pending’ (loading), ‘error’, ‘success’.


//3. useMutation = used for creating, deleting and updating data
import { useMutation, useQueryClient } from '@tanstack/react-query';

const createTodo = async (newTodo) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) throw new Error('Failed to create todo');
  return response.json();
};

function AddTodoForm() {
  const queryClient = useQueryClient(); // Get the query client instance

  const mutation = useMutation({
    mutationFn: createTodo, //mutationFN = async function that performs
    onSuccess: (data) => {
      // data is the response from createTodo
      console.log('Todo created:', data);
      // Invalidate and refetch the 'todos' query to update the list
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onError: (error) => {
      console.error('Error creating todo:', error.message);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    if (title) {
      mutation.mutate({ title: title, completed: false, userId: 1 }); // Call mutate with variables for mutationFn
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="New todo title"
        disabled={mutation.isPending}
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Adding...' : 'Add Todo'}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </form>
  );
}


//EXAMPLE:
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// The API fetching function
const fetchOldGames = async () => {
  const response = await fetch('https://v2.api.noroff.dev/old-games');
  if (!response.ok) {
    // Try to get a more specific error message from the API
    const errorData = await response.json().catch(() => ({})); // Gracefully handle if error response isn't JSON
    throw new Error(
      errorData.errors?.[0]?.message ||
      `Network response was not ok: ${response.status}`,
    );
  }
  const result = await response.json();
  return result.data; // TanStack Query will receive this array
};

// Simple GameItem component (can be imported or defined inline)
function GameItem({ game }) {
  return (
    <li
      style={{
        border: '1px solid #ddd',
        marginBottom: '10px',
        padding: '10px',
        listStyleType: 'none',
      }}
    >
      <h4>
        {game.name} ({game.released})
      </h4>
      <p>
        Sjanger:{' '}
        {Array.isArray(game.genre) ? game.genre.join(', ') : game.genre}
      </p>
    </li>
  );
}

function RQOldGamesList() {
  const {
    data: games, // Renaming 'data' to 'games' for clarity
    error,
    isLoading,
    isError,
    isFetching, // Useful to see background refetches
  } = useQuery({
    queryKey: ['oldGames'], // Unique key for this query
    queryFn: fetchOldGames,
    // staleTime: 1000 * 60 * 5, // e.g., Data fresh for 5 minutes
    // gcTime: 1000 * 60 * 10, // Cache kept for 10 minutes after inactive
  });

  if (isLoading) return <p>Laster spilliste med TanStack Query...</p>;
  if (isError)
    return (
      <p style={{ color: 'red' }}>Feil ved henting av spill: {error.message}</p>
    );
  if (!games) return <p>Ingen spill data tilgjengelig.</p>; // Should be covered by isLoading/isSuccess

  return (
    <div>
      <h2>
        Klassiske Spill (med TanStack Query){' '}
        {isFetching && <small>(Oppdaterer...)</small>}
      </h2>
      <ul style={{ paddingLeft: '0' }}>
        {games.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default RQOldGamesList;

