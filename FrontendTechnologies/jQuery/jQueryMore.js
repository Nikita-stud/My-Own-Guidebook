//Creating new elements
//you can store html inside elements and then call them
html(); //without text it will display html it was called on
$('example').html('<p>Hello</p>'); //Will delete all code inside the example and add that html

//Creates plane text
text();
$('p:last').text('Hello');
const text = $('button:first').text(); //text of first button

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

//MODIFY ELEMENTS
wrap(); // wraps matched elements with content.
$('div').wrap('<p>Hello</p>');
wrapAll(); // wraps the parent in content
unwrap(); // unwraps the parent
empty(); // removes all children
remove(); // removes an element with all its jQuery data and events from the page.
detach(); // removes an element from the page, keeping all its jQuery data and events.
replaceWith(); // replaces the element with content, we can also use a callback function instead.
$('#example p[id]').replaceWith('<div>replaced 1</div>');
replaceAll(); // replaces all elements with the specified content, similar to replaceWith(), but with source and target reversed.
$('<div>replaced 2</div>').replaceAll('#example2 p[id]');

//ATTRIBUTES
addClass(); // adds class
removeClass(); // removes one or multiple classes
hasClass(); // checks if any of the matched elements has the specified class.
attr(); // gets value or sets name and value
$('a').attr('title', 'Pokemon image');
$('a').attr({ name: 'value', value: 'ball' });

removeAttr(); // removes an attribute from each element in the matched set can be style too
$('a').removeAttr('title');
toggleClass(); // adds or removes one or more classes from each element in the matched set.
$('img').toggleClass('pokemonImage');

width();
height(); // get or set the element’s width/height.
$('#height').html($('#example').height());
innerWidth();
innerHeight(); // get or set the element’s inner width/height.
outerWidth();
outerHeight(); // get or set the element’s outer width/height.
offset(); // gets current coordinates relative to the document.
//Inside offset span, $("#example").offset() shows coordinates relative to document
//add together with , ...150px from top, 50 from left
$('#offset').html(
  $('#example').offset().top + ', ' + $('#example').offset().left,
);
position(); // gets current coordinates, relative to the offset parent.
$('#position').html(
  $('#example').position().top + ', ' + $('#example').position().left,
);

//YOU CAN ADD FUNCTIONS TO STYLES
css('font-size', 'function');

//EVENTS
on(); //on attaches one or more events
// Must use a named function for .off() to work
off(); // off unbind that or those event

function hideAllParagraphs() {
  $('p').hide();
}
$('#onButton').on('click', hideAllParagraphs); //on button that hides all p

$('#offButton').on('click', () => {
  //off button that gets on button and unbinds the function
  $('#onButton').off('click', hideAllParagraphs);
});

hover(); // hover
click(); // single click event
prompt(); // set property like "disabled", true
dblclick(); //double-click events.
resize(); // on the browser’s window resize.
$('#onButton').click(function () {
  $('#para1').hover(highlight, highlight);
});

//EVENT TYPES
type;
which;
target.id;
relatedTarget;
pageX;
pageY;
clientX;
clientY;
metaKey;
data;
data.name;

//EFFECTS AND ANIMATION
//speed - required parameter
//opacity - required parameter.

show(); // reveals the matched elements.
fadeIn(); // show() but fading animation.
slideDown(); //show(), makes but sliding animation.
$('p').show('slow'); //on button click shows this but slow

hide(); // hides the matched elements.
fadeOut(); // hide() but fading animation.
slideUp(); // hide() but sliding animation.
$('p').hide('slow', 'linear'); //on btn click hides slow and linear the content

toggle(); // changes the current visibility of the matched elements
fadeToggle(); // toggle(), but fading animation. speed
//takes in speed opacity easing callback
slideToggle(); // toggle(), but sliding animation.
$('p').toggle('fast', afterCompletion); //fast and calls a function

fadeTo(); // changes the elements’ opacity to a specified value.
$('p').fadeTo('fast', 0.5);

//Object containing new values - required
animate();

$('p').animate(
  {
    padding: 0,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 16,
  },
  'slow',
);

$('#button1').click(function () {
  $(this).animate(
    {
      width: 200,
    },
    5000,
  );
});
//FUNCTIONS
//if you want $(this) to work, you have to write function()
//And not use arrow function

function action1() {
  $('p').each(function () {
    let text = $(this).text();
    $(this).replaceWith(`<a href="https://youtube.com">${text}</a>`);
  });
}

function action2() {
  $('a').on('mouseenter', function () {
    $(this).css('font-size', '20px');
  });
  $('a').on('mouseleave', function () {
    $(this).css('font-size', '');
  });
}

function action3() {
  $('p').fadeOut('slow');
  $('button').slideUp('slow');
}

//EXTRA
text(String.fromCharCode(evt.charCode)); // Turns letters into Unicode chars

//Open new page
$(`#personalTable img`).click(function () {
  window.open($(this).attr('src'), '_blank');
});
