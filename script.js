const friends = ["Melissa", "Marc", "Andrew", "Nick"];
friends.forEach(function(friend) {
  console.log("I have a friend named " + friend);
});

// Q1 // logs out "I have a friend named <friend's name>" for each friend

const friends1 = ["Melissa", "Marc", "Andrew", "Nick"];
friends1.forEach(function(friend){
  console.log("I have a friend named" + friend.toLowerCase())
})

// Q2 //  numsTimesTwo --> [1, 4, 6]

const numbers = [1, 2, 3];
const numbersTimesTwo = numbers.map(function(num) {
  return num * 2;
});

/*--- using an arrow function for the callback ---*/
const timesTwo = numbers.map(num => num * 2);
console.log(timesTwo);

//  Create an array that has the numbers of the array numbers squared

const numbers4 = [1, 5, 8]
const squarednumber = numbers4.map(function(numbers4){
  return numbers4 * numbers4
}) 
console.log(squarednumber);

// Bonus +  Question 3: Use an arrow function inside map()

const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const instructor9 = instructors.map ((instructor) => { 
  return instructor + " is awesome"
})
console.log(instructor9);