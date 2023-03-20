// EX3
function loadAndParseXML() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 1) {
            document.getElementById("tabledata").innerHTML = "Wait while I'm loading...";
        }
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var xmlDoc = xmlhttp.responseXML;
            var quotes = xmlDoc.getElementsByTagName("quote");
            var authors = xmlDoc.getElementsByTagName("author");
            var txt = "<table><tbody><tr><td><strong>Quote</strong></td><td><strong>Author</strong></td></tr>";
            console.log(xmlDoc);
            for (i = 0; i < quotes.length; i++) {
                txt += "<tr><td>" + quotes[i].childNodes[0].nodeValue + "</td>" +
                    "<td>" + authors[i].childNodes[0].nodeValue + "</td></tr>";

            }
            txt += "</tbody></table>";
            // Place the contents in a div
            document.getElementById("tabledata").innerHTML = txt;
        }
    }
    xmlhttp.open("GET", "http://quotes.rest/qod.xml", true);
    xmlhttp.send();
}