const grassContainer = document.getElementById("grass-container");
const numberOfBlocks = [6, 12];

function createGrassGrid(grassContainer, numberOfBlocks) {
    for (let i = 0; i < numberOfBlocks[0]; i++) {
        const row = document.createElement('div');
        row.classList.add('block-row');
        grassContainer.appendChild(row);

        for (let j = 0; j < numberOfBlocks[1]; j++) {
            const block = document.createElement('div');
            block.classList.add('grass-block');
            block.style.width = grassContainer.offsetWidth / numberOfBlocks[1] + 'px';
            block.style.height = grassContainer.offsetHeight / numberOfBlocks[0] + 'px';
            row.appendChild(block);

        }
    }

    const grassBlocks = grassContainer.querySelectorAll('.grass-block');
    for (const block of grassBlocks) {
        const plus = document.createElement('p');
        plus.classList.add('plus');
        plus.textContent = '/';
        block.appendChild(plus);
    }

}


function createInnerGrassGrid(innerGrassContainer) {
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.classList.add('inner-block-row');
        innerGrassContainer.appendChild(row);

        for (let j = 0; j < 3; j++) {
            const block = document.createElement('div');
            block.classList.add('inner-grass-block');
            block.style.width = innerGrassContainer.offsetWidth / 3 + 'px';
            block.style.height = innerGrassContainer.offsetHeight / 3 + 'px';
            row.appendChild(block);
        }
    }
}

function resizeGrassGrid() {
    const grassBlocks = grassContainer.querySelectorAll('.grass-block');
    const blockWidth = grassContainer.offsetWidth / numberOfBlocks[1];
    const blockHeight = grassContainer.offsetHeight / numberOfBlocks[0];

    for (const block of grassBlocks) {
        block.style.width = blockWidth + 'px';
        block.style.height = blockHeight + 'px';
    }
}

function selectGrassBlock() {
    const grassBlocks = document.querySelectorAll('#grass-container .grass-block');
    const randomIndices = [];
    while (randomIndices.length < 4) {
        const randomIndex = Math.floor(Math.random() * grassBlocks.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }

    // Add 'inner-selected' class to the randomly selected elements
    for (const index of randomIndices) {
        grassBlocks[index].classList.add('inner-selected');
        createInnerGrassGrid(grassBlocks[index]);
    }
}

// function selectInnerGrassBlock() {
//     const innerGrassBlocks = document.querySelectorAll('.inner-grass-block');

//     // Select innerGrassBlocks[4]
//     innerGrassBlocks[4].classList.add('inner-selected');

//     // Remove innerGrassBlocks[4] from the list
//     const otherBlocks = Array.from(innerGrassBlocks); // Convert NodeList to array
//     otherBlocks.splice(4, 1); // Remove element at index 4

//     // Select two random elements from the remaining blocks
//     const randomIndices = [];
//     while (randomIndices.length < 2) {
//         const randomIndex = Math.floor(Math.random() * otherBlocks.length);
//         if (!randomIndices.includes(randomIndex)) {
//             randomIndices.push(randomIndex);
//         }
//     }

//     // Add 'inner-selected' class to the randomly selected elements
//     for (const index of randomIndices) {
//         otherBlocks[index].classList.add('inner-selected');
//     }
// }

createGrassGrid(grassContainer, numberOfBlocks);
window.addEventListener('resize', resizeGrassGrid);

const selectedBlock = selectGrassBlock();
selectInnerGrassBlock(selectedBlock);

