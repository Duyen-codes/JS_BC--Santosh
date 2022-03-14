const form = document.querySelector("form");

const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

//   Saving it locally
localStorage.setItem("items", JSON.stringify(itemsArray));

// get from local storage
const data = JSON.parse(localStorage.getItem("items"));

// function to create list
const listMaker = (text) => {
  //   const li = document.createElement("li");
  //   li.textContent = text;
  //   ul.append(li);
  ul.innerHTML += `<li>${text}</li>
                    <button class="delete">X</button>
  `;
};

form.addEventListener("submit", (event) => {
  console.log("clicked");
  event.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  listMaker(input.value);
  input.value = "";
});

data.forEach((item) => {
  listMaker(item);
});

button.addEventListener("click", () => {
  localStorage.clear();
  console.log(ul.childNodes);
  //   while (ul.firstChild) {
  //     ul.removeChild(ul.firstChild);
  //   }

  ul.innerHTML = "";
});
