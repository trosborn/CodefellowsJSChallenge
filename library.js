//Use object-oriented JavaScript to model a public library (w/ three classes: Library, Shelf, & Book). *
//The library should be aware of a number of shelves. Each shelf should know what books it contains.
// Make the book object have "enshelf" and "unshelf" methods that control what shelf the book is sitting on.
//The library should have a method to report all books it contains.

function Library(shelfNum) {
  this.shelves = new Array();
  for (var i = 0; i < shelfNum; i++) {
    this.shelves[i] = new Shelf();
  }
  //console.log(this.shelves);
}


function Shelf() {
  this.books = new Array();
}

function Book(bookTitle) {
  this.bookTitle = bookTitle
  this.shelf = null;
}

Book.prototype.enshelf = function(shelf) {
    this.shelf = shelf
    shelf.books.push(this.bookTitle);    
 }

 Book.prototype.deshelf = function() {
    books = this.shelf.books
    books.splice(books.indexOf(this.bookTitle));
    this.shelf = null;
 }


var publicLibrary = new Library(2);
var book1 = new Book('Twilight');
var book2 = new Book('LotR');
book2.enshelf(publicLibrary.shelves[0]);
book1.enshelf(publicLibrary.shelves[0]);
console.log(publicLibrary.shelves[0]);
book1.deshelf();
console.log(publicLibrary.shelves[0]);