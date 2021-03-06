"use strict";

/*
Complete the getTweetDetails function such that it fetches the following endpoint
https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/tweet.json
and then calls the showAuthorName function with the full name of tweet author
(the full name should contain a space character  between the first name and the last name).
You should use async/await */

const getTweetDetails = async () => {
  // TODO using async/await
  let response = await fetch(
    "https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/tweet.json"
  );
  let data = await response.json();
  let firstName = data.author.details.firstName;
  let lastName = data.author.details.lastName;
  let fullName = `${firstName} ${lastName}`;
  showAuthorName(fullName);
};

// do NOT modify this function
function showAuthorName(placeholder) {
  console.log(placeholder);
}

// Sample usage - do not modify
getTweetDetails();
