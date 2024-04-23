



function kiwiContainerMove(direction1, direction2, lastDirection1, lastDirection2) {
    kiwiContainerLeft += direction1 * 8; // Adjust the value for desired movement distance
    kiwiContainerTop += direction2 * 4;

    // Check for direction change limit
    if (direction1 !== 0 && direction1 === lastDirection1) {
        direction1 *= -1;
    }
    if (direction2 !== 0 && direction2 === lastDirection2) {
        direction2 *= -1;
    }

    kiwiContainer.style.left = kiwiContainerLeft + "px";
    kiwiContainer.style.top = kiwiContainerTop + "px";

    // Flip kiwiSvg based on direction
    if (direction1 < 0) {
        kiwiSvg.style.transform = "scaleX(-1)";
    } else {
        kiwiSvg.style.transform = "scaleX(1)";
    }

    return [direction1, direction2]; // Return updated directions for next iteration
}

function startWaddleAnimation() {
    let step = 0;
    kiwiStand.style.opacity = 0;
    kiwiBody.style.opacity = 1;
    var randomDirection1 = Math.sign(Math.random() * 2 - 1);
    var randomDirection2 = Math.sign(Math.random() * 2 - 1);
    var lastDirection1 = 0;
    var lastDirection2 = 0;

    let intervalId = setInterval(() => {
        // Move kiwi container
        [randomDirection1, randomDirection2] = kiwiContainerMove(
            randomDirection1,
            randomDirection2,
            lastDirection1,
            lastDirection2
        );

        // Alternate kiwi legs
        if (step % 2 === 0) {
            kiwiLegs1.style.opacity = 1;
            kiwiLegs2.style.opacity = 0;
        } else {
            kiwiLegs1.style.opacity = 0;
            kiwiLegs2.style.opacity = 1;
        }
        step++;

        // Stop the animation after 3 seconds
        if (step >= 6) { // Adjust the number of steps for desired duration
            clearInterval(intervalId);
            kiwiStand.style.opacity = 1;
            kiwiBody.style.opacity = 0;
            kiwiLegs1.style.opacity = 0;
            kiwiLegs2.style.opacity = 0;
        }

        // Update last directions for next iteration
        lastDirection1 = randomDirection1;
        lastDirection2 = randomDirection2;
    }, 100); // Adjust the delay between steps for desired animation speed
}