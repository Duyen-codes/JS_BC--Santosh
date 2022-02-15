"use strict";

/**
Write the Recipe class such that it automatically console logs the string: New recipe created whenever
we create a new instance of that class.
**/

class Recipe {
  constructor() {
    console.log(
      "New recipe created when we create a new instance of that class"
    );
  }
}

let recipe1 = new Recipe();
