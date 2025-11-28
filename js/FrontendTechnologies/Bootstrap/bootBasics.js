//CDN though css link and js link or download Bootstrap from (npm) NODE Package Maker and link to html
//https://getbootstrap.com/docs/5.3/getting-started/download/
//zip folder with css and js

/* GENERAL INFO
 * Auto applies some css when added to project,
 * called Reboot of css
 * adds stuff like margin 0, font families etc.
 * if width and padding is set, the width is max and will add padding on inside
 * 
 * In _variables.scss you can modify stuff of your bootstrap without losing it to updates of main bootstrap file
  $container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
 */

/* Bootstrap is build on break point
 * contain= wraps grid system
 * row = each row
 * column = columns inside rows
 *
 * starts building for xs size
 */

bootstrap.css; //files are original, liked to html
bootstrap.css.map; //maps compiled css, helps with debugging in console
bootstrap.css.rtl; //right to left eversion of bootstrap, flips for languages that read right to left (arabic etc.)
bootstrap.min.css; //mini file sized versions for production

ems; //size relative to parent element, normal in html by start
rems; // size relative to root element (HTML tag), used in bootstrap

//SIZE OF WINDOW
container; // default container
container - sm; // 100% until 576 px
container - md; // 100% until 768 px
contained.lg; // 100% until 992 px
container.xl; // 100% until 1200 px
container.xxl; // 100% until 1400 px
container - fluid; // always width = to 100%

//COLORS
primary; //blue
bg - primary;
secondary; //gray
success; //green
text - success;
danger; //red
warning; //yellow
info; //cyan
light; //light grey
dark; //dark grey

//SIZES
m; //margin
p; //padding
top, bottom, start, end; //Thats how the p or m goes around if to set space, because of support for languages from left-to-right and right-to-left
s; //start, right to left or left to right, depending on the language
e; //end, left to right or right to left
x; //horizontal
y; //vertical
0 - 5; //numbers range from to, margin or padding to $spacer * .25 more each higher number
pe - 5;

//BEHAVIOUR
d - //display (no space like in the example)
  none;
d - none; //display none from xs size
d - md - none; //display none from md size
inline;
inline - block;
block;
grid;
table;
table - cell;
table - row;
flex;
inline - flex;

//POSITION
position - static;
position - absolute; //top- ,left-, start-, end- etc
position - relative;
position - fixed;
position - sticky;

//Replacement of info
h1 - h6; //you can add this to class in a div and it will behave like a header
display - 1 - display - 6; //Almost like header but just stuff that is more noticeable
fs - 1 - fs - 6; //font-size
fw - 1 - fw - 6; //font-weight
fst - italic; //font size (only two)
fst - normal;
text - wrap; // breaks the text to the next line but doesn’t break the words;
text - nowrap; // doesn’t break the text;
//text-break // always breaks the text if necessary, even breaking the words.
text - lowercase; // all words lowercase;
text - uppercase; // all words uppercase;
text - capitalize; // all words capitalised
align - baseline;
align - top;
align - middle;
align - bottom;
align - text - top;
align - text - bottom;

//LISTS (display more table like)
list - group; //list group, add to any element to create a list
list - group - item; //li, or any single item of a list, can be even buttons
list - group - item - action; //list items that are clickable will get a style on hover and click
// <button class="list-group-item list-group-item-action" onclick="this.classList.toggle('list-group-item-success')">

active; //turns blue, selects item
disable; //turns grey (great for list items too)

//TABLE
table; //add to table element
table - secondary; // changes colour to primary, secondary, dark,
table - striped; // make the colour of even and odd items slightly different.
table - hover; // make items highlight on hover.
table - active; // add to highlight it.
table - bordered; // add to add borders to the table.
table - borderless; // add to remove borders from the table.
table - responsive - xxl; // wrap the table with the div containing this class to create a responsive table

//IMG & POSITIONING
img - fluid; // makes picture scale responsively
img - thumbnail; // creates a small sized width and heigh, adds 1px rounded border
rounded; //adds more px to rounded

border; // adds all borders to the box;
border - top; // adds chosen border to the box;
border - 0; // removes all borders;
border - top - 0; // removes chosen border from the box;
border - primary; // sets the border's colour (a colour variant is primary, secondary, etc.);
border - 1; // sets the border width;
rounded - top; // applies the border-radius to selected borders;
rounded - 0; // sets the border radius 1-3

float - start; // aligns the picture to the start (right or left, depending on the direction of the browser).
float - end; // aligns the picture to the end.

figure - img; // defines the image is the part of the <figure> element
figure - caption; // add this to the <figcaption> element to make it look like an image caption; by default, it is aligned to the start; we can change it by adding the additional class “text-end”.

//WIDTHS & HEIGHTS
w - 25; // sets to % width of the parent’s width;
h - 25;
w - auto, h - auto;
mh; // classes, we’ll set max width/height instead.
mw;
min - vw - 100; //size in % relative to viewport
min - vh - 100;

//ONCLICK
user - select - all; // on click, the entire element is selected;
user - select - auto; // standard way of text selection;
user - select - none; // text can’t be selected;
pe - none; // pointer events are disabled, the element doesn’t react on click event, and the cursor doesn’t change on hover either;
pe - auto; // pointer events are enabled (this is the default).

//ICONS Bootstrap
//we need to link SVG css file to our project
//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
//Through Bootstrap icons website we can copy code now
