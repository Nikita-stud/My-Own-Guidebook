//Add in index.ts above route
//defines structure
interface Product {
  id: number;
  name: string;
  price: number;
}
//checks and has examples
const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 150 },
  { id: 3, name: 'Keyboard', price: 80 },
];

//Add in index.ts below route
// /products returns array as JSON
app.get('/products', (req, res) => {
  res.json(products);
});

//Now, if you visit http://localhost:3000/products,
// you’ll see the list of products in JSON format.
