
const identityContainer = document.getElementById("identity");
var identityContent = [
    {name: "Cinephilia", font: "Lobster"},
    {name: "Architect", font: "Lugrasimo"},
    {name: "Product Designer", font: "Roboto"},
    {name: "UX Designer", font: "Roboto Slab"},
    {name: "UI Designer", font: "Poppins"},
    {name: "Web Developer", font: "Caveat"},
    {name: "Game Developer", font: "Pixelify Sans"},
    {name: "App Developer", font: "Platypi"}

    // {name: "llllllllllllllll", font: "Poppins"},
    // {name: "llllllllllllllll", font: "Poppins"},
    // {name: "llllllllllllllll", font: "Poppins"},
    // {name: "llllllllllllllll", font: "Poppins"},
    // {name: "llllllllllllllll", font: "Poppins"},
    // {name: "llllllllllllllll", font: "Poppins"},
    // {name: "llllllllllllllll", font: "Poppins"},
    // {name: "llllllllllllllll", font: "Poppins"}
]

// create identity div

var identityDiv = document.createElement("div");
identityDiv.class = "identity-roll";
identityDiv.style.display = "flex";
identityDiv.style.flexDirection = "column";
identityDiv.style.alignItems = "flex-start";
identityDiv.style.justifyContent = "center";
identityDiv.style.position = "absolute";

// var identityDivCopy = identityDiv.cloneNode(true);

for (centent in identityContent) {
    var nam = identityContent[centent].name;
    var font = identityContent[centent].font;

    var identity = document.createElement("p");
    identity.textContent = nam;
    identity.style.fontFamily = font;
    identityDiv.appendChild(identity);
    // identityDivCopy.appendChild(identity.cloneNode(true));
}

identityContainer.appendChild(identityDiv);

var delay = 10000;

function animateIdentity(div) {
    // identityContainer.appendChild(identityDiv);
    div.animate([
        {transform: "translateY(35px)"},
        {transform: "translateY(calc(-100%))"}
    ], {
        duration: delay,
        easing: "linear",
        iterations: Infinity
    });
}

animateIdentity(identityDiv);


// function doubleAnimateIdentity() {
//     animateIdentity(identityDiv);
//     setTimeout(() => {
//         animateIdentity(identityDivCopy);
//     }, delay - delay * 0.16);
// }

// function infinityAnimateIdentity() {
//     doubleAnimateIdentity()
//     setInterval(() => {
//         doubleAnimateIdentity();
//     }, delay * 2  - delay * 0.32);
// }

// infinityAnimateIdentity();
