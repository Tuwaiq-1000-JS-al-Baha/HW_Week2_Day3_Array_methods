const friends = ["Haifa", "Hanan", "Asma", "Ruba"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase(friends));
});

const numbers = [1, 2, 3];
const numbersTimesTwo = numbers.map(function(num) {
  return num * 2;
});
console.log(numbersTimesTwo)


const timesTwo = numbers.map(num => num * 2);
console.log(timesTwo)

const numbers2 = [1, 5, 8]

// numbersSquared --> [1, 25, 64]
let result = numbers2.map(function(numbers2) {
    return numbers2*numbers2
})
console.log(result)

const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
let name= instructors.map(function(name){
    return name;

});
instructors.forEach(function(one){
    console.log("is awesome ", one)
})
console.log(name)

