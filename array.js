const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

// numsTimesTwo --> [1, 4, 6]
const numbers = [1, 2, 3];
const timesTwo = numbers.map(num => num * 2);
console.log(timesTwo)
///////////////////////////////////////////
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
 const num1 = instructors.map ((instructor) => {
    return instructor + " is awsome"
 })
console.log(num1)

