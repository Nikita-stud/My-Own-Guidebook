//Flyweight pattern = way to optimize repetitive code

// WITH Flyweight - efficient
// Shared data (flyweight)
const genreData = {
  fantasy: { genre: 'Fantasy', description: 'Magical worlds...' },
  scifi: { genre: 'Sci-Fi', description: 'Future technology...' },
};

class Book {
  constructor(title, author, genreKey) {
    this.title = title;
    this.author = author;
    this.genreData = genreData[genreKey]; // reference to shared object
  }
}

// 1000 fantasy books = 1 shared genre object

// WITHOUT Flyweight - wasteful
class Book {
  constructor(title, author, genre, description) {
    this.title = title;
    this.author = author;
    this.genre = genre; // repeated across many books
    this.description = description; // repeated across many books
  }
}

// 1000 fantasy books = 1000 copies of "Fantasy" and its description
