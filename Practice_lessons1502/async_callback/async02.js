"use strict";

/**
Update the delayedWelcome function such that it delays the console.log
call 1 second into the future.*/

/*
 * @param {string} name
 */
// const delayedWelcome = (name) => {
//   console.log(`Welcome ${name}`);
// };

const delayedWelcome = (name) => console.log(`Welcome ${name}`);

setTimeout(delayedWelcome, 1000);
clearTimeout(delayedWelcome);

// Sample usage - do not modify
console.log(delayedWelcome("Sam"));
console.log(delayedWelcome("Alex"));
