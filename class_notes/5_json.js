const aStudent={
    name: "Chris",
    id: 4523,
    GPA: 3.7
}

console.log(aStudent)

console.log()
console.log('Converted to JSON')
const aStudentJson = JSON.stringify(aStudent)
console.log(aStudentJson)

console.log()
console.log('parsed')
const aStudentParsed = JSON.parse(aStudentJson)
console.log(aStudentParsed)

console.log()
console.log('from scratch')
const aStuffyString = `
    {
        "name": "Mr Bear",
        "color": "formerly white",
        "year": 2007,
        "countries": ["Canada", "England", "Scotland", "France", "Mexico"]
    }
`
const aParsedStuffy = JSON.parse(aStuffyString)
console.log(aParsedStuffy)

console.log()
console.log('just a number')
const numberString = '37'
const numberParsed = JSON.parse(numberString)
console.log(numberParsed)

console.log()
console.log('just a string')
const stringString = '"Chris"'
const stringParsed = JSON.parse(stringString)
console.log(stringParsed)