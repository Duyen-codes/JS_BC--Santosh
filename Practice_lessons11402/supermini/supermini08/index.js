class Passport {
  /*
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName} `;
  }

  getInitials() {
    return `${this.firstName[0]}${this.lastName.charAt(0)}`;
  }

  getIsValidName() {
    return firstName !== "" && lastName !== "" ? "valid" : "not valid";
  }
}
//Sample usage do not modify (but feel free to read)
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let answer5 = document.querySelector("#answer5");

function render() {
  let passport = new Passport(firstName.value, lastName.value);

  answer1.textContent = passport.getFirstName();
  answer2.textContent = passport.getLastName();
  answer3.textContent = passport.getFullName();
  answer4.textContent = passport.getInitials();
  answer5.textContent = passport.getIsValidName();
}

firstName.addEventListener("keyup", render);
lastName.addEventListener("keyup", render);
