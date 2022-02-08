// TODO: implement tabs
let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab-content");

let tabbedContent = () => {
  // loop thru each tab
  for (let i = 0; i < tabs.length; i++) {
    // Add click event to all tabs
    tabs[i].addEventListener("click", function (e) {
      for (let i = 0; i < tabs.length; i++) {
        // remove 'active' from all tabs
        tabs[i].classList.remove("active");
      }

      for (let i = 0; i < tabContents.length; i++) {
        // remove 'show' class from all tab contents
        tabContents[i].classList.remove("show");
      }

      // Get data-content attribute of what is clicked.
      let matchingTab = e.currentTarget.getAttribute("data-content");
      console.log(matchingTab);
      document.querySelector(`${matchingTab}`).classList.add("show");
      e.currentTarget.classList.add("active");
    });
  }
};
tabbedContent();
