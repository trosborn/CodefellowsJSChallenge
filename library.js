//Use object-oriented JavaScript to model a public library (w/ three classes: Library, Shelf, & Book). *
//The library should be aware of a number of shelves. Each shelf should know what books it contains.
// Make the book object have "enshelf" and "unshelf" methods that control what shelf the book is sitting on.
//The library should have a method to report all books it contains.
//http://stackoverflow.com/questions/7106410/looping-through-arrays-of-arrays

function Library(shelves) {
  this.shelves = shelves
  numShelves = shelves.length
  alert("The number of shelves in the library is " + shelves.length)
  printBooks = function(publicLibrary) {
    if ( typeof(publicLibrary) == "object") {
        for (var i = 0; i < arr.length; i++) {
            printBooks(publicLibrary[i]);
        }
    }
}

function Shelf(books) {
  this.books = books
  alert names of books
}

function Book(title) {
  this.title = title
  function enshelf(shelf) {
    shelf.books.push(this)
  }
  function unshelf() {
    unshelf
  }
}

//testing

var publicLibrary = new Library([new Shelf(), new Shelf()])
var book1 = new Book("Twilight")

lib.report();
book1.enshelf(publicLibrary.shelves[0]);
Library.printBooks(publicLibrary)
book1.unshelf()
Library.printBooks(publicLibrary)
