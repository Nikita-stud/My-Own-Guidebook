//JWT = Authentication Token (accessToken)
//X-Noroff-API-Key = my own noroff auth key (apiKey)
//request body = out, delete, post
//Content-Type Header = application/json This tells the server how to interpret the body.
import React, { useState } from 'react';

// Assume these are retrieved from storage or context
const ACCESS_TOKEN = 'your_actual_access_token_here'; // Replace with a real token
const API_KEY = 'your_actual_noroff_api_key_here'; // Replace with your real API key

const NOROFF_API_BASE_URL = 'https://v2.api.noroff.dev';

function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState(''); // Content of the post
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage('');

    const postData = {
      title: title,
      body: body,
      // tags: ["example", "api"], // Optional fields might be available
      // media: { url: "...", alt: "..."} // Optional media
    };

    try {
      const response = await fetch(`${NOROFF_API_BASE_URL}/social/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'X-Noroff-API-Key': API_KEY,
        },
        body: JSON.stringify(postData),
      });

      const responseData = await response.json(); // Attempt to parse JSON regardless of status

      if (!response.ok) {
        // API errors are often in responseData.errors
        const errorMessage =
          responseData.errors?.[0]?.message ||
          `Feil: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      setSuccessMessage(
        `Innlegg "${responseData.data.title}" ble opprettet! ID: ${responseData.data.id}`,
      );
      setTitle(''); // Clear form
      setBody('');
    } catch (err) {
      setError(err.message);
      console.error('Kunne ikke opprette innlegg:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Opprett Nytt Innlegg</h2>

      {error && <p style={{ color: 'red' }}>Feil: {error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      <div>
        <label htmlFor="postTitle">Tittel:</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="postBody">Innhold:</label>
        <textarea
          id="postBody"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Publiserer...' : 'Publiser Innlegg'}
      </button>
    </form>
  );
}

export default CreatePostForm;

//EXAMPLE of PUT:

import React, { useState } from 'react';

const ACCESS_TOKEN = 'your_actual_access_token_here'; // Replace
const API_KEY = 'your_actual_noroff_api_key_here'; // Replace
const HYPOTHETICAL_GAMES_API_URL = 'https://v2.api.noroff.dev/games'; // Hypothetical editable endpoint

function EditableGameItem({ game, onGameUpdated, onGameDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(game.name);
  const [editedYear, setEditedYear] = useState(game.released);
  // Add other editable fields as needed

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    setIsLoading(true);
    setError(null);
    const updatedGameData = {
      // id: game.id, // Usually ID is in URL, not body for PUT
      name: editedName,
      released: editedYear,
      genre: game.genre, // Assuming genre is not editable in this simple form
      description: game.description, // Assuming not editable here
      // Only send fields that are meant to be updated
    };

    try {
      const response = await fetch(`${HYPOTHETICAL_GAMES_API_URL}/${game.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'X-Noroff-API-Key': API_KEY,
        },
        body: JSON.stringify(updatedGameData),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(
          responseData.errors?.[0]?.message ||
            `Update feilet: ${response.status}`,
        );
      }
      onGameUpdated(responseData.data); // Pass updated game data back to parent
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Er du sikker på at du vil slette "${game.name}"?`)) {
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${HYPOTHETICAL_GAMES_API_URL}/${game.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          'X-Noroff-API-Key': API_KEY,
        },
      });
      // DELETE typically returns 204 No Content on success, body might be empty
      if (response.status === 204) {
        onGameDeleted(game.id); // Notify parent of deletion
      } else if (!response.ok) {
        const responseData = await response.json().catch(() => ({})); // Try to parse, default to {} if empty
        throw new Error(
          responseData.errors?.[0]?.message ||
            `Sletting feilet: ${response.status}`,
        );
      } else {
        // Handle cases where status is OK but not 204, if API does that
        onGameDeleted(game.id);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isEditing) {
    return (
      <div
        style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}
      >
        <h4>Redigerer: {game.name}</h4>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Navn: </label>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </div>
        <div>
          <label>År: </label>
          <input
            type="text"
            value={editedYear}
            onChange={(e) => setEditedYear(e.target.value)}
          />
        </div>
        <button onClick={handleUpdate} disabled={isLoading}>
          {isLoading ? 'Lagrer...' : 'Lagre Endringer'}
        </button>
        <button
          onClick={() => {
            setIsEditing(false);
            setError(null);
          }}
          disabled={isLoading}
        >
          Avbryt
        </button>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3>
        {game.name} ({game.released})
      </h3>
      {/* ... other game details ... */}
      <button onClick={() => setIsEditing(true)} disabled={isLoading}>
        Rediger
      </button>
      <button
        onClick={handleDelete}
        disabled={isLoading}
        style={{ marginLeft: '10px' }}
      >
        {isLoading ? 'Sletter...' : 'Slett'}
      </button>
    </div>
  );
}

// Usage in a parent component that manages the list of games:
// function GameListManager() {
//   const [games, setGames] = useState([...initialGames]);
//   const handleGameUpdated = (updatedGame) => {
//     setGames(prevGames => prevGames.map(g => g.id === updatedGame.id ? updatedGame : g));
//   };
//   const handleGameDeleted = (deletedGameId) => {
//     setGames(prevGames => prevGames.filter(g => g.id !== deletedGameId));
//   };
//   return games.map(game =>
//     <EditableGameItem
//       key={game.id}
//       game={game}
//       onGameUpdated={handleGameUpdated}
//       onGameDeleted={handleGameDeleted}
//     />);
// }
