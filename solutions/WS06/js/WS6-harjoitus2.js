

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
    localStorage.setItem("extras", extras);


    /*     < !--Save the data-- > */
    localStorage.setItem("destination", dest);
    localStorage.setItem("date", date);
    /*     localStorage.setItem("services", services); */

    console.log("Saved the data!");
    updateData();
}
/*     < !--Exercise #2 -- > */

function updateData() {
    /*     < !--either pick one by one or use a loop the get them all-- > */
    document.getElementById("sessiondata").innerHTML = "Destintion: " + localStorage.getItem("destination");
    document.getElementById("sessiondata").innerHTML += "<br> Arrival date: " + localStorage.getItem("date");
    document.getElementById("sessiondata").innerHTML += "<br> Extras: " + localStorage.getItem("extras");

    for (var i in localStorage) {
        console.log(i + ' = ' + localStorage[i]);
    }

}

