// index.js - Lab 10: JavaScript for the Web
// Author: Elio Kim
// Date: 15 May 2025
// Requirements: jQuery must be loaded for this script to work.


// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

/// click listener for button
$("#submit").click(function(){
  // get value of input field (user text input) and assign it to variable (userName)
  const userName = $("#user-name").val();
  // sorting userName alphabetically
  userNameSorted = sortString(userName);
  // append a new div to output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});


