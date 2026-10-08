const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const resizeBtn = document.getElementById('resizeBtn');
const sizeLabel = document.getElementById('sizeLabel');

let gridSize = 16;
let rainbowMode = false;

function createGrid(size) {
  container.innerHTML = '';
  const squareSize = 500 / size;
  
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    
    square.addEventListener('mouseover', () => {
      if (rainbowMode) {
        square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
        square.style.backgroundColor = 'black';
      }
    });
    
    container.appendChild(square);
  }
  sizeLabel.textContent = `${size} x ${size}`;
}

clearBtn.addEventListener('click', () => createGrid(gridSize));

rainbowBtn.addEventListener('click', () => {
  rainbowMode = !rainbowMode;
  rainbowBtn.classList.toggle('active');
});

resizeBtn.addEventListener('click', () => {
  let newSize = parseInt(prompt('Enter grid size (1-100):', gridSize));
  if (newSize && newSize > 0 && newSize <= 100) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert('Please enter 1-100!');
  }
});

// Initial grid
createGrid(gridSize);
