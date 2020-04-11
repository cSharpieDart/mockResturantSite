var i = 0;
var images = [
    "images/pizza-1202775_1280.jpg",
    "images/pizza-1949157_1280.jpg",
    "images/pizza-1344720_1280.jpg"
];

var nextImage = function () {
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    document.querySelector('#slides').src = images[i];
}

var previousImage = function () {
    if (i > 0) {
        i--;
    }
    else {
        i = images.length - 1;
    }
    document.querySelector('#slides').src = images[i];
}

document.querySelector('#next').addEventListener('click', nextImage);
document.querySelector('#previous').addEventListener('click', previousImage);