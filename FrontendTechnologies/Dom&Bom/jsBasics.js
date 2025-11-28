//Get url, both works since document is already stored
//in our web page.
window.document.URL; //window.doc can access global variables
document.URL; //doc. access local variables and only then global if non found

document.forms; //Shows all forms on the page
document.images; //Shows all img on the page
document.links; //Shows all links

//<main>
//  <p>
//  </p>
// </main>
const x = document.getElementById('main');
const y = x.getElementsByTagName('p'); //return array of all elements with that ID

// <p name="para" class="para"></p>;
const a = document.getElementByClassName('para'); //class name search
const g = document.getElementsByClassName('para'); //gets html collection of items

const b = document.querySelectorAll('p'); //get all p
const c = document.querySelector('p.para'); // get p with class example
const d = document.getElementsByName('para'); //if we add name value

const z = document.getElementById('artictle').querySelectorAll('p'); // get article and all p inside of it

console.dir(); //shows tree structure of the dom

z.style.backgroundColor = 'red'; //add style
z.className = 'para2'; // add class
z.id = 'ra'; // add id
imgs[0].src; // show link
imgs[0].width; //shows width

y[0].style.fontSize; //only work for sizes created yourself
window.getComputedStyle(y[0]).fontSize; //browser default sizes
//or
window
  .getComputedStyle(document.getElementById('z'), null)
  .getPropertyValue('font-size');

alert(); //text pop up
prompt(); //text with submission or not, can have default value after a comma
confirm(); //yes no option, null is empty sting upon cancel
//if no, we can add text into <pre> as they like it in the HTML

setTimeout(); // runs once
setInterval(); // runs in a loop until cleared
window.clearTimeout();
window.clearInterval();

const interval = setInterval(function wait() {}, 1000); // also possible
clearInterval(interval);

//random color
const p = document.getElementById('p');
function changeCol() {
  setInterval(() => {
    let number = Math.random();

    let color = 'blue';
    if (number <= 0.5) {
      color = 'red';
    }
    p.style.backgroundColor = color;
  }, 5000);
}
changeCol();
