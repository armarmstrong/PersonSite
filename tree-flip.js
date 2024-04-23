// tree flipping
    
const treeContainer1 = document.getElementById('tree1');
const treeContainer2 = document.getElementById('tree2');
const treeContainer3 = document.getElementById('tree3');

var numberOfTreesPerRow1 = [
    2, 3, 2, 6, 5, 4, 5
];
var numberOfTreesPerRow2 = [
    2, 3, 2, 5, 3
];
var numberOfTreesPerRow3 = [
    2, 4, 3, 2
];

function createTreeGridA(treeContainer, numberOfTreesPerRow) {
for (let i = 0; i < numberOfTreesPerRow.length; i++) {
    const treeRow = document.createElement('div');
    treeRow.classList.add('tree-row');
    treeRow.style.display = 'flex';

    for (let j = 0; j < numberOfTreesPerRow[i]; j++) {
    const treeIcon = document.createElement('img');
    treeIcon.classList.add('tree-icon');
    treeIcon.src = './icon/Coniferous Tree.svg';
    treeRow.appendChild(treeIcon);
    }

    treeContainer.appendChild(treeRow);
}
}

function createTreeGridB(treeContainer, numberOfTreesPerRow) {
for (let i = 0; i < numberOfTreesPerRow.length; i++) {
    const treeRow = document.createElement('div');
    treeRow.classList.add('tree-row');
    treeRow.style.display = 'flex';

    for (let j = 0; j < numberOfTreesPerRow[i]; j++) {
    const treeIcon = document.createElement('img');
    treeIcon.classList.add('tree-icon');
    treeIcon.src = './icon/Deciduous Tree.svg';
    treeRow.appendChild(treeIcon);
    }

    treeContainer.appendChild(treeRow);
}
}

function createTreeGridC(treeContainer, numberOfTreesPerRow) {
for (let i = 0; i < numberOfTreesPerRow.length; i++) {
    if (i === 2) {
        const treeRow = document.createElement('div');
        treeRow.classList.add('tree-row');
        treeRow.style.display = 'flex';
        treeRow.style.marginTop = '24px';

        for (let j = 0; j < numberOfTreesPerRow[i]; j++) {
        const treeIcon = document.createElement('img');
        treeIcon.classList.add('tree-icon');
        treeIcon.src = './icon/Coniferous Tree.svg';
        treeRow.appendChild(treeIcon);
        }

        treeContainer.appendChild(treeRow);
    } else {
        const treeRow = document.createElement('div');
        treeRow.classList.add('tree-row');
        treeRow.style.display = 'flex';

        for (let j = 0; j < numberOfTreesPerRow[i]; j++) {
        const treeIcon = document.createElement('img');
        treeIcon.classList.add('tree-icon');
        treeIcon.src = './icon/Coniferous Tree.svg';
        treeRow.appendChild(treeIcon);
        }

        treeContainer.appendChild(treeRow);
    }        
}
}

function treeClick(treeContainer) {
treeContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('tree-icon')) {
    const treeIcons = treeContainer.querySelectorAll('.tree-icon');

    for (let i = 0; i < treeIcons.length; i++) {
        setTimeout(() => {
        treeIcons[i].classList.add('flip');

        treeIcons[i].src = treeIcons[i].src.includes('Coniferous')
            ? './icon/Deciduous Tree.svg'
            : './icon/Coniferous Tree.svg';

        setTimeout(() => {
            treeIcons[i].classList.remove('flip');
        }, 60);
        }, i * 25);
    }
    }
});
}

createTreeGridA(treeContainer1, numberOfTreesPerRow1);
treeClick(treeContainer1);
createTreeGridB(treeContainer2, numberOfTreesPerRow2);
treeClick(treeContainer2);
createTreeGridC(treeContainer3, numberOfTreesPerRow3);
treeClick(treeContainer3);
