// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
    return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //using filter to return an array of unreturned books
  let holdAnswer = books.filter(borrowed=> borrowed.borrows[0].returned == false);
  return holdAnswer.length
}

function getMostCommonGenres(books) {
  const genres = [];
  books.forEach(book => {
    const match = genres.find(genre => genre.name === book.genre);
    if (match) {
      match.count++;
    } else {
      const name = book.genre;
      genres.push({ name, count: 1 });
    }
  });
  let result = genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1);
  result = result.slice(0,5);
  return result;
}

function getMostPopularBooks(books) {
  const popBooks = [];
const finalObj = [];
const allTitles = books.map(titles => { return titles["title"]; });
// console.log(allTitles)
//Going to return the number of borrows. which should be just the length of the array
const numberBorrowed = books.map(borrowed=>{
  popBooks.push(borrowed.borrows.length)
})
// console.log(popBooks)
//going to create an array of objects with these variables
  for(let i = 0; i <allTitles.length; i++){
finalObj.push({name: allTitles[i], count: popBooks[i]})
}
//going to sort them by highest count then slice
finalObj.sort((a, b) => (a.count < b.count) ? 1 : -1)
// console.log(finalObj)
return finalObj.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let highestFreq = [];
    for (let i = 0; i < books.length; i++) {
      //Using the destructuring technique to obtain authorId and borrows key
      let { authorId, borrows } = books[i];
      //borrows length signifies how often a particular author's book was borrowed
      let borrowCount = Object.values(borrows).length;
      //matching author id to books id
      let author = authors.find((writer) => writer.id === authorId);
      let authArr = Object.values(author.name);
      let name = authArr.join(" ");
      let resultObj = { name: name, count: borrowCount };
      highestFreq.push(resultObj);
    }
    //sort the object by the count
    let finalAnswer = highestFreq.sort((authA, authB) => (authA.count > authB.count ? -1 : 1)).slice(0, 5);
    return finalAnswer;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
