'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4


function integer(a,b,c,d,e) {

    if (a === 2 || 3 || 4|| 5 || 6) {
      console.log("The larger number is " + a );
    } else if (a > 0 && b > 0 && a < b) {
      document.write("The larger number is " + b);
    } else if (a === b && a > 0 && b > 0) {
      document.write("Both numbers are equal!")
    } else {
        document.write("Please add an integer!");
  
    }
  }
  
  integer(2,3,4,5,8);

// 2,3,5,8
