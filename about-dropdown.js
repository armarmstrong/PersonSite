const about = document.querySelector('#about');
const aboutDropdown = document.querySelector('#about-dropdown');
const plus = document.querySelector('#plus');

aboutDropdown.style.display === 'none';
plus.textContent = '+';


about.addEventListener('click', function() {
    if (aboutDropdown.style.display === 'none') {
        aboutDropdown.style.display = 'flex';
        plus.style.transform = 'rotate(180deg)';
        
            plus.textContent = '--';
        
    } else {
        aboutDropdown.style.display = 'none';
        plus.style.transform = 'rotate(0deg)';
        
            plus.textContent = '+';
        
    }
});