/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  const welcomeMsg = document.querySelector("#welcome-message");
  return (welcomeMsg.innerHTML = `Hello <strong>${name}</strong>`);
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
// setWelcomeMessage("Alex");
