//Q1 add toLowerCsae
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

//Q2 map
const numbers = [1, 2, 3];
const numbersTimesTwo = numbers.map(function(num) {
  return num * 2;
})
console.log(numbersTimesTwo)

//---answer
const numberss = [1, 5, 8]
const timesTwo = numbers.map(num => num * 2);
console.log(timesTwo)

//reate an array that has the numbers of the array numbers squared
const numbers1 = [1, 5, 8]
const timesTwo1 = numbers1.map(num => num ** 2);
console.log(timesTwo1)

//**Bonus Question 2:**
//* Use an arrow function inside `map()`
//Given an array of instructors
const instructors1 = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const instructors2 = instructors1.map(instructor => console.log(instructor, "is awesom"))






