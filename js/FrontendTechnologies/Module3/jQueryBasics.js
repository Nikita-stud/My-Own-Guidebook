//JS library
//Either download it or connect to CDN
//rathe use the link because the browser maybe already saved the jQuery from somewhere
//and does not need to download each time
//IF download then have it same place all other files are
//<script src="jquery-3.6.0.js"></script> has to be attached
//before the next script for it to work

//$ says we use jQuery, inside() is HTMl element
//action() function acts on selected elements
$('tag').action();

//ready prevents the code to run before tag finishes loading
$('#content').ready(function () {
  $('#content').append('<p>Hello World!</p>');
});

on('load', () => {}); //on fully load of imgs and page DONT USE!!!

//Same as waiting for page to load and then running
$(function () {});

//add h2 that is on this page already and add it inside container
$('#container').append($('h2'));

//Add CSS with attribute and value
//We can event get paragraph with class like this
$('p.className').css('color', 'blue');

//Can have multiple selectors
$('div, span, p.myClass').css('border', '3px solid red');

//you can return values like on("click") event
var color = $(this).css('background-color');

//To use any !"#$%&'()*+,./:;<=>?@[\]^`{|}~
// you have to have \\ before it like: id="foo.bar"
$('#foo\\.bar');

//selects all
$('*');

//HIERARCHY !!!
//div is parent, p is child, we select all p inside the divs
$('div > p').css('color', 'blue');
//inside the div the p with classA
$('div p.classA').css('border', '3px solid red');
//select any div following p element (must be siblings)
//if there is a div after div then div follows div and thus second div will not have any affect
$('p + div').css('background-color', 'yellow');
//same as + but selects all following p that are sibling
$('#para3 ~ p').css('font-size', '20px');

//FILTERS !!!
$('#example p:first').css('color', 'blue');
$('#example p.classA:even').css('border', '3px solid blue');
$('#example p:not(p:eq(2))').css('font-family', 'Comic Sans MS');
first; // :first-child
last; // :last-child
even; // index % 2 === 0 so 0,2,4,6,8
odd; // index % 2 !== 0
gt(); // index > n  so if gt(1), Everything after index 0 and 1
lt(); // index < n
eq(); // index === n
not(); // index !== n Exm: not(p:eq(2)) = not match p that is index 2, so all the index besides 2
animated; //elements that are being animated
focus; //currently focused on elements

//in a link get attribute rel="nofollow"
$("a[rel='nofollow']");

//if p has specified any class
$('p[class]').css('color', 'blue');
//if p has id of para1
$('p[id=para1]').css('background-color', 'yellow');
//if p has id that starts with para
$('p[id^=para]').css('border', '3px solid red');
//same as before but also contains value land="en-", can be lang="en-biwebfib"
$('p[id^=para][lang*=en-]').css('font-size', '30px');

//ADVANCED FILTERS !!! have : if purple and . if blue, all need space or blue after()
contains(''); //filter all that contains certain text.
parent; //elements that have at least one child node (can be an element or text).
has(); //contain at least one element that matches the specified selector.
first - child;
last - child; //elements that are first/last child of their parent.
first - of - type;
last - of - type; //elements that are the first/last among all the siblings of the same element name.
nth - child(); // select n-th child of their parent, we can use the n variable, for example,
// nth-child(2n) will select all even children. 2-4-6 not 0

//TRAVERSING !!!
children(); //all children
each(); //loop for all children each((index, element)=>{})
parent(); //direct parent
parents(); //all parents
parentsUntil(); //all until between 2 arguments
find(); //finds element
siblings(); //all elements on same level
next(); //next sibling (same level)
nextAll(); //all next siblings
nextUntil(); //all siblings between 2 arguments
prev();
prevAll();
prevUntil();

//functions
function action1() {
  $('#example div:last').css('background-color', 'yellow');
}
