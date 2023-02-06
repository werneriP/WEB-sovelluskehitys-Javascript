
var images = [
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
    "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    "https://cdn.pixabay.com/photo/2021/08/27/10/16/baby-6578335__340.jpg",
    "https://cdn.pixabay.com/photo/2021/08/26/20/53/bird-6577119__340.jpg",
    "https://cdn.pixabay.com/photo/2021/08/28/18/09/common-heather-6581569__340.jpg",
    "https://cdn.pixabay.com/photo/2021/08/22/08/54/bird-6564593__340.jpg",
    "https://cdn.pixabay.com/photo/2021/08/10/09/41/lesser-sand-plover-6535531__340.jpg"
];
var number = Math.floor((Math.random() * images.length));
document.write("<img src='https://cdn-images-1.medium.com/max/1600/1*ot7tWiPCYC01pV0kGmK3qQ.png'><br><br>");
document.images[0].src = images[number];
document.write("Kuva numero " + (number+1) + "/" + images.length);

