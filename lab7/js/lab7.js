// index.js - Lab 7 - Functions
// Author: Elio Kim
// Date: 4 May 2025


function sortUserName() {
  let userName = window.prompt("Hi! Please tell me your name so that I can fix it for you. :)");
  console.log("userName = ", userName);
  let nameArray = userName.split("");
  console.log("nameArray = ", nameArray);
  let nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);
  let nameSorted = nameArraySort.join("");
  console.log("nameSorted = ", nameSorted);
  return nameSorted;
}


document.writeln("Okay! I've fixed your name up for you. Here it is: ", sortUserName(), "</br>");