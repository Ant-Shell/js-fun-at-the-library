function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age:age,
    pronouns: pronouns};
}

function saveReview(userReview, reviews) {
  if (!reviews.includes(userReview)) {
    reviews.push(userReview)
  }
};

function calculatePageCount(bookPageCount) {
  for (var i = 0; bookPageCount.length; i++)
  return bookPageCount.length * 20;
}



function writeBook(bookTitle, bookCharacter, bookGenre) {
 return {
   title: createTitle(bookTitle).slice(4),
   mainCharacter: bookCharacter,
   pageCount: calculatePageCount(bookTitle),
   genre: bookGenre
 }
};

function editBook(title) {
 title.pageCount = title.pageCount * .75
 return title.pageCount;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,


  calculatePageCount,
  writeBook,
  editBook
}
