//API
//Websites have data stored somewhere and thus need API to access them
//request is send to server containing one of the requests
//In short: services and how the communicate with each other using request and response
//database that has everything ordered for you and you can access it through what is called API
//API is ordering food from a list of dishes in a restaurant
//client: one who requests data
//server: database somewhere

GET; // get data sent to you.
POST; // adds new data on the server.
PUT; // updates data on the server.
DELETE; // deletes data from the server.

//DATA FORMATS
//XML =old format, looks like html
//JSON = {} key, value data in Objects

//OLD way
var request = new XMLHttpRequest(); //Creates the request object, (empty envelope)
request.open('GET', 'https://hplussport.com/api/products'); //open sets up how and where WITHOUT calling it

request.onload = function () {
  //response comes as text string, we turn it into usable JS object
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);
};
request.send(); //Actually what sends the request

//NEW way
fetch('https://hplussport.com/api/products')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//KEY
//only users with the key will be able to get information from its API
//Some API take Key in their URL but it will be told clearly
// query after ?
// param after &
url: 'https://api.giphy.com/v1/gifs/random?api_key=bejneIEUBj45902425nbv3irhwekh&tag=squirres';

//RESPONSE
//Has both data and meta
//data is main response with objects
//meta is info about response itself, pages, total count, etc
const data = response.data;
const meta = response.meta;
