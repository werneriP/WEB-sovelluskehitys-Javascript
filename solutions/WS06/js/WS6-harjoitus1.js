function getData() {

    var dest = document.getElementById('destination').value;
    var date = document.getElementById('arrival').value;

    /*     <!-- Select all checked boxes -->
        <!-- easy way is to store the entire HTML list with selections as well --> */
    var services = document.getElementById('services').innerHTML;

    /*     <!-- optional is to get only the checked boxes, allthough saving them requires some looping... --> */
    var selections = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(selections);
    var extras = "";

    for (var i = 0; i < selections.length; i++) {
        console.log(selections[i].value);
        /*     <!-- create a list of selected services, separated by a comma --> */
        extras += selections[i].value + ", ";
    }
    localStorage.setItem("extras", extras);


    /*     <!-- Save the data --> */
    localStorage.setItem("destination", dest);
    localStorage.setItem("date", date);
    localStorage.setItem("services", services);

    console.log("Saved the data!");
}
