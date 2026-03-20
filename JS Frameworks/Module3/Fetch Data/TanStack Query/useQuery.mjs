//TanStack Query = React Query,
//The problem it solves — every time you fetch data you wrote the same 10 lines. TanStack Query writes them for you.
//It fetches the right get when needed

//Client State = data on browser, managed by react
//Server State = data that lives on server and is fetched async. My app just has a copy, like user profiles,lists, api resopoon ses

//TanStack cachets the data, making application faster
//fetches data in background to keep it up to date
//simplifies error, loading and data states, pagination, mutations
//has own devtools, performance opt,

npm install @tanstack/react-query

//DevTools
npm install @tanstack/react-query-devtools --save-dev


//NO MORE ULTRA LOTS OF CODE
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  setIsLoading(true);
  fetch(URL).then(r => r.json()).then(setData).catch(setError).finally(() => setIsLoading(false));
}, []);

//INSTEAD USES
//You pass in an object and it returns an object with all I need to know about the fetch
const { data, isLoading, error } = useQuery({
  queryKey: ['products'], // this data is stored under the name "products"
  queryFn: () => fetch(URL).then(r => r.json()), // the function that actually goes and gets the data
});

//1.Setup the times when data will be checked on server:
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

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>


//2.useQuery hook
//TanStack decides when to call Get and if to call, either new fetch or no fetch:
import { useQuery } from '@tanstack/react-query';

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // success → give data to TanStack
};

function Todos() {
  //staleTime: Infinity — never refetch automatically: //Useful for data that never changes — like old game details from 1995.
  //refetch — lets you manually trigger a fetch:
  const { data, error, isLoading, refetch } =
    useQuery({
      queryKey: ['game', gameId], //// fetches game 1, cached as "game 1"
      queryFn: fetchTodos, // The function that fetches the data
      //Without enabled it would try to fetch with no ID and crash. !!gameId converts it to true/false
      enabled: !!gameId, // don't fetch if gameId is null/undefined
      staleTime: Infinity // // once fetched, never considered outdated

    });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  if (!data) return <p>No data available.</p>; // Should be covered by isLoading/isSuccess

  return (
    <>
        <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
    //this would refetch if your made it
    <button onClick={() => refetch()} disabled={isFetching}>
      {isFetching ? 'Updating...' : 'Refresh'}
    </button>
    </>
  );
}

