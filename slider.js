function slider(sliderImages, myImg, left, right) {
    for (let i = 0; i < sliderImages.length; i++) {
        const dot = document.createElement('p');
        dot.innerText = '●';
        dot.style.opacity = 0.5;
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    }

    let currentIndex = 0;
    myImg.src = sliderImages[currentIndex];

    const dots = document.querySelectorAll('.dot');
    dots[currentIndex].style.opacity = 1;

    // Add event listeners to arrows and dots
    left.addEventListener('click', () => {
        dots[currentIndex].style.opacity = 0.5;
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = sliderImages.length - 1; 
        }
        myImg.src = sliderImages[currentIndex];
        
        dots[currentIndex].style.opacity = 1;
    });

    right.addEventListener('click', () => {
        dots[currentIndex].style.opacity = 0.5;
        currentIndex++;
        if (currentIndex > sliderImages.length - 1) {
            currentIndex = 0;
        }
        myImg.src = sliderImages[currentIndex];
        dots[currentIndex].style.opacity = 1;
    });
}