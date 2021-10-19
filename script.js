// Question 1:

const friends = ["Melissa", "Marc", "Andrew", "Nick"];


friends.forEach(function (friend) {
    console.log("I have a friend named " + friend.toLocaleLowerCase());
})


// Question 2:

const numbers = [1, 5, 8];
const squared = numbers.map(function (num) {
    return num ** 2;
}); console.log(squared);



// Question 3:

const names = ["Alex", "Danial", "Morgan", "ben", "Micah", "Jims"];

const howsAwesome = names.map(name => name + " is awesome");
console.log(howsAwesome)

