const getNumberOfLinks = () => {
  const links = document.querySelectorAll("a");
  return links.length;
};

// Sample usage - do not modify
console.log(getNumberOfLinks()); // 5
