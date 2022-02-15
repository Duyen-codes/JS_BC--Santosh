// dom05.js :  Complete the getIsActiveFromCard function such that it returns the value of data-is-active (boolean) from the user-card element.

const userCard = document.querySelector("#user-card");
const getIsActiveFromCard = () => {
  return userCard.dataset.isActive;
};

// Sample usage - do not modify
console.log(getIsActiveFromCard());
