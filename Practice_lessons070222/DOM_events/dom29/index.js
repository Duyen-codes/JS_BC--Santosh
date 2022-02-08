// TODO: The user can select a currency by clicking on it (add the class `active`). However, only one currency can be chosen at a time.
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    // this.classList.add("active");
    event.currentTarget.classList.add("active");
  });
});
