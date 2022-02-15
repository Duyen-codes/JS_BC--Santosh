"use strict";

/**
Run the code and notice how the console.log shows up after 2 seconds.
Feel free to play around with the code (callback and milliseconds) and see how that affects the result..*/

// setTimeout() methods sets a timer which executes a function or specified piece of code once the timer expires
setTimeout(() => {
  console.log("Hello World! Delayed");
}, 2000);

setTimeout(() => {
  alert("2 seconds is up");
}, 2000);
