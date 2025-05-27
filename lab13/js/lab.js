// index.js - Lab 13: Loops
// Author: Elio Kim
// Date: 26 May 2025
// Requirements: needs JQuery to run


function fizzbuzzboom() {
  let numstr = "";
  for (num = 1; num<=200; num++) {
    // 3*5*7 make fizzbuzzboom
    if (num % 105 ==0) {
      numstr += num + ": fizzbuzzboom!<br>";
    }
    // 5*7 make buzzboom
    else if (num % 35 == 0) {
      numstr += num + ": buzzboom!<br>";
    }
    // 3*7 make fizzboom
    else if (num % 21 == 0) {
      numstr += num + ": fizzboom!<br>";
    }
    // 3*5 make fizzbuzz
    else if (num % 15 == 0) {
      numstr += num + ": fizzbuzz!<br>";
    }
    else if (num % 7 == 0) {
      numstr += num + ": boom!<br>";
    }
    else if (num % 5 == 0) {
      numstr += num + ": buzz!<br>";
    }
    else if (num % 3 == 0) {
      numstr += num + ": fizz!<br>";
    }
    else {
      numstr += num + "<br>";
    }
  }
  return numstr;
}


// button click listener

$("#button").click(function() {
  let results = fizzbuzzboom();
  $("#output").html(results);
});