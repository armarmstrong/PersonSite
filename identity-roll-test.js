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


// Create a copy of the identityContainer with the same size and position
const identityContainerCopy = identityContainer.cloneNode(true);
identityContainerCopy.id = "identityContainerCopy";
identityContainerCopy.style.position = "absolute";
identityContainerCopy.style.top = identityContainer.offsetTop + "px";
identityContainerCopy.style.left = identityContainer.offsetLeft + "px";
identityContainerCopy.style.width = identityContainer.offsetWidth + "px";
identityContainerCopy.style.height = identityContainer.offsetHeight + "px";

identityContainerCopy.style.fontSize = "32px";
identityContainerCopy.style.overflow = "hidden";
// identityContainerCopy.style.color = "yellow";


// Insert the copy before the original identityContainer
identityContainer.parentNode.insertBefore(identityContainerCopy, identityContainer);

// Animate the names

var currentIndex = 0;
var startIndex = 1;

function animateNames() {
    const nameElement = document.createElement("div");
    nameElement.textContent = identityContent[currentIndex].name;
    nameElement.style.fontFamily = identityContent[currentIndex].font;
    nameElement.style.position = "relative";
    nameElement.style.top = "90%";
    nameElement.style.transition = "top 2s linear";

    identityContainer.appendChild(nameElement);
    

    setTimeout(() => {
        nameElement.style.top = "-90%";
    }, 500);

    setTimeout(() => {
        identityContainer.removeChild(nameElement);
        currentIndex = (currentIndex + 2) % identityContent.length;
        animateNames();
    }, 2500);
}


function animateNextNames() {
    const nextElement = document.createElement("div");
    nextElement.textContent = identityContent[startIndex].name;
    nextElement.style.fontFamily = identityContent[startIndex].font;
    nextElement.style.position = "relative";
    nextElement.style.top = "90%";
    nextElement.style.transition = "top 2s linear";

    identityContainerCopy.appendChild(nextElement);

    setTimeout(() => {
        nextElement.style.top = "-90%";
    }, 500);

    setTimeout(() => {
        identityContainerCopy.removeChild(nextElement);
        startIndex = (startIndex + 2) % identityContent.length;
        animateNextNames();
    }, 2500);
}

// Start the animation
function startAnimation() {
    animateNames();

    setTimeout(() => {
        animateNextNames();
    }, 1130);
}

startAnimation()