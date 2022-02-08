const getFormattedWelcomeMessage = () => {
  const welcomeMsg = document.querySelector("#welcome-message");
  return welcomeMsg.innerHTML;
};

// Sample usage - do not modify
console.log(getFormattedWelcomeMessage());
