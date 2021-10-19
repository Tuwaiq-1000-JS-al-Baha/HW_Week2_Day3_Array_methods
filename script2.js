//Question2
const numbers = [1, 5, 8];

let numbersSquared = numbers.map(function (number) {
    return Math.pow(number, 2)
    // return number ** 2
})

console.log(numbersSquared)

// numbersSquared [1, 25, 64]


//Question2Bouns
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];



const instructorsArray = instructors.map((number) => console.log('Hi ' + number))


