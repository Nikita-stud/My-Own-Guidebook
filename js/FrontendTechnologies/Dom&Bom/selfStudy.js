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
const row = table.insertRow(index); //adds <tr> row to table
const name = table.insertCell(index); //creates a <td> cell and inserts it instead of appending with extra lines of code
name.innerText = 'first name';

const rowSelected = document.querySelectorAll('tr')[row]; //select specific row of all tr

table.rows; //access all rows in table
table.rows.cells; // access all cells in that raw you specify
document.getElementById('myTable').rows[parseInt(rowNumber, 10)].cells; //Get all cells of a specific row specified by getting an integer from prompt

const index = select.selectedIndex; //Can get the index by selectedIndex
select.remove(index); // can remove my own html by index

// create table by rows and cols
button.addEventListener('click', () => {
  const body = document.querySelector('body');
  const table = document.createElement('table');
  const rows = Number(prompt('How many rows'));
  const cols = Number(prompt('How many columns'));

  for (let i = 0; i < rows; i++) {
    const rowCreated = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const colCreated = document.createElement('td');
      rowCreated.append(colCreated);
    }
    table.append(rowCreated);
  }
  body.append(table);
});

//dropdown
<select name="" id="fruits">
  <option>Apple</option>
  <option>Bob</option>
  <option>Appe</option>
  <option>Appledefe</option>
</select>;

//on load
window.addEventListener('load', () => {
  header.innerHTML = ` height: ${window.innerHeight} </br> width: ${window.innerWidth}`;
});
window.addEventListener('resize', () => {
  header.innerHTML = ` height: ${window.innerHeight} </br> width: ${window.innerWidth}`;
});

//select italic and change color on hover of img
const italicText = document.getElementsByTagName('i');
const img = document.getElementById('img1');

img.addEventListener('mouseover', () => {
  for (const italic of italicText) {
    italic.style.color = 'blue';
  }
});
img.addEventListener('mouseout', () => {
  for (const italic of italicText) {
    italic.style.color = '';
  }
});
