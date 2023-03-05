function helloWorld(){
    console.log("Hello World")
}

const anArray = [1,'Chris', 2.3, helloWorld ]

console.log('some basic shows')
console.log(anArray.length)
console.log(anArray)
console.log(anArray[0]) // 1
console.log(anArray[1]) // Chris
console.log(anArray[19]) // undefined
console.log(anArray.indexOf('Chris')) // 1

console.log()
console.log('in a for loop')
for (var x in anArray){
    console.log(x, ':', anArray[x])
}

console.log()
console.log('Writing with forEach')
function writeAThing(theThing, index) {
    console.log(index, '->', theThing)
}
anArray.forEach(writeAThing)
// we could also
// anArray.forEach((thing,index) => console.log(index, '=', thing))



console.log()
console.log('Adding new things')
anArray[anArray.length] = 'New Thing 1' // why would the length always be the next possible index?
anArray.push('New Thing 2')
console.log(anArray)