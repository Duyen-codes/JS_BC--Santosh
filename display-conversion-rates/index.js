class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }

  put(endpoint, body) {
    return this._send("put", endpoint, body);
  }

  post(endpoint, body) {
    return this._send("post", endpoint, body);
  }

  delete(endpoint, body) {
    return this._send("delete", endpoint, body);
  }

  _send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}

let api = new FetchWrapper(
  "https://v6.exchangerate-api.com/v6/a1a593067a404e0031b514d1/latest/"
);

// const baseCurrency = document.querySelector("#base-currency");
// const targetCurrency = document.querySelector("#target-currency");
// const result = document.querySelector("#conversion-result");
// result.textContent = "1";

// baseCurrency.addEventListener("change", getConversionRates);
// targetCurrency.addEventListener("change", getConversionRates);

// function getConversionRates() {
//   switch (baseCurrency.value) {
//     case "USD":
//       api.get("USD").then((data) => {
//         displayResult(data.conversion_rates);
//         console.log("conversion_rates", data.conversion_rates);
//       });

//       break;

//     case "EUR":
//       api.get("EUR");
//       api.get("EUR").then((data) => {
//         displayResult(data.conversion_rates);
//         console.log("conversion_rates", data.conversion_rates);
//       });
//       break;

//     case "CAD":
//       api.get("CAD");
//       api.get("CAD").then((data) => {
//         displayResult(data.conversion_rates);
//         console.log("conversion_rates", data.conversion_rates);
//       });
//       break;

//     case "INR":
//       api.get("INR");
//       api.get("INR").then((data) => {
//         displayResult(data.conversion_rates);
//         console.log("conversion_rates", data.conversion_rates);
//       });
//       break;
//     default:
//       console.log("sorry no value found");
//   }
// }

// function displayResult(data) {
//   result.textContent = data[targetCurrency.value];
// }

const base = document.querySelector("#base-currency");
const target = document.querySelector("#target-currency");
const result = document.querySelector("#conversion-result");

base.addEventListener("change", () => {
  getConversionRates(base.value);
});

target.addEventListener("change", () => {
  getConversionRates(base.value);
});

const getConversionRates = (baseValue) => {
  api.get(baseValue).then((data) => displayResult(data.conversion_rates));
};

function displayResult(data) {
  result.textContent = data[target.value];
}

//TODO
/* The goal of this project is to show the user the conversion rate between 2 currency pairs.
The currency chosen on the left is the base currency and the currency chosen on the right is the target currency.
The app starts at 1 USD = 1 USD.

The API you need to use in this challenge is exchangerate-api.com.
You can create a free account and browse the documentation.

The free plan on this API allows you to perform 1,500 requests per month.
Remember that every time you type in the editor, the browser preview will refresh,
causing a new API request. In order not to exceed your limit, we recommend commenting out the
fetch/FetchWrapper related code after you get it to work the first time. */

//Notes:
// Sign up for a free account on exchange https://www.exchangerate-api.com/
// Copy the example request
// Please check the documentation link, read Standard Requests documentation
// Sending a GET request to https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
// Above will give you exchange rate comapred to USD
// In index.js, selecr the 2 <select> items as well as the <p> with id conversion-result
// Create a function called getConversionRates and add a console.log(???New currency selected???) inside of it
// Whenever the user choose a new value for the base currency, you need to call the getConversionRates function.
// Test it out in the browser tab.

// const API_key = a1a593067a404e0031b514d1;
// Example Request: https://v6.exchangerate-api.com/v6/a1a593067a404e0031b514d1/latest/USD
