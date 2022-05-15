function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
    return library;
}

function addBook(library, book) {
  if (book.genre === "fantasy" ) {
   library.shelves.fantasy.push(book)
} else if (book.genre === "fiction" ) {
   library.shelves.fiction.push(book)
} else if (book.genre === "nonFiction" ) {
   library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, book, genre) {

}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
