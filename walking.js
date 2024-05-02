
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
const walkingIcon = document.getElementById("walking");

var walkingIndex = 0;



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


function animateWalking2() {
    let lastScrollY = window.pageYOffset;
    let scrollSpeed = 0; // Initialize scrollSpeed to 0

    window.addEventListener("scroll", () => {


        const currentScrollY = window.pageYOffset;
        const newScrollSpeed = Math.abs(currentScrollY - lastScrollY);

        if (currentScrollY === 0 ||
            currentScrollY === document.documentElement.scrollHeight - window.innerHeight) {
            scrollSpeed = 1; // Reset scrollSpeed if reached top or bottom
        } else if (newScrollSpeed > 0) {
            scrollSpeed = newScrollSpeed;
        }

        
        // const delay = scrollSpeed === 0 ? 1000 : Math.max(50, 1000 / scrollSpeed);

        // scrollSpeedElement.textContent = `Delay: ${scrollSpeed}`;

        lastScrollY = currentScrollY;

        for (let i = 0; i < scrollSpeed * 0.1; i++) {
            walkingIcon.src = walkingIconSrcs[walkingIndex];
            setTimeout(() => {
                walkingIndex = (walkingIndex + 1) % walkingIconSrcs.length;
            }, 1000 / scrollSpeed);
        }
    });

    
}

animateWalking2();



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
