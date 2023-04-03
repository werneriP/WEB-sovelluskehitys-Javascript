

// If the CORS-issue is preventing the data to be loaded, we can just use local variable

// If CORS-issue is fine (IE seems to work), we can fetch the data using AJAX
// Define a variable which can be used globally
var jsonObj;
const api = "2fb" + "472ea" + "13a72f1" + "fe8d284" + "ff8242bb43";

function lataaJSONDoc(city) {
    var citi = city;
    console.log("Ladataan tiedot palvelimelta..." + citi);
    var xhttp = new XMLHttpRequest();
    var urli = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + citi + "%0B&units=metric&mode=JSON&appid=" + api;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Haku onnistui...");
            jsonObj = JSON.parse(xhttp.responseText);
            console.log(jsonObj);
            printJSONTable(jsonObj);
        } else if (this.readyState == 4 && this.status == 404) {
            alert("Antanmaasi kaupunkia ei löydy!  " + this.status + "   " + this.readyState);
            return;
        }
    };
    xhttp.open("GET", urli, true);
    xhttp.send();

}

function printJSONTable(jsonObj) {

    // JSON data is stored in data variable
    var data = jsonObj;
    var out = "<table><tr><th>Kaupunki</th><th>Pilvet</th><th>Lämpötila</th><th>Tuuli</th><th>Ikoni</th></tr>";
    var nimi = data.name;
    var pilvi = data.clouds.all;
    var temp = data.main.temp;
    var tuuli = data.wind.speed;
    var icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    var ikoni = '<img src="' + icon + '" alt="...kuvalinkki rikki"></img>'
    out += '<tr><td>' + nimi + '</td><td>' + pilvi + '</td><td>' + temp + '</td><td>' + tuuli + '</td><td>' + ikoni + '</td></tr>';
    out += "</table>";
    if (nimi == "Espoo") {
        document.getElementById("espoodata").innerHTML = out;
    } else {
        document.getElementById("weatherdata").innerHTML = out;
    }

}
