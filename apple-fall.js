
const apple = document.getElementById('apple');
const marker6 = document.getElementById('marker6');
let isFirstClick = true;

function startFallAnimation() {
    apple.style.top = 0.14 * window.innerHeight + 'px';
    
    setTimeout(function() {
        apple.style.transition = 'top 0.2s';
        apple.style.top = (0.14 * window.innerHeight + 20) + 'px';
        
        setTimeout(function() {
            apple.style.top = (0.14 * window.innerHeight) + 'px';
        }, 160);
    }, 160);
}

marker6.addEventListener('click', function(event) {
    if (isFirstClick) {
        startFallAnimation();
        isFirstClick = false;
    } else {
        showOverlay(marker6, './project-pages/Lino.html');
    }
});

apple.addEventListener('click', function(event) {
    window.open('https://github.com/armarmstrong?tab=repositories', '_blank');
});
