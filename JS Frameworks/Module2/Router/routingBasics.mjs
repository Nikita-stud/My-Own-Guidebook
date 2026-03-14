//SPA= single port application,
//When no whitescreen appears on changing pages
//Basically only the stuff on page loads anew and not the fetched page.
//instead of index.html, about page etc, we have it all in one place.

//Client side routing, (reads url and tells it to us, showcasing what we are asked of)
//USE ROUTING LIBRARY
//React Router 
//Or
//TanStack Router

//Download
npm install react-router-dom@6

//Pre INFO
BrowserRouter //wrap the code we want sync with URL with
Routes //container for individual path defined (first one renders that matches url)
Route //has path, element
path  //renpresents url I want to match
element // react component to run in the path

//1.Define the pages, lets say src/pages/HomePage.jsx
function HomePage() {
  return (
    <div>
      <h1>Hjem</h1>
      <p>Velkommen til hjemmesiden!</p>
    </div>
  );
}

export default HomePage;

//2.BroswerRouter to sync the code with URL
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter> //wrap the components
  <App /> //the app will have the paths inside
</BrowserRouter>

//2.Routes and Route (inside the App.jsx)
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

<Routes> //Matches first route in line
    <Route path="/" element={<HomePage />} /> {/* Root path */}
    <Route path="/about" element={<AboutPage />} /> {/* About path */}
</Routes>

//LINKS:
//Link, it renders <a> in react to "navigate links"
import { Routes, Route, Link } from 'react-router-dom'; // Import Link
<Link to="/">Hjem</Link>


//NavLink to highlight URL components you are on
import { Routes, Route, NavLink } from 'react-router-dom'; // Import NavLink

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'active-link' : ''; // Apply 'active-link' class if path true
  };

<li>
  <NavLink to="/" className={getNavLinkClass}>
    Hjem
  </NavLink>
</li>

//dont forget to style in src/app.css
.active-link {
  font-weight: bold;
  color: darkcyan;
  text-decoration: none;
}

//useNavigate hook to send you to other pages
//navigate(-1) to go one path back
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function GoHomeButton() {
  const navigate = useNavigate(); // Call the hook inside your function component

  const handleGoHomeClick = () => {
    navigate('/'); // Navigate programmatically to the root path
  };

  return <button onClick={handleGoHomeClick}>Gå til Hjemmesiden</button>;
}