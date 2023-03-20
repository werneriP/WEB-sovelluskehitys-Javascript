// EX 4

function loadAndParseNews(filename) {
    var xmlhttp = new XMLHttpRequest();
    // We replace the statif file with URL

    xmlhttp.onreadystatechange = function () {
        // If we are still loading...
        if (xmlhttp.readyState === 1) {
            document.getElementById("newsfeed").innerHTML = "Wait while I'm loading...";
        }
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var xmlDoc = xmlhttp.responseXML;
            console.log(xmlDoc);
            var items = xmlDoc.getElementsByTagName("item");
            var item, feedlink, name, description, content = '';
            for (i = 0; i < items.length; i++) {
                feedlink = items[i].getElementsByTagName('link').item(0).firstChild.nodeValue;
                name = items[i].getElementsByTagName('title').item(0).firstChild.nodeValue;
                item = '<li>' + name + '</li>';
                item = '<li><a href="' + feedlink + '">' + name + '</a></li>';
                content += item;
            }
            // Place contents in a div
            document.getElementById("newsfeed").innerHTML = "<ul>" + content + "</ul>";
        }
    }

    xmlhttp.open("GET", filename, true);
    xmlhttp.send();
}