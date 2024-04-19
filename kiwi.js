const dialogue1 = document.getElementById("dialogue1");
const dialogue2 = document.getElementById("dialogue2");
const dialogue3 = document.getElementById("dialogue3");
const dialogue4 = document.getElementById("dialogue4");

var dialogues = [dialogue4];

const kiwiContainer = document.getElementById("kiwi-container");
var kiwiContainerLeft = kiwiContainer.offsetLeft;
var kiwiContainerTop = kiwiContainer.offsetTop;
const kiwi = document.getElementById("kiwi");

kiwi.addEventListener("click", function() {
    kiwiContainer.style.top = 'kiwiContainerTop + 10px';
    kiwiContainer.style.left = 'kiwiContainerLeft + 10px';
    dialogues[0].style.opacity = 1;
    setTimeout(() => {
        dialogues[0].style.opacity = 0;
    }, 4000);
});

const aboutDropdown1 = document.getElementById("about-dropdown1");
const aboutDropdown2 = document.getElementById("about-dropdown2");
const aboutDropdown3 = document.getElementById("about-dropdown3");

function showDialogue(aboutDropdown, dialogue) {
aboutDropdown.addEventListener("click", function() {
    dialogue.style.opacity = 1;
    setTimeout(() => {
        dialogue1.style.opacity = 0;
    }, 4000);
});
}

showDialogue(aboutDropdown1, dialogue1);
showDialogue(aboutDropdown2, dialogue2);
showDialogue(aboutDropdown3, dialogue3);