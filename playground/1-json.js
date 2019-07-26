const fs = require('fs')
// const book = {
//     title: 'Ego',
//     author: 'Somebody'
// }

// const bookJSON = JSON.stringify(book)
// const parsedData = JSON.parse(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())