// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
    //filtering the accounts by id. the shift() is needed
    //to remove answer from array format
    return accounts.filter(ids=> ids.id == id).shift();
}

function sortAccountsByLastName(accounts) {
  /*going to use sort to compare each element's lastName
  and structure all the elements in order by last name*/
return accounts.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
        for (let i = 0; i < books.length; i++){
      for (let j = 0; j < books[i].borrows.length; j++){
        if (account.id == books[i].borrows[j].id){
          counter++;
        }
      }
    }return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  let holdArr = [];
//going to search the borrows array for the account.id and to make sure it hasn't been returned
books.map(booksReturned=>{
  if(booksReturned.borrows.find(item=>item.id === account.id && !item.returned)){
    holdArr.push(booksReturned);
  }
  });
  //going to filter for authorId
holdArr.map(booksReturned=>{
  let author = authors.find(name=> name.id === booksReturned.authorId);
  booksReturned['author'] = author;
});
return holdArr;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
