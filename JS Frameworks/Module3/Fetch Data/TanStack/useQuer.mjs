//useQuery hook is designed to manage asynchronous operations
//queryKey = array that identifies the query. ['todos'] for a list of all todos.  ['todo', todoId] for a specific todo item.
//queryFn = asynchronous for fetching data, return promise, that resolves when data throws error on fetch

import { useQuery } from '@tanstack/react-query';

const fetchResource = async (resourceId) => {
  const response = await fetch(
    `https://api.example.com/resources/${resourceId}`,
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch resource ${resourceId}`);
  }
  return response.json();
};

function MyComponent({ resourceId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['resource', resourceId],
    queryFn: () => fetchResource(resourceId),
    // enabled: !!resourceId, // Example: only run query if resourceId is truthy
  });
}

const fetchItem = async ({ queryKey }) => {
  const [_key, itemId] = queryKey; // Destructure the key, e.g., ['item', 123]
  const response = await fetch(`/api/items/${itemId}`);
  return response.json();
};
//useQuery return object of states defined...data: TData | undefined:error: TError | null:isLoading: boolean etc etc
// useQuery({ queryKey: ['item', itemId], queryFn: fetchItem });

//EXAMPLE SINGLE ITEM FETCH
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// API fetching function for a single game
const fetchGameById = async (gameId) => {
  if (!gameId) throw new Error('Game ID is required.'); // Basic validation

  const response = await fetch(`https://v2.api.noroff.dev/old-games/${gameId}`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    if (response.status === 404) {
      throw new Error(`Spill med ID ${gameId} ble ikke funnet.`);
    }
    throw new Error(
      errorData.errors?.[0]?.message || `Nettverksfeil: ${response.status}`,
    );
  }
  const result = await response.json();
  return result.data; // Assuming API returns the game object in a 'data' property
};

function GameDetails({ gameId }) {
  const {
    data: game,
    isLoading,
    isError,
    error,
    isFetching,
    refetch, // Function to manually refetch
  } = useQuery({
    queryKey: ['game', gameId], // Query key includes the dynamic gameId
    queryFn: () => fetchGameById(gameId),
    enabled: !!gameId, // Only run the query if gameId is truthy (not null, undefined, empty string)
    // staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (!gameId) {
    // Handle case where no ID is provided to the component
    return <p>Vennligst oppgi en spill-ID for å se detaljer.</p>;
  }

  if (isLoading) return <p>Laster spilldetaljer for ID: {gameId}...</p>;
  if (isError)
    return (
      <div>
        <p style={{ color: 'red' }}>
          Feil ved henting av spill ({gameId}): {error.message}
        </p>
        <button onClick={() => refetch()}>Prøv igjen</button>
      </div>
    );
  if (!game) return <p>Ingen data for spill med ID: {gameId}.</p>;

  return (
    <div>
      <h2>
        {game.name} {isFetching && <small>(Oppdaterer...)</small>}
      </h2>
      <p>
        <strong>Utgitt:</strong> {game.released}
      </p>
      <p>
        <strong>Sjanger:</strong>{' '}
        {Array.isArray(game.genre) ? game.genre.join(', ') : game.genre}
      </p>
      {game.image && (
        <img
          src={game.image.url}
          alt={game.image.alt || game.name}
          style={{ maxWidth: '300px', margin: '10px 0' }}
        />
      )}
      <p>
        <strong>Beskrivelse:</strong>{' '}
        {game.description || 'Ingen beskrivelse tilgjengelig.'}
      </p>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Oppdaterer...' : 'Oppdater Detaljer'}
      </button>
    </div>
  );
}
