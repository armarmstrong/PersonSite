const grassContainer = document.getElementById("grass-container");

// Set block side length in pixels
const blockSideLength = 120;

function createGrassGrid() {
  // Calculate number of blocks based on container dimensions and block size
  const numberOfBlocks = [
    Math.floor(grassContainer.offsetHeight / blockSideLength),
    Math.floor(grassContainer.offsetWidth / blockSideLength),
  ];

  // Clear existing grid
  grassContainer.innerHTML = "";

  // Create rows and blocks
  for (let i = 0; i < numberOfBlocks[0]; i++) {
    const row = document.createElement('div');
    row.classList.add('block-row');
    grassContainer.appendChild(row);

    for (let j = 0; j < numberOfBlocks[1]; j++) {
      const block = document.createElement('div');
      block.classList.add('grass-block');
      // Calculate block size based on container dimensions
        const blockWidth = grassContainer.offsetWidth / numberOfBlocks[1];
        const blockHeight = grassContainer.offsetHeight / numberOfBlocks[0];

        // Set block size
        block.style.width = blockWidth + 'px';
        block.style.height = blockHeight + 'px';
      
      row.appendChild(block);

      if (i % 2 === 0) {
        if (j % 2 === 0) {
          block.classList.add('grass-block-black');
        } else {

          block.classList.add('grass-block-white');
        }
      } else {
        if (j % 2 === 0) {
          block.classList.add('grass-block-white');
        } else {
          block.classList.add('grass-block-black');
        }
      }

      // Add plus symbol to each block
      const plus = document.createElement('p');
      plus.classList.add('plus');
      plus.textContent = '';
      block.appendChild(plus);
    }
  }
  
}

// Create initial grid
createGrassGrid();

// Resize grid on window resize
window.addEventListener('resize', createGrassGrid);

// Optionally, add a resize event listener to the grassContainer itself
grassContainer.addEventListener('resize', createGrassGrid);



// offsetWidth TEST

function testWindow() {
    const testElement = document.createElement("p");
    testElement.style.position = "fixed";
    testElement.style.fontSize = "30px";
    testElement.style.color = "white";
    testElement.style.top = "0";
    testElement.style.left = "0";
    testElement.style.zIndex = "10000";
    document.body.appendChild(testElement);

    window.addEventListener("resize", () => {
        const width = grassContainer.offsetWidth;
        const height = grassContainer.offsetHeight;

        const blockWidth = grassContainer.offsetWidth / numberOfBlocks[1];
        const blockHeight = grassContainer.offsetHeight / numberOfBlocks[0];

        const numberOfBlocksH = Math.floor(grassContainer.offsetHeight / blockSideLength);
        const numberOfBlocksW = Math.floor(grassContainer.offsetWidth / blockSideLength);

        testElement.textContent = `${numberOfBlocksH}, ${numberOfBlocksW}, \n GC width: ${width}, height: ${height}, \n blockwidth: ${blockWidth}, \n blockheight: ${blockHeight}`;
    });
}

testWindow();





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



const selectedBlock = selectGrassBlock();
selectInnerGrassBlock(selectedBlock);

