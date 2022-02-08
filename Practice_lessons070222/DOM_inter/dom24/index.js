// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'

const sidebarBtn = document.querySelector("#menu-sidebar");
const appSideBar = document.querySelector("#app-sidebar");

sidebarBtn.addEventListener("click", () => {
  appSideBar.classList.toggle("show");
});
