// functions =     A JS function is a block of code designed to perform a particular task
//                 It is executed when something invokes it

function hi(){
    console.log("Hello There");
}

function samsung(){
    console.log("This is samsung phone");
}

function realme(){
    console.log("Thsi is realme phone");
}

function poco(){
    console.log("This is poco phone");
}

// hi();
// samsung();
// realme();
// poco();

// parameters =    variables or placeholders you define where declaring a function.
//                 These parameters serve as inputs to the function and allow you to 
//                 pass data into the function when you call it.

// return =    The 'return' keyword is used within a function to specify the values that the 
//             function should produce as its result or return to the caller.
//             When a function executed and encounters a return statement, it immeaditly 
//             stops executing and returns  the specified value to the calling code.

function add(a, b){
    return a+b;
}

// console.log(add(10, 20));

function area(length, breath){
    return(length*breath);
}

console.log(area(10, 20));

