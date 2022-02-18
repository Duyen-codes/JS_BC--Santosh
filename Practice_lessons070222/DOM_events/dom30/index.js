// TODO: implement tabs
let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab-content");

let tabbedContent = () => {
  // loop thru each tab
  for (let i = 0; i < tabs.length; i++) {
    // Add click event to all tabs
    tabs[i].addEventListener("click", function (e) {
      // remove 'active' from all tabs
      tabs.forEach((tab) => tab.classList.remove("active"));

      // remove 'show' class from all tab contents
      tabContents.forEach((tabContent) => tabContent.classList.remove("show"));

      // Get data-content attribute of what is clicked.
      e.currentTarget.classList.add("active");
      const { content } = e.target.dataset;
      document.querySelector(`${content}`).classList.add("show");
      console.log("target:", e.target, "currentTarget:", e.currentTarget);
      // let matchingTab = e.currentTarget.getAttribute("data-content");
      // console.log(matchingTab);
      // document.querySelector(`${matchingTab}`).classList.add("show");
    });
  }
};
tabbedContent();
