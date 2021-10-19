
//**Question 1:**


const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (friend) {
    console.log("I have a friend named " + friend.toLowerCase())
});


//**Question 2:**


const numbers = [1, 5, 8]

const newNumbers = numbers.map(function (number) {
    return number * number
})
console.log(newNumbers);


//**Bonus Question 2:**


const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];

const newInstructors = instructors.map(instructor => instructor)

console.log(newInstructors)


//**Question 3:**


const myPartners = ['Rahf', 'Suaad', 'Sajmah']

const newPartners = myPartners.map(function (partner) {
    return partner + " is awesome"
})
console.log(newPartners)