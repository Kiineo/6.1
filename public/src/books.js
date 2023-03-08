function findAuthorById(authors, id) {
  for(let i = 0; i < authors.length; i++){
    if(authors[i].id == id){return authors[i]}
  }
  
}



function findBookById(books, id) {
  
  for(let i = 0; i < books.length; i++){
    if(books[i].id == id){return books[i]}
  }
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = []
  let notBorrowed = []
  for(let i = 0; i < books.length; i++){
    let currentBook = books[i]
    if(currentBook.borrows.every((v)=> {return v.returned == true}))notBorrowed.push(currentBook)
    else{borrowed.push(currentBook)}
      
    }
  let solution = [borrowed,notBorrowed]
  return solution
  }


function getBorrowersForBook(book, accounts) {
  //find a book and use the borrow array to find the account numbers of the people who have borrowed
  //return an array with their account information with their borrowed status added
  //limit the length to no more than 10 accounts per book

  let solution = []
  for(let i = 0; i < book.borrows.length; i++){
    let currentBorrow = book.borrows[i]
    let currentAccountId = currentBorrow.id
    let borrowStatus = currentBorrow.returned
    for(let j = 0; j < accounts.length; j++){
      if(accounts[j].id == currentAccountId){
        let currentAccountInformation = accounts[j]
        currentAccountInformation.returned = borrowStatus
        solution.push(currentAccountInformation)
      }
    }
  }
  console.log(solution.length)
    if(solution.length > 10){solution.pop()}
  return solution
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
