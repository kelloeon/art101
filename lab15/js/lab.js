// index.js - Lab 15: AJAX
// Author: Elio Kim
// Date: 6/2/2025
// Requirements: needs JQuery to function

let endpoint = "https://pokeapi.co/api/v2/berry/"

// number generator for all 
function randomNum() {
    return Math.floor(Math.random() * 64) + 1;
}

// function that chooses a random berry from the api
function randomPokeBerry() {
    // grab random number to use as the berry id
    let pokeBerryId = randomNum();
    // ajax link
    $.ajax({
        url: endpoint+pokeBerryId,
        // data: {id: pokeBerryId},
        type: "GET",
        dataType: "json"
    })
    // if success
    .done(function(data) {
        console.log("success!");
        console.log(data);
        // get and name data from site
        let berryName = data.name;
        // output to html
        $("#output").html("<p>The berry you got is the " + berryName + " berry!</p>");
    })
    // if failure
    .fail(function( xhr, status, errorThrown ) {
        console.log(errorThrown + "status: " + status);
    })
}

// make button
$("#button").click(function() {
    console.log("click!");
    randomPokeBerry();
})