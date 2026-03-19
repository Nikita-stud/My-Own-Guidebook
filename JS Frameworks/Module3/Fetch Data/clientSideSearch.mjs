//search option for the user
//same as clientSideFilter.mjs. Fetch and store the full dataset.Maintain state for the search query.Apply search logic (string matching) to the dataset to produce a list of matching items.Render the matching items.

import React, { useState, useMemo } from 'react';

function TownSearch() {
  const [towns] = useState(allTowns); // Original data
  const [searchTerm, setSearchTerm] = useState(''); // Search query state

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedTowns = useMemo(() => {
    if (!searchTerm.trim()) {
      // If search term is empty, show all towns
      return towns;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return towns.filter((town) =>
      town.name.toLowerCase().includes(lowerCaseSearchTerm),
    );
  }, [towns, searchTerm]); // Re-calculate if towns or searchTerm changes

  return (
    <div>
      <h2>Søk etter Norske Byer</h2>
      <label htmlFor="townSearchInput">Søk: </label>
      <input
        type="text"
        id="townSearchInput"
        placeholder="Skriv bynavn..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
      />

      {searchedTowns.length > 0 ? (
        <ul>
          {searchedTowns.map((town) => (
            <li key={town.id}>
              {town.name} (Befolkning: {town.population.toLocaleString('nb-NO')}
              )
            </li>
          ))}
        </ul>
      ) : (
        <p>Ingen byer matcher søket ditt: "{searchTerm}"</p>
      )}
    </div>
  );
}

export default TownSearch;

//EXAMPLE:
import React, { useState, useEffect, useMemo } from 'react';

const [allGames, setAllGames] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

// Filter/Search states
const [selectedGenre, setSelectedGenre] = useState('Alle');
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  const fetchAllGames = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`API feilet: ${response.status}`);
      const result = await response.json();
      setAllGames(result.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  fetchAllGames();
}, []);

const uniqueGenres = useMemo(() => {
  if (allGames.length === 0) return ['Alle'];
  const genresSet = new Set();
  allGames.forEach((game) => {
    if (Array.isArray(game.genre)) game.genre.forEach((g) => genresSet.add(g));
    else if (game.genre) genresSet.add(game.genre);
  });
  return ['Alle', ...Array.from(genresSet).sort()];
}, [allGames]);

// Combined Filtering and Searching Logic
const processedGames = useMemo(() => {
  let gamesToProcess = [...allGames];
  console.log('Prosesserer spilliste...');

  // 1. Filter by selected genre
  if (selectedGenre !== 'Alle') {
    gamesToProcess = gamesToProcess.filter((game) =>
      Array.isArray(game.genre)
        ? game.genre.includes(selectedGenre)
        : game.genre === selectedGenre,
    );
  }

  // 2. Filter by search term (in name OR description)
  if (searchTerm.trim() !== '') {
    const lowerSearchTerm = searchTerm.toLowerCase();
    gamesToProcess = gamesToProcess.filter(
      (game) =>
        game.name.toLowerCase().includes(lowerSearchTerm) ||
        (game.description &&
          game.description.toLowerCase().includes(lowerSearchTerm)),
    );
  }

  return gamesToProcess;
}, [allGames, selectedGenre, searchTerm]);

//DEBOUNCING = wait 300-500mls before searching after they stop typing
// In your component:
// const [inputValue, setInputValue] = useState(''); // What user types immediately
// const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

// useEffect(() => {
//   const handler = setTimeout(() => {
//     setDebouncedSearchTerm(inputValue);
//   }, 500); // 500ms delay

//   return () => {
//     clearTimeout(handler); // Cleanup on unmount or if inputValue changes
//   };
// }, [inputValue]); // Re-run effect if inputValue changes

// ... then use debouncedSearchTerm in your useMemo for searching
// onChange={(e) => setInputValue(e.target.value)}
