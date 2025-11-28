//.use without path name will handle all request that dont exist
//Place it after all code but before main error handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    //Will show GET etc and the URL
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

//Totally last code, handles all errors that occur in all other request
//If not added, when creating a request with an error will return just the HTML
//err:Error and all the rrest needs to be filled out too
app.use((err: Error, req, res, next) => {
  console.error('Error occurred:', err.message);

  res.status(500).json({
    error: 'Internal server error',
    //When in development mode (Place in .env just the name)
    //Then show real message, else show generic message
    message:
      process.env.NODE_ENV === 'development'
        ? err.message
        : 'Something went wrong',
  });
});
