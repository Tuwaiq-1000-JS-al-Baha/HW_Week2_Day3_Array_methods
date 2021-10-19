//Question 1 
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (friend) {
    console.log("I have a friend named " + friend.toLocaleLowerCase());
})
//Question 2 
const numbers = [1, 5, 8]
const numbers1 = numbers.map(function (number) { return number ** 2 })
console.log(numbers1)
//bonus Question 2 
const n = numbers.map(number => number ** 2)
console.log(n)
//Question 3
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"]
const instructors1 = instructors.map(function (intstructor) {
    return intstructor + " is awesome "
})
console.log(instructors1)