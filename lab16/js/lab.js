// index.js - Lab 16: JSON and APIs (XKCD comic!)
// Author: Elio Kim
// Date: 4 June 2025
// Requirements: needs JQuery to run

// comic object
const comicObj = {
    url: "https://xkcd.com/info.0.json",
    // api_key: "DEMO_KEY"
    type: "GET",
    dataType: "json",
};


$("#button").click(function(){
    $.ajax(comicObj)

    .done(function(){
        console.log(comicObj);
        let comTitle = comicObj.title;
        let comAlt = comicObj.alt;
        let comImgUrl = comicObj.img;

        // put everything in "output" section of lab site
        $("#output").html('<h2>${comTitle}</h2>');
        $("#output").append('<img src=${comImgUrl}>');
        $("#output").append("<p class='date'>${comAltlt}</p>");
    })

    // what to do if it fails
    .fail(function(xhr, status, error) {
        console.log(error + "status: " + status);
    })
})

// // Using the core $.ajax() method
// $.ajax(comicObj)
//     {
//     // The URL for the request (from the api docs)
//     url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
//     // The data to send (will be converted to a query string)
//     // data: { 
//     //         // here is where any data required by the api 
//     //         //   goes (check the api docs)
//     //         id: 123,
//     //         api_key: "blahblahblah",
//     //       },
//     // Whether this is a POST or GET request
//     type: "GET",
//     // The type of data we expect back
//     dataType : "json",
//     // What do we do when the api call is successful
//     //   all the action goes in here
//     success: function(data) {
//         // do stuff
//         console.log(data);
//     },
//     // What we do if the api call fails
//     error: function (jqXHR, textStatus, errorThrown) { 
//         // do stuff
//         console.log("Error:", textStatus, errorThrown);
//     }
// })
