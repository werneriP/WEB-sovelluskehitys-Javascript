

function getData() {

    /*     < !--Assignment #1 -- >
        < !--get the input field values-- > */

    var dest = document.getElementById('destination').value;
    var date = document.getElementById('arrival').value;

    /*     < !--Select all checked boxes-- >
        < !--easy way is to store the entire HTML list with selections as well --> */
    var services = document.getElementById('services').innerHTML;

    /*  < !--optional is to get only the checked boxes, allthough saving them requires some looping... --> */
    var selections = document.querySelectorAll('input[type=checkbox]:checked');

    var extras = "";

    for (var i = 0; i < selections.length; i++) {
        console.log(selections[i].value);
        /*     < !--create a list of selected services, separated by a comma-- > */
        extras += selections[i].value + ", ";
    }
    sessionStorage.setItem("extras", extras);


    /*     < !--Save the data-- > */
    sessionStorage.setItem("destination", dest);
    sessionStorage.setItem("date", date);
    sessionStorage.setItem("services", services);

    console.log("Saved the data!");
    updateData();
}
/*     < !--Exercise #2 -- > */

function updateData() {
    /*     < !--either pick one by one or use a loop the get them all-- > */
    document.getElementById("sessiondata").innerHTML = "Destintion: " + sessionStorage.getItem("destination");
    document.getElementById("sessiondata").innerHTML += "<br> Arrival date: " + sessionStorage.getItem("date");
    document.getElementById("sessiondata").innerHTML += "<br> Extras: " + sessionStorage.getItem("extras");
    /*     document.getElementById("sessiondata").innerHTML += "<br> Services: " + sessionStorage.getItem("services"); */

    for (var i in sessionStorage) {
        console.log(i + ' = ' + sessionStorage[i]);
    }

}

