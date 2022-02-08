"use strict";

/**
There are no tasks and no tests in this challenge. All you have to do is visualize in the console the value of total, current, and finally the sum. Notice how:

the value of total starts at 0 (which is given by the initialValue)
the value of current a single item of the array for every iteration.
the value of total is the result of the last run of the reducer (the ongoing sum)
Feel free to change the numbers in the grades array and check the output in the console to better understand how .reduce() works.

/**
 * 
 */
let grades = [10, 5, 15, 20];

let sum = grades.reduce((total, current) => {
  console.log(`Total is ${total}`);
  console.log(`Current is ${current}`);
  console.log("---");
  return total + current;
}, 0);

console.log(`Sum is ${sum}`);

//   Total is 0
// Current is 10
// ---
// Total is 10
// Current is 5
// ---
// Total is 15
// Current is 15
// ---
// Total is 30
// Current is 20
// ---
// Sum is 50
