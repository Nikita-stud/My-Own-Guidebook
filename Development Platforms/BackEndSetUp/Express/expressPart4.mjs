//Lets say this data is in the database
const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 150 },
  { id: 3, name: 'Keyboard', price: 80 },
];

//We want to see if in url param, one of the items is available or else return error
app.get('/products/:id', (req, res) => {
  // 1. Get the id from the route parameter (as a string) and convert to number
  const id = Number(req.params.id);
  // 2. Find the product with that id returns true or false
  const product = products.find((p) => p.id === id);
  // 3. If not found, return a 404 error
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  // 4. If found, return the product as JSON
  res.json(product);
});

//Find fins matching route in the query param (less common for single data searches)
app.get('/products', (req, res) => {
  const id = Number(req.query.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});
