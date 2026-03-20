//Now the oposite of useQuery
//Exactly the opposite. You define what to send and TanStack waits for you to trigger it:
//1. useMutation =changes data  (POST/PUT/DELETE):
import { useMutation, useQueryClient } from '@tanstack/react-query';

const mutation = useMutation({
  mutationFn: (newProduct) =>
    fetch(URL, { method: 'POST', body: JSON.stringify(newProduct) }),
  //invalidateQueries finds from useQuery the queryKey and updates the fetch without reloading the page after you POST something
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }), // "this cache is outdated, go refetch"
  // invalidates ONLY ['todos']
  //queryClient.invalidateQueries({ queryKey: ['todos'], exact: true });
  onError: (err) => console.log(err),
});

//TanStack does nothing until you call:
mutation.mutate({ title: 'New product' });

//data: The resolved data from your queryFn. undefined until fetched.
error; // An error object if the queryFn throws an error. null otherwise.
isLoading; // Boolean. true if the query is currently fetching for the first time and has no cached data. (Equivalent to status === ‘pending’ && isFetching).
isFetching; // Boolean. true if the query is currently fetching, including background refetches.
isSuccess; // Boolean. true if the query was successful and data is available. (Equivalent to status === ‘success’).
isError; // Boolean. true if the query encountered an error. (Equivalent to status === ‘error’).
status; // A string representing the query status: ‘pending’ (loading), ‘error’, ‘success’.

//EXAMPLE POST FORM:
// ContactPage.tsx
const mutation = useMutation({
  mutationFn: (formData) =>
    fetch(CONTACT_URL, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),
  onSuccess: () => setIsSubmitted(true),
  onError: (err) => setError(err.message),
});

const handleSubmit = (data) => mutation.mutate(data);

<button disabled={mutation.isPending}>
  {mutation.isPending ? 'Sending...' : 'Send'}
</button>;

//INSTEAD OF:
// normal JS — you manage everything yourself
const [isPending, setIsPending] = useState(false);
const [error, setError] = useState(null);
const [isSuccess, setIsSuccess] = useState(false);

const handleSubmit = async (data) => {
  setIsPending(true);
  try {
    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed');
    setIsSuccess(true);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsPending(false);
  }
};

//EXTRA STUFF LEARNED
//setQueryData — skip the refetch, update cache directly with what the API already returned, is faster:
onSuccess: (updatedGame) => {
  queryClient.setQueryData(['game', updatedGame.id], updatedGame); // instant, no extra request
  queryClient.invalidateQueries({ queryKey: ['oldGames'] }); // still invalidate the list
};
//refetchInterval — polling for live data
useQuery({
  queryKey: ['liveScores'],
  queryFn: fetchScores,
  refetchInterval: 5000, // hits the server every 5 seconds automatically
});
//refetchOnWindowFocus (on by default) user comes back to tab and refetched
useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts,
  refetchOnWindowFocus: false, // this is true by default, you don't need to write it only if you dont want updates
});
