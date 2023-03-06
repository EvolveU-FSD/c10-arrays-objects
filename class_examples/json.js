// const someJSON = `[
//     {
//         "name": "Chris",
//         "gpa": 7
//     },
//     {
//         "name": "Danielle",
//         "gpa": 12
//     }
// ]
// `

// const someObject = JSON.parse(someJSON)
// console.log(someObject)

const someObject = {
    name: 'Chris',
    gpa: 3.7
}

const stringified = JSON.stringify(someObject)
console.log(stringified)

const someNumber = "3"
const stringifiedNumber = JSON.parse(someNumber)
console.log(stringifiedNumber)