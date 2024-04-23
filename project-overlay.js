
const opacityArea = document.getElementById('opacity-area');
const overlay = document.getElementById('overlay');
const overlayIframe = document.getElementById('overlay-iframe');
overlayIframe.style.display = 'none';

function showOverlay(marker, projectPageLink) {
    marker.addEventListener('click', function(event) {
        overlayIframe.src = projectPageLink;
        overlayIframe.style.display = 'block';

        const progressBar = document.getElementById('progress-bar');
        progressBar.style.display = 'block';
        progressBar.style.backgroundColor = `hsl(141, 90%, 70%)`;

        overlayIframe.addEventListener('load', function() {
            // Update the progress bar to 100%
            progressBar.style.width = '100%';

            // Wait for a short delay (e.g., 500 milliseconds) before showing the overlay
            setTimeout(function() {
                // Show the overlay
                overlay.style.top = '48px';
                overlay.style.height = 'calc(100% - 48px)';
                
                opacityArea.style.height = '100%';
                opacityArea.style.top = '0';
                progressBar.style.width = '0';
            }, 500);
        });
    });
}

function hideOverlay() {
    overlay.style.height = '0';
    overlay.style.top = '100%';
    opacityArea.style.height = '0';
    opacityArea.style.top = '100%';
    setTimeout(function() {
        overlayIframe.style.display = 'none';
    }, 500);
}

opacityArea.addEventListener('click', function(event) {
    hideOverlay();
});

showOverlay(marker1, './project-pages/Aurora House.html');
showOverlay(marker2, './project-pages/Go Above or Below.html');
showOverlay(marker3, 'project-pages/City of Ecstasy.html');
showOverlay(marker4, 'project-pages/Parade with Gods.html');
showOverlay(marker5, './project-pages/Hill Making.html');
showOverlay(marker7, './project-pages/Play Time.html');

