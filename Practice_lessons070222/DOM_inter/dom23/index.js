const initGetWeather = () => {
  const getWeatherBtn = document.querySelector("#my-button");
  getWeatherBtn.addEventListener("click", () => {
    getWeatherBtn.textContent = "Loading...";
  });
};

// Sample usage - do not modify
initGetWeather();
