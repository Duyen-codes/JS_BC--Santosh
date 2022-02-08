// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>
const themeBtn = document.querySelector("#theme-btn");
const html = document.querySelector("html");
themeBtn.addEventListener("click", () => {
  console.log("clicked");
  html.classList.toggle("dark");
});

console.log(html);
