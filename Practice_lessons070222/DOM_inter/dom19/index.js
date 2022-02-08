const getUserComment = () => {
  let userComment = document.querySelector("#user-comment");
  return userComment.value;
};

// Sample usage - do not modify
const userComment = document.querySelector("#user-comment");
userComment.addEventListener("keyup", () => {
  console.log(getUserComment());
});
