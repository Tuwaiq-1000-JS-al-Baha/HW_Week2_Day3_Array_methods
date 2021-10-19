const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (friend) {
    console.log("I have a friend named " + friend.toLowerCase());
});

console.log("------")

const numbers = [1, 5, 8]
const numbersSquared = numbers.map(function (num) {
    return num ** 2;
});
console.log("numbersSquared:", numbersSquared)
console.log("------")

const squared = numbers.map(num => num ** 2); //I used an arrow function
console.log("squared:", squared)
console.log("------")

const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const namesInstructors = instructors.map(name => name + " is awesome"); //I used an arrow function
console.log("instructors: ", namesInstructors)


