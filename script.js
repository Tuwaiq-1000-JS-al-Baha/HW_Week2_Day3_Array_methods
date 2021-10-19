
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (friend) {
    console.log("I have a friend named " + friend);
})
console.log("Q1-----------")
friends.forEach(function (friend) {
    console.log("I have a friend named " + friend.toLowerCase());
})
console.log("Q2---------------------")

const numbers = [1, 2, 3]
const numbersTimesTwo = numbers.map(function (num) {
    return num * 2
})
console.log(numbersTimesTwo)
// numsTimesTwo --> [1, 4, 6]


/*--- using an arrow function for the callback ---*/
const timesTwo = numbers.map(num => num * 2)
console.log(timesTwo)



const numberss = [1, 5, 8]

// const numbersSquared = numberss.map(function (number) {
//     return number ** 2
//     // [1, 25, 64]
// })
const numbersSquared = numberss.map(number => number ** 2)
console.log(numbersSquared)

console.log("Q3---------------------")
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];

const instructors2 = instructors.map(instructor => console.log(instructor, "is awesome")
)