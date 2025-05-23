// index.js - Lab 12: Conditionals
// Author: Elio Kim
// Date: 22 May 2025
// Requirements: jQuery must be loaded for this script to work.


function clanSorter(str) {
  // counts the length of string inputted by user and assigns it to a variable
  let length = str.length;
  let lenrem = length % 5;

  if (lenrem == 0) {
    result = "Thunderclan";
  }
  else if (lenrem == 1) {
    result = "Shadowclan";
  }
  else if (lenrem == 2) {
    result = "Riverclan";
  }
  else if (lenrem == 3) {
    result = "Windclan";
  }
  else {
    result = "Skyclan";
  }
  return result;
};


// create a listening clicker function for the button

$("#button").click(function() {
  let strayCat = $("#input").val();
  let warriorCat = clanSorter(strayCat);
  $("#output").html('<p>Congrats! You are now a member of ' + warriorCat + '!' + '</p>');
});