// Your code goes here.

$(document).ready(function () {

    $("a").click(function (event) {
        alert("As you can see, the link no longer took you to jquery.com");
        event.preventDefault();

    });

    // Sets up click behavior on all button elements with the alert class
    // that exist in the DOM when the instruction was executed
    $("button.alert").on("click", function () {
        console.log("A button with the alert class was clicked!");
    });

    // Now create a new button element with the alert class. This button
    // was created after the click listeners were applied above, so it
    // will not have the same click behavior as its peers
    $("<button class='alert' id='search'>Alert!</button>").appendTo(document.body);

    /*     $("#search").click(function (event) {
            $.get("https://www.is.fi/rss/tiede.xml", function (response) {
                console.log(response); // server response
            })
        }); */

    $("#result").load("./elementti.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
});

$("a").addClass("test");
//$("a").removeClass("test");

$("p").on("click", function () {
    $.get("https://www.is.fi/rss/musiikki.xml", function (response) {
        console.log(response); // server response
    });
});
