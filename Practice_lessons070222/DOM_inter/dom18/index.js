const getSelectedCountry = (event) => {
  let countries = document.querySelector("#countries-dropdown");
  return countries.value;
};

// Sample usage - do not modify
const dropdown = document.querySelector("#countries-dropdown");
dropdown.addEventListener("change", () => {
  console.log(getSelectedCountry());
});
