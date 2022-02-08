const getSelectedCurrencies = () => {
  const cards = document.querySelectorAll(".card.active");
  return [...cards].map((card) => {
    return card.textContent;
  });

  // return [...document.querySelectorAll(".cards .card.active")].map((card) => {
  //   card.textContent;
  // });
};

// Sample usage - do not modify
document.querySelectorAll(".cards .card").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    console.log(getSelectedCurrencies());
  });
});
