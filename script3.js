//Question3
const instructors1 = ["Alex", "Daniel", "Morgan",
 "Ben", "Micah", "Jims"];
//1
const instructorsA = instructors1.map(function (number) {
    console.log(number + ' is awosome')
})
//2
const instructorsA1 = instructors1.map(function (number) {
    return(number + ' is awosome')
})
console.log(instructorsA1)