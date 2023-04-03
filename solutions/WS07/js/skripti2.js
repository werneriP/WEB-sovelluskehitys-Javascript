// EX 2
function loadXMLFile() {

    var xmlhttp = new XMLHttpRequest();

    //  xmlhttp.open("GET", "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true);

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // find myDiv and insert results there
            document.getElementById("quotes").innerHTML = xmlhttp.responseXML;
        }
    }
    xmlhttp.open("GET", "http://quotes.rest/qod.xml", true);
    xmlhttp.send();
}