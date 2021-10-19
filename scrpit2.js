//map==array
const numbers = [1, 5, 8]
const numsSqu = numbers.map ( num => num * num )
    console.log(numsSqu)

//forEach==loop
const numbers1 = [1, 5, 8]
numbers1.forEach(function(numbers1){
    numbers1=numbers1**2
    console.log("numsSqu:", numbers1) ;
})