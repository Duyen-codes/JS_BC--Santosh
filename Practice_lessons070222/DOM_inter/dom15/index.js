/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  const userName = document.querySelector("#name");
  return (userName.textContent = name);
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
// setWelcomeMessage("<h2>You have been hacked</h2>");
