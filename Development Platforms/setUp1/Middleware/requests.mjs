/*
POST request 
*/
//Front sends method, header and boyd as string

app.post('/users', (req, res) => {
  //We get send a new user with name and email
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  //Give that user an id With checking for User iterface
  const newId = Date.now();
  //Create new Object with the user and id
  const newUser: User = { id: newId, name, email };

  //Push onto existing user array somewhere
  //THis will push and save but only until you close or reload server
  //THat is why we need a database
  users.push(newUser);

  res.status(201).json(newUser);
});

/*
  PUT request - All fields required to change
*/

app.put('/users/:id', (req, res) => {
  //Get number of id from users/ in url
  const userId = Number(req.params.id);

  // Check if ID is a valid number
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  //Get the name and email they send to change to
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  //Find index of the item by id
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  //change and send back to user
  users[userIndex] = { id: userId, name, email };
  res.json(users[userIndex]);
});

/*
  PATCH request - Updates only specific field
*/
app.patch('/users/:id', (req, res) => {
  //SAME
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  //BIT CHANGE into at least one property to be present
  const updates = req.body;
  if (!updates.name && !updates.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  //SAME
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update only the provided fields
  //we spread the id object then spead out info of the patch object and it changes automatically the info in spread object
  users[userIndex] = { ...users[userIndex], ...updates };

  /*
  ...users[userIndex] is:
  { id: 1, name: "John", email: "john@example.com" }
  ...updates is:
  { email: "newemail@example.com" }
  */

  res.json(users[userIndex]);
});

/*
  DELETE request - deletes everything through id
*/
app.delete('/users/:id', (req, res) => {
  //SAME
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  //SAME
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // find index and deletes 1
  users.splice(userIndex, 1);
  // Return 204 No Content (successful deletion)
  res.status(204).send();
});
