//ERRORS
res.json(); //Usually automatically returns 200 OK
res.status(404); //lets you set status to 404
res.status(404).json({ error: 'Product not found' }); //To add a message to the 404

200; //OK - Successful GET, PUT, PATCH
201; //Created - Successful POST
204; //No Content - Successful DELETE

400; //Bad Request - Invalid request data
401; //Unauthorised - Not logged in
403; //Forbidden - Logged in but not allowed
404; //Not Found - Resource does not exist
500; //Internal Server Error - Something went wrong on the server

GET; //	/users or /users/2	200 OK
POST; //	Add new data	/users	201 Created
PUT; // Replace	fields	/users/2	200 OK
PATCH; // Update fields	/users/2	200 OK
DELETE; //Remove item	/users/2	204 No Content

if (!product) {
  return res.status(404).json({ error: 'Product not found' });
}
//400 Invalid data
if (isNaN(id)) {
  return res.status(400).json({ error: 'Invalid user ID' });
}
//401 Missing or invalid authentication
const token = req.headers.authorization;
if (!token) {
  return res.status(401).json({ error: 'Authentication required' });
}
//403 Authenticated but not authorized
if (req.user.role !== 'admin') {
  return res.status(403).json({ error: 'Admin access required' });
}
//422 Valid format but invalid data
const { email } = req.body;
if (email && !email.includes('@')) {
  return res.status(422).json({ error: 'Invalid email format' });
}

//500 Internal Server Error
