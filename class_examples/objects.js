// const student = {
//     name : 'Chris',
//     gpa: 3.0,
//     // "home address": '88 Foo street'
//     sayHi: ()=>{console.log('hi')}
// }

// console.log(student.name)
// // console.log(student['home address'])

// student.graduated = true
// console.log(student)

// student.sayHi()

// const soup = {
//     name: 'Vegetable',
//     heatingTime: 190
// }

// const soup_heating = soup.heatingTime

// soup.name = 'pho'

// soup.warning = 'maybe be spicy'
// console.log(soup)

// delete soup.warning
// console.log(soup)

// const school = {
//     students: [
//         {name: 'Chris', gpa: 3},
//         {name: 'Danielle', gpa: 4}
//     ],
//     address: 'library',
// }
// school.students.push({name: 'jen', gpa: 3.9})
// console.log(school)

// const kindaArrayish = {
//     0: 'zero',
//     1: 'one'
// }

// console.log(kindaArrayish[0])

// const a = [1,2,3]

// for(var aIndex in a)
// {
//     console.log(a, '->', a[aIndex])
// }

// const o = {
//     name: 'chris',
//     gpa: 3.7
// }
// console.log(o.name)
// o.graduated = true

// const empty = {}

// for (var oKey in o){
//     console.log(oKey, '->', o[oKey])
// }

// const marks = {
//     chris: 3.7,
//     danielle: 4
// }

// console.log(Object.keys(o))
// console.log(Object.values(o))

// SPICY!!
const student = {
    name: 'chris',
    sayHi: function (){
        console.log('hi from', this.name)
    }
}

function sayHi(student){
    console.log('hi 2 from', student.name)
}
