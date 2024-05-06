
var walkingIconSrcs = [
    "./icon/walking/walking-default.svg",
    "./icon/walking/walking-1.svg",
    "./icon/walking/walking-2.svg",
    "./icon/walking/walking-3.svg",
    "./icon/walking/walking-4.svg",
    "./icon/walking/walking-5.svg",
    "./icon/walking/walking-6.svg",
    "./icon/walking/walking-7.svg",
    "./icon/walking/walking-8.svg",
    "./icon/walking/walking-9.svg"
]; 
const walkingContainer = document.getElementById("walking");

var walkingIndex = 0;
var walkingIcons = [];


for (let i = 0; i < walkingIconSrcs.length; i++) {
    const icon = document.createElement("img");
    icon.src = walkingIconSrcs[i];
    icon.style.display = "none";
    icon.style.position = "absolute";
    icon.style.top = "0";
    icon.style.left = "0";
    icon.style.width = "100%";
    icon.style.height = "100%";
    
    walkingIcons.push(icon);
    walkingContainer.appendChild(icon);
}


function animateWalking2() {
    let lastScrollY = window.pageYOffset;
    let scrollSpeed = 0; // Initialize scrollSpeed to 0
    let walkingIndex = 0;
    walkingIcons[walkingIndex].style.display = "block";

    window.addEventListener("scroll", () => {


        const currentScrollY = window.pageYOffset;
        const newScrollSpeed = Math.abs(currentScrollY - lastScrollY);

        if (currentScrollY === 0 ||
            currentScrollY === document.documentElement.scrollHeight - window.innerHeight) {
            scrollSpeed = 1; 
        } else if (newScrollSpeed > 0) {
            scrollSpeed = newScrollSpeed;
        }

        lastScrollY = currentScrollY;

        scaledScrollSpeed = scrollSpeed * 0.3;

        if (scaledScrollSpeed < 2) {
            return;
        } else if (scaledScrollSpeed < 8) {
            for (let i = 0; i < 2; i++) {
                walkingIcons[walkingIndex].style.display = "none";
                walkingIndex = (walkingIndex + 1) % walkingIconSrcs.length;
                walkingIcons[walkingIndex].style.display = "block";  
            }
        } else if (scaledScrollSpeed >= 6) {
            for (let i = 0; i < scrollSpeed - 2; i++) {
            
                walkingIcons[walkingIndex].style.display = "none";
                walkingIndex = (walkingIndex + 1) % walkingIconSrcs.length;
                walkingIcons[walkingIndex].style.display = "block";
                
            }
        }


        
    }); 
}

animateWalking2();



// function animateWalking() {
//     walkingIcon.src = walkingIconSrcs[walkingIndex];
//     walkingIndex = (walkingIndex + 1) % walkingIconSrcs.length;
//     setTimeout(() => {
//         animateWalking();
//     }, 1000);
// }

// animateWalking();




// WALKING ADJUSTMENT

// function animateWalking0(delay) {
//     if (animateWalking0.isStopped) {
//         animateWalking0.isStopped = false; // Reset the animation flag
//         return; // Exit if the animation is stopped
//     }

//     walkingIcon.src = walkingIconSrcs[walkingIndex];
//     walkingIndex = (walkingIndex + 1) % walkingIconSrcs.length;
//     setTimeout(() => {
//         animateWalking0(delay);
//     }, delay);
// }


// function animateWalkingStop() {
//     walkingIcon.src = walkingIconSrcs[walkingIndex];
//     // walkingIcon.src = walkingIconSrcs[9];
//     animateWalking0.isStopped = true;
// }

// document.addEventListener("keydown", function(event) {
//     if (event.code === "ShiftLeft") {
//         animateWalking0(100);
//     } 
// }); 

// document.addEventListener("keydown", function(event) {
//     if (event.code === "ShiftRight") {
//         animateWalkingStop();
//     } 
// }); 


// SCROLL SPEED TEST

// const scrollSpeedElement = document.createElement("p");
// scrollSpeedElement.style.position = "fixed";
// scrollSpeedElement.style.fontSize = "30px";
// scrollSpeedElement.style.color = "white";
// scrollSpeedElement.style.top = "0";
// scrollSpeedElement.style.left = "0";
// document.body.appendChild(scrollSpeedElement);

// function testScrollSpeed() {
//     let lastScrollY = window.pageYOffset;
//     let scrollSpeed = 0; // Initialize scrollSpeed to 0
//     let delay = null;

//     const scrollSpeedElement = document.createElement("p");
//     scrollSpeedElement.style.position = "fixed";
//     scrollSpeedElement.style.fontSize = "30px";
//     scrollSpeedElement.style.color = "white";
//     scrollSpeedElement.style.top = "0";
//     scrollSpeedElement.style.left = "0";
//     document.body.appendChild(scrollSpeedElement);

//     window.addEventListener("scroll", () => {
//         const currentScrollY = window.pageYOffset;
//         const newScrollSpeed = Math.abs(currentScrollY - lastScrollY);

//         if (currentScrollY === 0 ||
//             currentScrollY === document.documentElement.scrollHeight - window.innerHeight) {
//             scrollSpeed = 1; // Reset scrollSpeed if reached top or bottom
//         } else if (newScrollSpeed > 0) {
//             scrollSpeed = newScrollSpeed;
//         }

//         scrollSpeedElement.textContent = `Scroll speed: ${scrollSpeed}`;


//         lastScrollY = currentScrollY;
//     });
// }

// testScrollSpeed();
