const someStuffies = [
    'Mr Bear',
    'Petal-Pop',
    "Twiggle",
    "Forest"
]

function chooseAStuffy(){
    return someStuffies[Math.floor(Math.random()*someStuffies.length)]
}

console.log(chooseAStuffy())