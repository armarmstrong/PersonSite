function testScrollSpeed() {
    let lastScrollY = window.pageYOffset;
    let scrollSpeed = 0; // Initialize scrollSpeed to 0
    let delay = null;

    const scrollSpeedElement = document.createElement("p");
    scrollSpeedElement.style.position = "fixed";
    scrollSpeedElement.style.fontSize = "30px";
    scrollSpeedElement.style.color = "white";
    scrollSpeedElement.style.top = "0";
    scrollSpeedElement.style.left = "0";
    document.body.appendChild(scrollSpeedElement);

    window.addEventListener("scroll", () => {
        const currentScrollY = window.pageYOffset;
        const newScrollSpeed = Math.abs(currentScrollY - lastScrollY);

        if (currentScrollY === 0 ||
            currentScrollY === document.documentElement.scrollHeight - window.innerHeight) {
            scrollSpeed = 1; // Reset scrollSpeed if reached top or bottom
        } else if (newScrollSpeed > 0) {
            scrollSpeed = newScrollSpeed;
        }

        scrollSpeedElement.textContent = `Scroll speed: ${scrollSpeed}`;


        lastScrollY = currentScrollY;
    });
}

testScrollSpeed();