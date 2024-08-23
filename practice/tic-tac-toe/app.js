const tttContainer = document.querySelector('.ttt-container');

const GRID_SIZE = 3;

function generateCell() {
    const btn = document.createElement('button');
    btn.classList.add('cell');
    btn.type = 'button';
    btn.value = '';
    return btn;
}
const cells = [];
for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = generateCell();
    tttContainer.appendChild(cell);
    cells.push(cell);
}


const grid = [];
for (let i = 0; i < cells.length; i += GRID_SIZE) {
    grid.push(cells.slice(i, i + GRID_SIZE));
}

let playerTurn = 'x';

cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        if (e.target.textContent != '') return;
        if (playerTurn == 'x') {
            e.target.textContent = playerTurn;
            playerTurn = 'o';
        } else if (playerTurn == 'o') {
            e.target.textContent = playerTurn;
            playerTurn = 'x';
        }
        const checkStatus = checkGameStatus();
        console.log(checkStatus);
    });
    
});

function checkGameStatus() {
    // check win

    let n = grid.length;
    let m = grid[0].length;
    let winner = null;
    
    // horizontal check
    for (let r = 0; r < n; r++) {
        winner = grid[r][0].textContent;
        let flag = true;
        for (let c = 0; c < m; c++) {
            if (winner != grid[r][c].textContent) {
                flag = false;
                break;
            }
        }

        if (flag) return winner;
    }

    // vertical check

    for (let c = 0; c < m; c++) {
        winner = grid[0][c].textContent;
        let flag = true;
        for (let r = 0; r < n; r++) {
            if (winner != grid[r][c].textContent) {
                flag = false;
                break;
            }
        }

        if (flag) return winner;
    }

    // left diagonal

    winner = grid[0][0].textContent;
    let diagonalFlag = true;
    for (let i = 1; i < n; i++) {
        if (grid[i][i].textContent != winner) {
            diagonalFlag = false;
            break;
        }
    }

    if (diagonalFlag) return winner;

    // right diagonal

    winner = grid[0][m-1].textContent;
    diagonalFlag = true;
    let r = 1;
        for (let c = m - 2; c >= 0; c--) {
            if (grid[r][c].textContent != winner) {
                diagonalFlag = false;
                break;
            }
            r++;
        }
    if (diagonalFlag) return winner;

    
    // check draw

    let count = 0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (grid[r][c].textContent != '') count++;
        }
    }
    if(count == GRID_SIZE * GRID_SIZE) return 'Draw'

}




