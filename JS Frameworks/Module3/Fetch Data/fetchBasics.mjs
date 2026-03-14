//fetch() returns a PROMISE that is fulfilled when response is available.
//it does not rejects errors thus we need then()
//useEffect hook is where we would call our fetch
fetch(url)
  .then((response) => {})
  .catch((error) => {});

//no need method get but all others do
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_TOKEN_HERE',
  },
  body: JSON.stringify(data),
});

//EXAMPLE
<import React, { useState, useEffect } from 'react';

function RandomJoke() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setIsLoading(true); //to set btn to disabled true
    setError(null); //error container
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(
          `Beklager, en feil oppstod: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json(); 
      setJoke(data.joke);
    } catch (err) {
      setError(err.message);
      console.error('Failed to fetch joke:', err.errors[0].message);
    } finally {
      setIsLoading(false); //to not disable button
    }
  };

  // Fetch joke when component mounts
  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array means this effect runs once on mount

  if (isLoading) {
    return <p>Laster vits...</p>; // Loading joke...
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Dagens Vits</h2>
      {joke ? <p>{joke}</p> : <p>Ingen vits funnet.</p>}
      <button onClick={fetchJoke} disabled={isLoading}>
        Få en ny vits
      </button>
    </div>
  );
}

export default RandomJoke;