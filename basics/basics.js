//Basic Javascript Practice

// JavaScript =    It is used to create interactive and dynamic web pages. It is responsible for
//                 adding functionality to a website and allows for user interaction with the
//                 website's content.

// Keywords =  Reserevd wordsin Java Script

// Vaiables = Storing data ex: let a = 10;
//             Declaration using var, let, const
//             let = local scope{}
//             var = global scope{}
//             const = constant value(value cannot be changed) & global scope

const price = 100;
const product = "Book";
const tax = 2.34;

console.log(`${product} price: ${price+tax} (including tax)`);

// Datatypes =     typeOf() {to get the type of value passed}
//                 Types 1. Primitive, 2. Non-Primitive
//                 Primitive: number, string, bool, null, undefined
//                 Non-Primitive: Arrays, Objects 

var a = null;
var b;

console.log(typeof(1));
console.log(typeof("hello"));
console.log(typeof(true));
console.log(typeof(a));
console.log(typeof(b));
