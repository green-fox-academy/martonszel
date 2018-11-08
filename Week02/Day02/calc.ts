'use strict';

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors


const args = process.argv.splice(2); // Just a helper for you to get started
console.log('Input params are', args);

function calculator(args: any) {
let operation: string = args [0] ;
let operand1: number = +args [1] ; 
let operand2: number = +args [2] ;

if (operation === "+" && typeof (operand1) === "number" && typeof (operand2) === "number"){
    return operand1 + operand2 ; }
else if (operation === "-" && typeof (operand1) === "number" && typeof (operand2) === "number" ){
    return operand1 - operand2 }
else if (operation === "div" && typeof (operand1) === "number" && typeof (operand2) === "number" ){
    return operand1 / operand2 }
else if (operation === "x" && typeof (operand1) === "number" && typeof (operand2) === "number" ){
        return operand1 * operand2 }
else if (operation === "dd" && typeof (operand1) === "number" && typeof (operand2) === "number" ){
     return operand1 % operand2 }
else { return "error 404"} 
}

console.log(calculator(args))
console.log("GoodBye")








