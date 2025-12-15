//In back end send request from front end are accessed differently
req.query; //params that are after ? in the URL (Values)
req.params; //names segments in URL like user/123 everything after ":"
req.headers; //get the header of the request
req.body; //get the body of POST/PUT/Patch request

/products/2 //URL param
req.params.id //How to access 2
/products?maxPrice=100 //URL query param 
req.query.maxPrice //How to access 100


//Example 1 Params
//:id means any given value in url after /
// You can name it whatever, it is only for you
// will be available as req.params.id.
app.get('/products/:id', (req, res) => {
  //id that is in form of exm /products/4
  // will be availbale as req.params where we can save it as a string
  const { id } = req.params; //
  // Use id to find a product...
  res.json({ message: `Id is: ${id}` }); //Id is: 4
});

//Example 2 Params
//Multiple route parameters (Always string to convert to number if needed)
app.get('/products/:productId/reviews/:reviewId', (req, res) => {
  const { productId, reviewId } = req.params;
  // Use productId and reviewId to find a specific review for a product...
  res.json({
    message: `Found review ${reviewId} for product ${productId}`,
  });
});

//Example 1 Query Params
// GET /products?maxPrice=100&category=books
app.get("/products", (req, res) => {
  //req.query has all the query params in the URL
  //properties as set names in URL
  const { maxPrice, category } = req.query;
  res.json({
    message: `Filtering products with maxPrice: ${maxPrice}, category: ${category}`,
  });
});
