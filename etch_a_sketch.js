function createSketchpad(size) {
  let sketchpad = document.querySelector('.sketchpad');

  let boxes = sketchpad.querySelectorAll('div');
  boxes.forEach((div) => div.remove());

  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let totalCells = size * size;

  for (let i = 0; i < totalCells; i++) {
  let cell = document.createElement('div');
  cell.style.backgroundColor = 'black';
  sketchpad.insertAdjacentElement('beforeend', cell).className = 'cell';
  cell.addEventListener('mouseenter', () => {
  if (cell.style.opacity <=0.9) {
    cell.style.opacity = +cell.style.opacity + 0.1;
  }
  });
  };
};

createSketchpad(16);

function userSize(input) {
  createSketchpad(input);
};