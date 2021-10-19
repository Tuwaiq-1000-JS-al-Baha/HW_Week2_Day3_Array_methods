//for.Each==loop
const friends = ["MAHAMD", "AHMAD", "ASEEL", "AIL","EYAD"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

//map==array
const friends1 = ["MAHAMD", "AHMAD", "ASEEL", "AIL","EYAD"];
const Myfriend= friends1.map(function(friends1){
    return friends1 ;
})
console.log(Myfriend)
