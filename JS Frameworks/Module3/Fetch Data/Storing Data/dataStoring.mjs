//React Component State = useState (or useReducer) to hold data
//Browser Local Storage = web storage API that allows you to store key-value pairs

//React Component State
//when data is shown on screen and when it changes or no longer is shown, the data is deleted with the state
//if you reenter the same /prudct/id page it will fetch data again each time, losing the state if it were a shopping cart lets say

//Browser Local Storage
//data is saved until js clears it or browser storage is exceeded
//string based, localStorage.getItem is synchronouse and thus blocks the browser, limited capacity, 5-10mb
//USE ONLY: dark/light mode, language, diont show again preferences, drafts or unsubnmitted form data, Authentication Tokens
//DONT store JWT in local but rather in HTTP-only cookies becuase of security
//store localStorage data like shoppin gcart for no need to fetch API data again on next load

// localStorage: strings only, manual stringify/parse
localStorage.setItem('games', JSON.stringify(data));
const games = JSON.parse(localStorage.getItem('games'));

// But it won't re-render React — you still need state
const [games, setGames] = useState([]);

//SOLUTION:
//Caching pattern — cache first, fetch if empty:
//RULE: localStorage doesn't trigger re-renders — you always need to sync it into state to update the UI. localStorage is just the storage, state is what React watches.
useEffect(() => {
  const cached = localStorage.getItem('games');

  if (cached) {
    setGames(JSON.parse(cached)); // use cache, skip fetch
    return;
  }

  // nothing cached → fetch
  fetch(API_URL)
    .then((r) => r.json())
    .then((result) => {
      setGames(result.data);
      localStorage.setItem('games', JSON.stringify(result.data)); // save for next time
    });
}, []);
