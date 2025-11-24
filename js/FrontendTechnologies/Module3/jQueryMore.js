//Creating new elements
//you can store html inside elements and then call them
html(); //without text it will display html it was called on
$('example').html('<p>Hello</p>'); //Will delete all code inside the example and add that html

//Creates plane text
text();
$('p:last').text('Hello');

prepend(); // adds before content
append(); // adds on top of existing
$('#para1').append('Added text onto');

appendTo(); //changes place to from
prependTo(); //changes place from to
$('#example p:last').prependTo('#example p:first');

after(); // adds after selected target
before(); // adds before each
$('p').before('<p>Hello</p>');

//Basically after() but reversed writing style
insertBefore(); // Create content, then insert it before target
insertAfter(); // Create content, then insert it after target
$('<div>New content</div>').insertAfter('#example');

clone(); //creates a clone

//function
function buttonClick() {
  //get text
  const text = $('#para1').text();
  //add text 2 times after button
  $('<p>' + paraText + paraText + '</p>').insertAfter('button');
}
