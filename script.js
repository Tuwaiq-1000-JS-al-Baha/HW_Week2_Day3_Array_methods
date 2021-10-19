const friends = ["Melissa", "Marc", "Andrew", "Nick"]

friends.forEach(function (friend) {
  console.log("I have a friend named " + friend)
})
/////////have a friend named <friend's name>" for each friend
friends.forEach(function (friend) {
  console.log(friend)
})
///map
const friendss = ["Melissa", "Marc", "Andrew", "Nick"]

friendss.map(function (friend) {
  console.log("I have a friend named " + friend)
})
/////map
const numbers = [1, 2, 3]
const numbersTimesTwo = numbers.map(function (num) {
  return num * 2
  console.log(num)
})
console.log(numbersTimesTwo)
console.log(numbersTimesTwo * 2)

///callback
const timesTwo = numbers.map(num => num * 2)
console.log(numbers * 2)
