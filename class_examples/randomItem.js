const array = [
    {name: 'chris', gpa: 3.7, absenses: 3}, 
    {name: 'greg', gpa: 4, absenses: 4}, 
    {name: 'danielle', gpa: 5}
]

function randomEntry(anArray) {
    // console.log(anArray)
    // console.log(anArray.length)
    let randomIndex = Math.random()*anArray.length
    randomIndex = Math.floor(randomIndex)
    return anArray[randomIndex]
    // return myArray[Math.floor(Math.random()*myArray.length)]
}

console.log(randomEntry(array))