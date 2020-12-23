const fs = require('fs')


const book = {
    title: 'lol',
    author: 'ineesh',

}
const JSONbook = JSON.stringify(book)
// console.log(JSONbook)

// const paasebook = JSON.parse(JSONbook)
// console.log(paasebook.title)

// fs.writeFileSync('1_json.json', JSONbook)

 const data = fs.readFileSync('1_json.json')
 const data_str = data.toString()
 const data_str_par = JSON.parse(data_str)

 data_str_par.name = 'ineesh'
 data_str_par.age = '18'

const data_2 = JSON.stringify(data_str_par)
console.log(data_2)

fs.writeFileSync('1_json.json' , data_2)

// output = lol


 