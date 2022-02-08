const getNavbarElement = () => {
  // TODO: get the element with id navbar
  return document.querySelector("#navbar");
};

const getMainElement = () => {
  // TODO: get the element with id main
  return document.getElementById("main");
};

const getAboutFromFooter = () => {
  // TODO: get the the about link that's in the footer
  return document.querySelector("#footer-wrapper").children[0];
};

const getTheParagraphElement = () => {
  // TODO: get the first paragraph element
  return document.querySelector("h1").nextElementSibling;
};

// Sample usage - do not modify
console.log(getNavbarElement());
console.log(getMainElement());
console.log(getAboutFromFooter());
console.log(getTheParagraphElement());
