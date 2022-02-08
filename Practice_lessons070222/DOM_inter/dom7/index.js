const getDivElements = () => {
  // TODO: return all the div elements
  const divs = document.querySelectorAll("div");
  return divs;
};

const getFooterLinks = () => {
  // TODO: return all the links that are in the footer-wrapper
  const aLinks = document.querySelectorAll("#footer-wrapper a");
  return aLinks;
};

const getAboutLinks = () => {
  // TODO: return all the links that point to the About Us page
  return document.querySelector(".about");
};

// Sample usage - do not modify
console.log(getDivElements());
console.log(getFooterLinks());
console.log(getAboutLinks());
