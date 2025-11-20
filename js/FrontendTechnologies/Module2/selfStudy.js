const parent = document.getElementById('');
const newDoc = document.createElement('');
parent.appendChild(); //Adds to the end (One item only)
parent.prepend(); //Adds to the start (can add multiple things)
parent.append(); //Adds to the end (Multiple items)
parent.insertBefore(newDoc, parent.children[2]); //add before specific child

parent.children; //shows all children
parent.children[0]; //first child
parent.childNodes; //nodes +texts, comments etc

const firstP = document.body.getElementsByTagName('p')[1]; //gets second p in the body tag
link.getAttribute('alt'); //  get alt text

//navigator.appCodeName returns browser code name "Mozilla" always!!

//HTML Object Collection - forms,imgs,links all dac be accessed by document.forms, etc

//Static HTMl - same on each reload of page
//Dynamic HTML - JS changes the page on reload

//<p id="para1" class="para">The first paragraph</p>
//para.className = "para2"; will override the para class
