const getUserName = () => {
  const nameInput = document.querySelector("#user-name");
  return nameInput.value;
};

// Sample usage - do not modify
document.querySelector("#name-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(getUserName());
});
