// index.js - Lab 8: Anon Functions and Callbacks
// Author: Elio Kim
// Date: 8 May 2025

function isEven(x) {
  return (x % 2 == 0);
}

// to test the function:

document.writeln("Is 1 even? ", isEven(1), "</br>");
document.writeln("Is 2 even? ", isEven(2), "</br>");


numArray = [12, 2, 3, 35, 76, 100000];
document.writeln("My array: ", numArray, "</br>");

var result = numArray.map(isEven);
// to test the result variable:
document.writeln("The evenness of my array: ", result, "</br>");

var resultTwo = numArray.map(function(x) {
  var results = x**3;
  return results;
})

document.writeln("Each item in my array, cubed: ", resultTwo);
