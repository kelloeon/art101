// index.js - purpose and description here
// Author: Elio Kim
// Date: 28 April 2025

// Define variables:
let myTransport = ["bus (public transport)", " walking", " hitching rides from friends", " Tesla Model X (dad's car)", " Hyundai Ioniq 5 (mom's car)"];

// Create an object for my main ride:

let myMainRide = {
  make: "Honda",
  model: "Odyssey",
  year: 2007,
  color: "silver",
  owned: false,
  currentYear: 2025,
  age: function() {
      return this.currentYear - this.year;
  }
};

// Write out transportation methods (myTransport)
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

// Write out details of main ride (myMainRide)
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");