//Create Object Literal with description method
const magazine = {
  title: 'selveEleven',
  issue: '24/08/2025',
  editor: 'Bob',
  description() {
    return `Magazine ${this.title}, issued on ${this.issue}`;
  },
};

//Construction function
function LibraryItem(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
LibraryItem.prototype.description = function () {
  return ` ${this.title}, issued on ${this.year}, by ${this.author}`;
};

//Create Objects and log describe
const firstMagazine = new LibraryItem('N', 'No', 1998);
const secondMagazine = new LibraryItem('M', 'Mo', 1998);
console.log(firstMagazine.description);
console.log(secondMagazine.description);

//Destructure Object,change title and add gender with default value
const { title: magTitle, gender = 'General Tech' } = magazine;
console.log(magTitle);
console.log(gender);

//Create constructor with method instead of prototyping
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  description() {
    return ` ${this.title}, issued on ${this.year}, by ${this.author}`;
  }
}

//extend book for ebook
class EBook extends Book {
  //inherit from parent and one more
  constructor(title, author, year, fileSize) {
    //we get values from parent
    super(title, author, year);
    //set new property
    this.fileSize = fileSize;
  }
  //Override description in this construction
  description() {
    return ` ${this.title}, issued last ${this.year}, by ${this.author}`;
  }
}

//Add them to Array
const mixed = [
  magazine,
  new LibraryItem('A', 'a', 1),
  new Book('B', 'b', 2),
  new EBook('C', 'c', 3),
];

//Loop and call description on each if present
for (const mix of mixed) {
  console.log(mix.description());
}
