const updatesContainer = document.querySelector('#updates .grid');

const updates = [
  {
    link: 'https://www.youtube.com/watch?v=L9DkcnfT-aA',
    src: 'https://i.ytimg.com/vi/L9DkcnfT-aA/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDbdU2wisWOW0TzbTHS-PerHJbLwQ',
    // src: '',
    class: 'ytb',
    date: '2023-10-26'
  },
  {
    link: 'https://scontent.cdninstagram.com/v/t51.2885-15/51522777_411813546291117_8258942828236202142_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42MzV4NjM1LnNkci5mMjg4NSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=z11M9aAI4nwAb626QOk&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MTk4NTMyMTYyNjcxOTY4NTg5Nw%3D%3D.2-ccb7-5&oh=00_AfBEWGck98vms1BBJTzD0D9GcVpjDZIHta3oTMiiFmJz5g&oe=6634620D&_nc_sid=10d13b',
    src: '',
    class: 'ins',
    date: '2023-10-27'
  },
  {
    link: 'https://scontent.cdninstagram.com/v/t51.2885-15/19624914_146846419223835_4006357609811542016_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyODg1In0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=pOEa3G0v5rsAb6wMiSS&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MTU1MjMzMTAzMzM4OTcwNjQ5Ng%3D%3D.2-ccb7-5&oh=00_AfAgk3bs5dHXQNcY67wXBHxVYndlrcYcVXJju3eOG0e38g&oe=66345491&_nc_sid=10d13b',
    src: '',
    class: 'ins',
    date: '2023-10-27'
  },
  {
    link: 'https://www.medium.com/@the_py_coder/how-to-build-a-simple-web-app-with-python-and-flask-27828674964f',
    src: '',
    class: 'med',
    date: '2023-10-28'
  }
];

// Create and append div elements to updatesContainer
updates.forEach((update, index) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = update.src;

    div.appendChild(img);
    div.addEventListener('click', () => {
      window.open(update.link, '_blank');
    });

    div.classList.add(update.class);
    // if (update.class === 'ytb') {
    //   div.style.background = 'yellow';
    // } else if (update.class === 'ins') {
    //   div.style.background = 'purple';
    // } else if (update.class ==='med') {
    //   div.style.background = 'green';
    // }

    updatesContainer.appendChild(div);
});


const ytbs = document.querySelectorAll('.ytb');

const playButton = document.createElement('img');
playButton.src = './svg/Play 100.svg';
playButton.classList.add('play-button');

ytbs.forEach((ytb) => {
  ytb.appendChild(playButton);
});



