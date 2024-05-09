const myImg = document.getElementById("myImg");
var sliderImages = [
    "../image/1-15.webp",
    "../image/1-17.webp",
    "../image/1-18.webp",
    "../image/1-19.webp",
    "../image/1-20.webp",
];
let currentIndex = 0;
myImg.src = sliderImages[currentIndex];