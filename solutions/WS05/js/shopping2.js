// shopping2.js
// This script calculates an order total.

function calculate() {
    'use strict';
    // For storing the order total:
    var total = 0;
    var spessu = 0;
    var ale = 1;
    var hinta = 10;
    var teksti = "";
    // Get references to the form values:
    var tyyppi = document.getElementById('type').value;
    var vuodet = document.getElementById('vuodet').value;
    var alennus = document.getElementById("feedback1");
    var speciaali = document.getElementById("feedback2");
    if (tyyppi == "premium") {
        hinta = 15;
    } else if (tyyppi == "gold") {
        hinta = 20;
    } else if (tyyppi == "platinum") {
        hinta = 25;
    }

    if (vuodet > 2) {
        ale = 0.8;
        teksti = "Onnittelut, saat 20% alennuksen!";
        alennus.innerHTML = teksti;
    } else {
        alennus.innerHTML = "Valitse jäsentaso";
        speciaali.innerHTML = "Valitse vuodet";
    }
    if (vuodet > 4) {
        spessu = 5;
        speciaali.innerHTML = "Vielä lähti 5€ hinnasta";
    }
    total = (hinta * vuodet * ale) - spessu;
    document.getElementById("cost").value = total;
    return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';
    //console.log("Ikkunan alustus");

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init();