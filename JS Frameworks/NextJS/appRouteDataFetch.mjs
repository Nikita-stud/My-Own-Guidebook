//Server Components = ran on server closer to data source, thus eleminating requests and exposing sensitive APII keys

export default async function GamesPage() {
  const response = await fetch('https://v2.api.noroff.dev/old-games');

  //.json() converts the raw response into a JavaScript object. The : ApiResponse just tells TypeScript what shape to expect. Then you dig into .data because the API wraps its games array inside a data property.
  const result: ApiResponse = await response.json();

  //A ternary — if there are games, show the list, otherwise show a fallback message.
  {games && games.length > 0 ? (
  <ul>...</ul>
) : (
  <p>Ingen spill funnet.</p>
)}


//fetch(URL, { cache: ‘force-cache’}): (Default) Looks for a matching request in the cache
//fetch(URL, { cache: 'no-store' }): Fetches the resource from the remote server on every request,
//fetch(URL, { next: { revalidate: 60 } }): // Cache and revalidate every hour