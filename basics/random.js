// Math.random() = returns a random number between 0(included) and 1(excluded)
// Math.floor(num) = returns the floor value ( 7.76 => 7, 6.54 => 6)

let a = Math.random();
console.log(a);

//To get a number between 0 - 10(9 actully) we can multiply by 10
a *= 10;
console.log(a);

//To whole the number use floor function
var b = Math.floor(a);

// To get a number between 1 - 10 Let's add 1
b+=1;
console.log(b);