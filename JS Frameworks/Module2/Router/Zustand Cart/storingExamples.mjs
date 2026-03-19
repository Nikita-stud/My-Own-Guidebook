//Core State = data saved as array or so (EXAMPLES BELOW)

//Derived State = data isnt saved as per say but rather calculated
//could be instead of items of array you only add together amount and price
//IS ACTUALLY BETTER BECAUSE WE DONT DUPLICATE and only focus on the single core state that exists somewhere for all to use
//here we would need memorization


// Example: To-dos state in a slice/store
[
  { id: 1, text: 'Kjøp melk', completed: false },
  { id: 2, text: 'Gå tur med hunden', completed: true },
  { id: 3, text: 'Les RTK dokumentasjon', completed: false },
];

// Example: Shopping cart items stored by productId for quick updates
{
  'prod123': { productId: 'prod123', quantity: 2 },
  'prod456': { productId: 'prod456', quantity: 1 }
}

// Example: Object withing Object User profile state
{
  userId: 'u789',
  details: {
    name: 'Silje Hansen',
    email: 'silje@example.com',
    preferences: {
      newsletter: true,
      theme: 'dark'
    }
  },
  status: 'active'
}