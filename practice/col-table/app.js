const rowRangeInput = document.querySelector('input[name="row"]');
const colRangeInput = document.querySelector('input[name="col"]');
const cellsDiv = document.querySelector('.cells');
let rowSize = 2;
let colSize = 2;

function generateCell(cellCount) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = cellCount;
    return cell;
}

function generateGrid() {
    cellsDiv.innerHTML = null
    let cellCount = 0;
    for (let r = 0; r < rowSize; r++) {
        for (let c = 0; c < colSize; c++){
            cellCount += 1;
            cellsDiv.appendChild(generateCell(cellCount));
        }
    }
    cellsDiv.style.gridTemplateColumns = `repeat(${colSize},1fr)`;
    cellsDiv.style.gridTemplateRows = `repeat(${rowSize},1fr)`;
}
generateGrid();

colRangeInput.addEventListener('change', (e) => {
    colSize = parseInt(e.target.value);
    generateGrid();
})

rowRangeInput.addEventListener('change', (e) => {
    rowSize = parseInt(e.target.value);
    generateGrid();
})