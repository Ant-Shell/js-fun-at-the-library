function shelfBook(bookTitle, bookShelf) {
  if (bookShelf.length < 3) {
     bookShelf.unshift(bookTitle);
  }
  // return bookShelf;
}

function unshelfBook(bookTitle, bookShelf) {
  for (var i = 0; i < bookShelf.length; i++)
    if (bookShelf[i].title.includes(bookTitle)) {
      bookShelf.splice(i, 1)
    }
};

function listTitles(bookShelf) {
  var titles = [];
  for (var i = 0; i < bookShelf.length ; i++) {
    titles.push(bookShelf[i].title)
  }
  return titles.join(", ")
}

function searchShelf(bookShelf, bookTitle) {
  for (var i = 0; i < bookShelf.length ; i++) {
    if (bookShelf[i].title === bookTitle) {
      result = true;
  } else {
    result = false;
  }
}
    return result;
  }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
