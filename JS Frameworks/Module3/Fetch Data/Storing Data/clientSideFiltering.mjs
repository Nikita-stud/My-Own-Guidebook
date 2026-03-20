//filtering API data through search etc,there are 2 ways
//1.Client-Side Filtering =entire dataset is fetched and stored in react state,create additional state variables for the current filter criteria, then we just filter
//2.Server-Side Filtering = filter criteria send to api in API request GET /api/products?category=electronics

//CLIENT SIDE
//IDEA: Fetch once, filter in the browser with .filter():

//create a new array of filtered items
import React, { useState, useMemo } from 'react';

const allMunicipalities = [
  { id: 1, name: 'Oslo', county: 'Oslo' },
  { id: 2, name: 'Bergen', county: 'Vestland'} ]

const uniqueCounties = [
  'Alle',
  ...new Set(allMunicipalities.map((m) => m.county)),
];

function MunicipalityFilter() {
  const [municipalities] = useState(allMunicipalities); // Original data
  const [selectedCounty, setSelectedCounty] = useState('Alle'); // Filter criterion

  const handleCountyChange = (event) => {
    setSelectedCounty(event.target.value);
  };

  // filter happens here, useMemo is to memorise the relut
  const filteredMunicipalities = useMemo(() => {
    console.log('Filtering municipalities...'); // To see when it runs
    if (selectedCounty === 'Alle') {
      return municipalities;
    }
    return municipalities.filter(
      (municipality) => municipality.county === selectedCounty,
    );
  }, [municipalities, selectedCounty]); // Dependencies: re-filter if these change

  return (
    <div>
      <h2>Filtrer Norske Kommuner</h2>
      <label htmlFor="countyFilter">Velg Fylke: </label>
      <select
        id="countyFilter"
        value={selectedCounty}
        onChange={handleCountyChange}
      >
        {uniqueCounties.map((county) => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>

      <ul style={{ marginTop: '20px' }}>
        {filteredMunicipalities.length > 0 ? (
          filteredMunicipalities.map((municipality) => (
            <li key={municipality.id}>
              {municipality.name} ({municipality.county})
            </li>
          ))
        ) : (
          <p>Ingen kommuner matcher filteret.</p>
        )}
      </ul>
    </div>
  );
}

export default MunicipalityFilter;


//EXAMPLE:
import React, { useState, useEffect, useMemo } from 'react';

const API_URL = 'https://v2.api.noroff.dev/old-games';

function FilterableGamesList() {
  const [allGames, setAllGames] = useState([]); // Stores all fetched games
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [selectedGenre, setSelectedGenre] = useState('Alle'); // 'Alle' means no genre filter
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all games on component mount
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

  // Derive unique genres for the filter dropdown from allGames
  const uniqueGenres = useMemo(() => {
    if (allGames.length === 0) return ['Alle'];
    const genresSet = new Set();
    allGames.forEach((game) => {
      if (Array.isArray(game.genre)) {
        game.genre.forEach((g) => genresSet.add(g));
      } else if (game.genre) {
        genresSet.add(game.genre);
      }
    });
    return ['Alle', ...Array.from(genresSet).sort()];
  }, [allGames]);

  // Apply filters to get the displayed list
  const filteredGames = useMemo(() => {
    let gamesToFilter = [...allGames]; // Start with a copy of all games

    // 1. Filter by selected genre
    if (selectedGenre !== 'Alle') {
      gamesToFilter = gamesToFilter.filter((game) => {
        if (Array.isArray(game.genre)) {
          return game.genre.includes(selectedGenre);
        }
        return game.genre === selectedGenre;
      });
    }

    // 2. Filter by search term (case-insensitive)
    if (searchTerm.trim() !== '') {
      const lowerSearchTerm = searchTerm.toLowerCase();
      gamesToFilter = gamesToFilter.filter((game) =>
        game.name.toLowerCase().includes(lowerSearchTerm),
      );
    }

    return gamesToFilter;
  }, [allGames, selectedGenre, searchTerm]); // Re-calculate if these change

  if (isLoading) return <p>Laster spill...</p>;
  if (error) return <p style={{ color: 'red' }}>Feil: {error}</p>;

  return (
    <div>
      <h2>Filtrerbare Klassiske Spill</h2>

      {/* Filter Controls */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
        <div>
          <label htmlFor="genreFilter">Filtrer på Sjanger: </label>
          <select
            id="genreFilter"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {uniqueGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="nameSearch">Søk på Navn: </label>
          <input
            type="text"
            id="nameSearch"
            placeholder="Skriv spillnavn..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            setSelectedGenre('Alle');
            setSearchTerm('');
          }}
          style={{ alignSelf: 'flex-end' }}
        >
          Nullstill Filtre
        </button>
      </div>

      {/* Displayed List */}
      {filteredGames.length > 0 ? (
        <ul style={{ paddingLeft: '0' }}>
          {filteredGames.map((game) => (
            <GameItem key={game.id} game={game} />
          ))}
        </ul>
      ) : (
        <p>Ingen spill matcher dine filtre.</p>
      )}
    </div>
  );
}

export default FilterableGamesList;