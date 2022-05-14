function createTitle(bookIdea) {
  return `The ${bookIdea}`;
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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,


  // calculatePageCount,
  // writeBook,
  // editBook
}
