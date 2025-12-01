//ajax retrieves data automatically and thus already as JS object
//So no need to response.json
//API KEY in params for access

$.ajax({
  url: 'https://api.giphy.com/v1/gifs/random?api_key=bejneIEUBj45902425nbv3irhwekh&rating=g',
  success: function (response) {
    console.log(response);
  },
});

//ACCESS DATA & ERROR HANDLING
$.ajax({
  url: 'https://api.giphy.com/v1/gifs/random?api_key= YOUR_WRONG_API_KEY&rating=g',
  success: function (response) {
    var originalUrl = response.data.user.avatar_url;
    $('body').append("<img src = '" + originalUrl + "'></img>");
  },
  error: function () {
    console.log('Something went wrong!');
  },
});
