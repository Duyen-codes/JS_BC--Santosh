const emptyShoppingList = () => {
  const list = document.querySelector("#shopping-list");

  return (list.textContent = "");
};

// Sample usage - do not modify
emptyShoppingList();
