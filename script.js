//Q1
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (friend) {
    console.log("I have a friend named " + friend.toLowerCase());
});
//.....
console.log("____")

//Q2
const numbers = [1, 5, 8]
const squar = numbers.map(function (num) {
    console.log(num ** 2)
});
//.....
console.log("____")
//Q3
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"]
const add = instructors.map(function (instructors) {
    return instructors + "  is awesome"

});
console.log(add)
