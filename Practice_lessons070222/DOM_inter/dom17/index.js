const emptyUserName = () => {
  const nameInput = document.querySelector("#user-name");

  return (nameInput.textContent = "");
};

// Sample usage - do not modify
document.querySelector("#empty-btn").addEventListener("click", () => {
  emptyUserName();
});
