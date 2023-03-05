const someStuffies = [
    'Mr Bear',
    'Petal-Pop',
    "Twiggle",
    "Forest"
]

const length = someStuffies.length
const aRandomNumber = Math.random()
console.log('number from 0-1 (but not 1)', aRandomNumber)
const aRawRandomIndex = aRandomNumber * length
console.log('number from 0-array length', aRawRandomIndex)
const aRandomIndex = Math.floor(aRawRandomIndex)
console.log('random index on array', aRandomIndex)

const randomStuffy = someStuffies[aRandomIndex]
console.log("Tonight's protector will be", randomStuffy)

// we could have done
const randomStuffy2 = someStuffies[Math.floor(Math.random()*someStuffies.length)]
console.log('The backup will be', randomStuffy2)
