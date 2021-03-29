// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  //going to use filter to iterate thru every element and compare id with authors.id
return authors.find(auth=> auth.id === id);
}

function findBookById(books, id) {
  //using find to the book.id that matches the id given
  return books.find(book=> book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let holdBothArr =[]
  // The first array contains books _that have been loaned out, and are not yet returned_
  //id.borrows.returned will return the accounts that have all been returned
  let stillBorrowing = books.filter((book) => book.borrows[0].returned === false);
  // console.log(stillBorrowing)
  const returned = books.filter((book) => book.borrows[0].returned === true);
  holdBothArr.push(stillBorrowing, returned);
  return holdBothArr;
}

function getBorrowersForBook(book, accounts) {
  const holdBookBorrows = book.borrows;
  //  console.log(holdBookBorrows)
  //going to use map to iterate thru the holdBookBorrows
   const holdAnswerArr = holdBookBorrows.map(borrowID=>{
     let accId = borrowID.id;
     //using find() to find the appropriate account info for the each accID
     let account = accounts.find(acc => acc.id === accId)
     //Object.assign() to merge the info together
    return Object.assign(borrowID, account)
   })
   return holdAnswerArr.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
