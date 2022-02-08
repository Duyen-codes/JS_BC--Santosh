"use strict";

/**
Complete the function isPromoCodeValid such that it returns true when the promo code is valid 
and false otherwise.
/**
 * @param {boolean} code
 */

// function isPromoCodeValid(codes) {
//   if (codes.trim.length() >= 5 && codes.length <= 10) {
//     return true;
//   }
//   return false;
// }

const isPromoCodeValid = (code) =>
  code.trim().length >= 5 && code.trim().length <= 10;

// Sample usage - do not modify
const code = document.querySelector("#promo-code");

code.addEventListener("keyup", () => {
  let result = isPromoCodeValid(code.value);
  if (result) {
    code.classList.remove("error");
  } else {
    code.classList.add("error");
  }
});
