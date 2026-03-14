//useState is local state
//lifting state up is what we learned but it has drowbacks
//Sharing state is what we need for shopping carts and far away data to talk to each other

//Context API, allows central store for a piece of data, makes it available
//to ANY component withing a part of the tree

//1. Create object for one piece of data, with default value
//in src/contexts/ThemeContext.js
import React from 'react';

const AuthContext = React.createContext(null);

export default AuthContext;

//2. every component has a PROVIDER any component inside will sub to the value
//value is the data we want to share
//save values inside rhe AuthCOntext
import AuthContext from './contexts/AuthContext';

const authContextValue = {
  //values we pass in
  user: currentUser,
  login: login,
  logout: logout,
};

<AuthContext.Provider value={authContextValue}>
  <h1>Min App</h1>
  <UserProfile />
</AuthContext.Provider>;

//3.useContext, allows to read the value
//Inside <UserProfile>
import { useContext } from 'react';

const auth = useContext(AuthContext);

//EAsy login check
const [currentUser, setCurrentUser] = useState(null);

const login = (userData) => setCurrentUser(userData);

const logout = () => setCurrentUser(null);
const authContextValue = {
  user: currentUser,
  login: login,
  logout: logout,
};
//inside the userPorfile
if (!auth || !auth.user) {
  return <p>Du er ikke logget inn.</p>;
}
