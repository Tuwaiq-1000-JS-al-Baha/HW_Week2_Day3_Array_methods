//Question1
const friends = ["Melissa", "Marc", "Andrew", "Nick"];


friends.forEach(function (friend) {
    console.log("I have a friend named " + friend);
});
// The solution
let friends1 = friends.forEach(function (friend) {
    console.log('log out each of my ', friend.toLocaleLowerCase())


});

