var x = document.getElementById("addCont");
x.addEventListener("click", hae);
function hae() {
    var uusi = document.createElement('p');
    uusi.innerHTML = "Upouusi p-elementti sivulle";
    uusi.setAttribute('id', 'newData');
    document.body.appendChild(uusi)
}
var y = document.getElementById("remCont");
y.addEventListener("click", poista);
function poista() {
    var pois = document.getElementsByTagName('p');
    console.log(pois);
    var poista = pois[pois.length - 1];
    console.log(poista);
    document.body.removeChild(poista);
}