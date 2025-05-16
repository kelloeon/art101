// index.js - Lab 10: JavaScript for the Web
// Author: Elio Kim
// Date: 15 May 2025
// Requirements: jQuery must be loaded for this script to work.



$("#output").append("<button id='make-convo'>Tell me something</button>");


function generateRandomText() {
  const text = "You’ve always wanted to cure what you thought were weaknesses. Your leg. Your disease. But you were never broken, Viktor. There’s beauty in imperfections. They made you what you are. An inseparable piece of everything I admired about you.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

// append a new div to our output div
