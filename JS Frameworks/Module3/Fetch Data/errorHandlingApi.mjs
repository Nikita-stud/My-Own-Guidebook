//TYPES of ERRORS:
//Network Errors = request never reaches server (No internet connection, DNS resolution failure, CORS policy blocking the request)fetch() will reject its promise for these types of errors.
//Client Errors = 400... The request reached the server, but there was an issue with the client’s request.You must check response.ok or response.status.
//Server Errors = 500...he request reached the server and was valid, but the server failed to fulfil the request. fetch() also does not automatically reject for these. You must check response.ok or response.status.
//Application-Specific Errors = 200... but response body (e.g., { "success": false, "error": "Insufficient funds" }). This requires parsing the response body to detect.

//FIX in React:
//1.useState for fetch data, isLoading, error store object or message
//2.trt catch blocks
//3.response.ok
//4.Conditional Rendering = loading, success or error message display
//5.user feedback = error messages to user

//The core problem: fetch() only throws on network failure. A 404 or 500 still "succeeds" — you have to check manually.

const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null); // { message, status }

useEffect(() => {
  const fetchGame = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/games/${id}`);

      if (!response.ok) {
        // fetch won't throw for 404/500 — you must check
        if (response.status === 404) {
          throw { message: 'Game not found', status: 404 };
        }
        throw { message: `Something went wrong`, status: response.status };
      }

      const result = await response.json();
      setData(result.data);
    } catch (err) {
      setError(err.message ? err : { message: 'Network error' }); // our thrown object OR a real network crash
    } finally {
      setIsLoading(false);
    }
  };

  fetchGame();
}, [id]);

if (isLoading) return <p>Loading...</p>;
if (error)
  return (
    <p style={{ color: 'red' }}>
      {error.message} {error.status && `(${error.status})`}
    </p>
  );
if (!data) return <p>No data.</p>;
return <p>{data.name}</p>;

//Error Boundaries class component,getDerivedStateFromError() componentDidCatch() catches error anywhere in JS component child tree
//THIS is for random errors that may not be caused by API fetch
//We would wrap the entire app with <ErrorBoundary> !!!
//does not catch events, use try catch, async code, server side render

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ errorInfo: errorInfo });
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            padding: '20px',
            border: '2px solid red',
            backgroundColor: '#ffe0e0',
          }}
        >
          <h1>Oisann! Noe gikk galt.</h1>
          <p>Beklager for ulempen. Vi har logget feilen og vil se på den.</p>
          <p>
            Prøv å <a href={window.location.href}>laste siden på nytt</a>.
          </p>
          {/* For development, you might want to display more details */}
          {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
            <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
              <summary>Feildetaljer</summary>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
