const about = document.getElementById('about');
const aboutDropdown = document.getElementById('about-dropdown');
const plus = document.getElementById('plus');

aboutDropdown.style.display === 'none';
plus.src = './svg/Plus.svg';

const filter = document.querySelector('#about-dropdown4 > a');
const filterIcon = document.querySelector('#about-dropdown4 > img');
const filterDropdown = document.getElementById('filter-dropdown');


about.addEventListener('click', function() {
    if (aboutDropdown.style.display === 'none') {
        aboutDropdown.style.display = 'flex';
        plus.style.transform = 'rotate(180deg)';
        
            plus.src = './svg/Minus.svg';
        
    } else {
        aboutDropdown.style.display = 'none';
        plus.style.transform = 'rotate(0deg)';
        
            plus.src = './svg/Plus.svg';

        filterDropdown.style.display = 'none';
        filter.textContent = 'Open Filter';
        filterIcon.src = './svg/FilterClose2.svg';
    }
});


filter.addEventListener('click', function() {
    if (filterDropdown.style.display === 'none') {
        filterDropdown.style.display = 'flex';
        filterDropdown.style.alignItems = 'flex-end';
        filterDropdown.style.gap = '5px';

        filter.textContent = 'Close Filter';
        filterIcon.src = './svg/Filter2.svg';
    } else {
        filterDropdown.style.display = 'none';
        
        filter.textContent = 'Open Filter';
        filterIcon.src = './svg/FilterClose2.svg';
    }
});