"use strict";

/**
Complete the getUserIdFromCard function such that it returns the value of data-user-id (number)
from the user-card element.
**/

const userCard = document.querySelector("#user-card");
const getUserIdFromCard = () => {
  console.log(userCard.dataset["userId"]);
  return userCard.dataset.userId;
};

// Sample usage - do not modify
console.log(getUserIdFromCard());
