function validateExtra() {

    var x = document.getElementById("extraField");
    x.style.display = "block";
    var selection = document.forms.extra.cont.selectedIndex;

    if (selection == 0 || selection == 2) {
        document.getElementById("extra_text").innerHTML = "Please, give your phone number: ";

    } else {
        document.getElementById("extra_text").innerHTML = "Please, give your e-mail address: ";

    }
    return false;
}

var x = document.getElementById("extraField");
x.style.display = "none";