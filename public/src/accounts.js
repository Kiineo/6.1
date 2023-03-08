function findAccountById(accounts, id) {
  
  return accounts.find((v)=>{return v.id == id})
  
}

function sortAccountsByLastName(accounts) {
  
  
  let solutionArr = accounts.sort((a,b)=> a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1)
  
  return solutionArr
}


function getTotalNumberOfBorrows(account, books) {
 
  let counter = 0
  for(let i = 0; i < books.length; i++){
    
    let currentAccount = books[i].borrows
    
   for(let j = 0; j < currentAccount.length; j++){
    if(currentAccount[j].id == account.id){counter++}
    
   }
 
  }
  return counter
}

function getBooksPossessedByAccount(account, books, authors) {
  
let solutionBook

  let currentAccountNumber = account.id

  //find the book and change the returned object to have a name property with the author name

  for(let i = 0; i < books.length; i++){
    let currentBook = books[i]

      for(let j = 0; j < currentBook.borrows.length; j++){
        let currentBorrowArr = currentBook.borrows
        if(currentBorrowArr[j].id == currentAccountNumber && currentBorrowArr[j].returned == false){
          
          solutionBook = currentBook
        }
      }


    }
    console.log(solutionBook)
    let currentBookAuthorName
let currentBookAuthorId = solutionBook.authorId
console.log(currentBookAuthorId)

for(let j = 0; j < authors.length; j++){
  let currentAuthor = authors[j]
  if(currentAuthor.id == currentBookAuthorId){
    currentBookAuthorName = currentAuthor.name
  }
}
solutionBook.author = {}
solutionBook.author.name = currentBookAuthorName

let solution = [solutionBook]
console.log(solution)

console.log(solution.length)
console.log(solution[0].author.name)
console.log(solution[0].title)

return solution



  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};