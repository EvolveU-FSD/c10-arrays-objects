const aStudent = {
    name: "Chris Desmarais",
    id: 4173,
    GPA: 3.7,
    "Street Address": '22 Boxwood Crescent'
}

console.log('some basic output')
console.log(aStudent)
console.log(aStudent.name)
console.log(aStudent.GPA)
console.log(aStudent['Street Address'])

console.log()
console.log('adding a city')
aStudent.city = 'Winnipeg'
console.log(aStudent)

console.log('adding a function')
function sayHello() {
    console.log('hello', this.name)
}
aStudent.sayHello = sayHello
aStudent.sayHello()