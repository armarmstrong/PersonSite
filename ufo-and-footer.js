
const ufo = document.getElementById('ufo');
const ufoShadow = document.getElementById('ufo-shadow');
const contactIframe = document.getElementById('contact-iframe');

let ufoClick = 0;

var ufoTop = ufo.offsetTop;
var ufoLeft = ufo.offsetLeft;
var ufoInitialTop = ufo.offsetTop;
var ufoInitialLeft = ufo.offsetLeft;

function ufoAnimation1() {
    let step = 0;
    ufoAnimation1Running = true;
    let intervalId = setInterval(() => {

        // Alternate shake and rotate
        if (step % 2 === 0) {
            ufo.style.transform = 'translate(-50%, -50%) rotate(3deg)';
        } else {
            ufo.style.transform = 'translate(-50%, -50%) rotate(-10deg)';
        }
        step++;

        // Stop the animation after 3 seconds
        if (step >= 10) { // Adjust the number of steps for desired duration
            clearInterval(intervalId);
            ufo.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }
    }, 100); // Adjust the delay between steps for desired animation speed

    ufo.style.top += 30;
    
    setTimeout(function() {
        ufo.style.transition = 'top 0.2s';
        ufoShadow.style.opacity = 0.6;
        ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.7) scaleX(1.4)';    
        ufoTop += -30;
        ufo.style.top = ufoTop + 'px';
        
        setTimeout(function() {
            ufoTop += 30;
            ufo.style.top = ufoTop + 'px';
            ufoShadow.style.opacity = 1;
            ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.0) scaleX(0.0)';
            
            ufoAnimation1Running = false;
        }, 600);   
    }, 300);
    ufoTop = ufo.offsetTop;
    ufoLeft = ufo.offsetLeft;
}

function ufoAnimation2() {
    let step = 0;
    ufoAnimation2Running = true;
    let intervalId = setInterval(() => {

        // Alternate shake and rotate
        if (step % 2 === 0) {
            ufo.style.transform = 'translate(-50%, -50%) rotate(3deg)';
        } else {
            ufo.style.transform = 'translate(-50%, -50%) rotate(-10deg)';
        }
        step++;

        // Stop the animation after 3 seconds
        if (step >= 12) { // Adjust the number of steps for desired duration
            clearInterval(intervalId);
            ufo.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }
    }, 100); // Adjust the delay between steps for desired animation speed

    ufo.style.top += 80;
    
    setTimeout(function() {
        ufo.style.transition = 'top 0.2s';
        ufoShadow.style.opacity = 0.6;
        ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(1.5) scaleX(3)';
        ufoTop += -80;
        ufo.style.top = ufoTop + 'px';
        
        setTimeout(function() {
            ufoTop += 80;
            ufo.style.top = ufoTop + 'px';
            ufoShadow.style.opacity = 1;
            ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.0) scaleX(0.0)';
            setTimeout(function() {
                ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1)';
                ufo.style.top = ufoInitialTop + 'px';
                ufo.style.left = ufoInitialLeft + 'px';
                ufoAnimation2Running = false;
            }, 10);
        }, 800);   
    }, 400);
    ufoTop = ufo.offsetTop;
    ufoLeft = ufo.offsetLeft;
}

function ufoAnimation3() {
    let step = 0;
    // ufoAnimation3Running = true;
    let intervalId = setInterval(() => {

        // Alternate shake and rotate
        if (step % 2 === 0) {
            ufo.style.transform = 'translate(-50%, -50%) rotate(3deg)';
        } else {
            ufo.style.transform = 'translate(-50%, -50%) rotate(-10deg)';
        }
        step++;

        // Stop the animation after 3 seconds
        if (step >= 16) { // Adjust the number of steps for desired duration
            clearInterval(intervalId);
            ufo.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }
    }, 100); // Adjust the delay between steps for desired animation speed

    ufo.style.top += 80;
    
    setTimeout(function() {
        ufo.style.transition = 'top 0.2s';
        ufoShadow.style.opacity = 0.6;
        ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(1.5) scaleX(3)';
        ufoTop += -80;
        ufo.style.top = ufoTop + 'px';
        
        setTimeout(function() {
            ufo.style.transition = 'all 0.5s ease-in-out';
            ufoTop = 0.4 * window.innerHeight;
            ufoLeft = 0.6 * window.innerWidth;
            ufo.style.top = ufoTop + 'px';
            ufo.style.left = ufoLeft + 'px';
            ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(2)';

            ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.0) scaleX(0.0)';
            setTimeout(function() {
                ufo.style.transition = 'all 0.1s ease-in-out';
                ufoTop = 0.6 * window.innerHeight;
                ufoLeft = 0.4 * window.innerWidth;
                ufo.style.top = ufoTop + 'px';
                ufo.style.left = ufoLeft + 'px';
                ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(4)';
                setTimeout(function() {
                    ufo.style.transition = 'all 0.2s ease-in-out';
                    ufoTop = 0.5 * window.innerHeight;
                    ufoLeft = 0.5 * window.innerWidth;
                    ufo.style.top = ufoTop + 'px';
                    ufo.style.left = ufoLeft + 'px';
                    ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(200)';
                    
                    contactIframe.src = 'contact.html';
                    contactIframe.style.display = 'block';
                    contactIframe.style.width = '100%';
                    contactIframe.style.height = '100%';
                    // contactIframe.style.opacity = '80%';
                    contactIframe.style.transition = 'all 0.01s ease-in-out';
                    setTimeout(function() {
                        ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1)';
                        ufo.style.top = ufoInitialTop + 'px';
                        ufo.style.left = ufoInitialLeft + 'px';
                        // ufoAnimation3Running = false;
                    }, 100);
                }, 80); 
            }, 400);    
        }, 800);   
    }, 400);
    ufoTop = ufo.offsetTop;
    ufoLeft = ufo.offsetLeft;
}

document.addEventListener("keydown", function(event) {
    if (event.code === "ShiftLeft") {
        ufoAnimation1();
    }
}); 

ufo.addEventListener('click', function(event) {
    ufoAnimation1();
});

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', function(event) {
    if (ufoClick === 0) {
        ufoClick++;
        ufoAnimation1();
    } else if (ufoClick === 1) {
        ufoClick++;
        ufoAnimation2();
    } else if (contactIframe.style.display === 'none' 
    && overlayIframe.style.display === 'none' 
    && ufo.style.top === ufoInitialTop + 'px'
    && ufoAnimation1Running === false
    && ufoAnimation2Running === false) {
        ufoAnimation3();
    } else {
        ufoAnimation2();
    }
});

const fullMapButton = document.getElementById('fullmap');

fullMapButton.addEventListener('click', function(event) {
    hideOverlay();

    contactIframe.style.height = '0';
    contactIframe.style.transition = 'all 0.2s ease-in-out';
    setTimeout(function() {
        contactIframe.style.display = 'none';
    }, 200);
});