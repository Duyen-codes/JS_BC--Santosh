// const getShortTextParagraphs = () => {
//   const paras = document.querySelectorAll("p");
//   return [...paras].filter((para) => para.textContent.length < 10);
// };

const getShortTextParagraphs = () => {
  return [...document.querySelectorAll("p")]

    .filter((p) => p.textContent.length < 10)

    .map((p) => p.textContent);
};
// Sample usage - do not modify
console.log(getShortTextParagraphs());
