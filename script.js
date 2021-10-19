//Question 1 :

const friends = ["Khaled", "Ali", "Abdullah", "Mohammed"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

//________________________________________________________


console.log('____________________________________________')


//Question 2 :


const numbers = [1, 5, 8]

const numbersTimesTwo =numbers.map(number => number * number) 
  
console.log(numbersTimesTwo)

//_______________________________________________________


console.log('____________________________________________')


//Question 3 :

const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];

const isAwesome = instructors.map( (instructor) => {
    return instructor + ' is awesome '
})
console.log(isAwesome)

//______________________________________________________


console.log('____________________________________________')