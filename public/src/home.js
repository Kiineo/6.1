function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let counter = 0
  for(let i = 0; i < books.length; i++){
    let currentBook = books[i]
    let borrowsCurrent = currentBook.borrows

  let borrowsArr = []
borrowsCurrent.map((v,idx)=>{borrowsArr.push(v.returned)})

console.log(borrowsArr)

    if(borrowsArr.includes(false)){counter++}
  }
  return counter
}

function getMostCommonGenres(books) {

  let genres = []
  for(let i = 0; i < books.length; i++){
    genres.push(books[i].genre)
  }


  let counter = {}

  for (const value of genres){counter[value] = counter[value] ? counter[value] + 1 : 1}
  
let keys = Object.keys(counter)
let values = Object.values(counter)

let solution = []

for(let i = 0; i < keys.length; i++){
let currentObj = {}
currentObj.name = keys[i]
currentObj.count = values[i]
solution.push(currentObj)
}

solution.sort((a,b)=>{return b.count - a.count})

const finalSolution = solution.filter((v,idx)=>{return idx<5})
return finalSolution

}

function getMostPopularBooks(books) {
let solution = []
for(let i = 0; i < books.length; i++){
let currentObj = {}
let name = books[i].title
let count = books[i].borrows.length
currentObj.name = name
currentObj.count = count
solution.push(currentObj)
}




solution.sort((a,b)=>{return b.count - a.count})

let finalSolution = solution.slice(0,5)
return finalSolution
}

function getMostPopularAuthors(books,authors) {
  
    let nonSenseArr = [1,2,3]
 let nonSenseSolution = nonSenseArr.reduce((a,b)=>a+b,0)
 console.log(nonSenseSolution)
let solution = []
for(let i = 0; i < books.length; i++){
let currentObj = {}
let name = books[i].authorId
let count = books[i].borrows.length
let thisNameSolution

for(let j = 0; j < authors.length; j++){
  let fullName = []
if(authors[j].id == name){
  fullName.push(authors[j].name.first)
  fullName.push(authors[j].name.last)
  let nameSolution = fullName.join(' ')
thisNameSolution = nameSolution
}

}



currentObj.name = thisNameSolution
currentObj.count = count
solution.push(currentObj)
}




solution.sort((a,b)=>{return b.count - a.count})
function findSolution(input) {
  return input.slice(0,5)
}
let finalSolution = findSolution(solution)
return finalSolution
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
