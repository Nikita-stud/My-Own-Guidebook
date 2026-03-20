//When using useQuery and useMutation we can define states for buttons, etc:

// isLoading = first ever load, no data yet → show big spinner
// isFetching = any fetch including background → show subtle indicator

{
  isLoading && <p>Loading...</p>;
} // first load only
{
  isFetching && !isLoading && <p>Updating...</p>;
} // background refetch

//Mutation states — button text changes based on status:
<button disabled={status === 'pending'}>
  {status === 'idle' && 'Submit'}
  {status === 'pending' && 'Sending...'}
  {status === 'success' && 'Sent! Send again?'}
  {status === 'error' && 'Try again'}
</button>;

{
  status === 'error' && <p style={{ color: 'red' }}>{error.message}</p>;
}
{
  status === 'success' && <p style={{ color: 'green' }}>Sent!</p>;
}
//reset() — clears mutation state back to idle:
const { mutate, status, reset } = useMutation({...});

const handleSubmit = () => {
  reset();        // clear previous error/success before new attempt
  mutate(data);
};
<button onClick={reset}>Clear status</button> // let user dismiss error/success message


//Clear pattern
if (isLoading) return <p>Loading...</p>;
if (isError)   return <p>{error.message}</p>;
if (!data || data.length === 0) return <p>Nothing found.</p>;
return <ul>{data.map(...)}</ul>;