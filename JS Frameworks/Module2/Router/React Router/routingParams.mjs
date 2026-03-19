//URL param, everything after :
//For Routing Params add : before the param
//!!!! name set here is what we fetch for in useParams
<Route path="/users/:userId" element={<UserProfilePage />} />;

//if no path match then this route (goes for all)
//HAS to be last in Routes nesting
<Route path="*" element={<NotFoundPage />} />;

//How param to set for links:
//use Link or NavLink

//users is the fetch api object
{
  users.map((user) => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));
}

//How to fetch param:
import { useParams } from 'react-router-dom'; // Import useParams

function UserProfilePage() {
  const { userId } = useParams(); // Call useParams to get the parameter values
}
