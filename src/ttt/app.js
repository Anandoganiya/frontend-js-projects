const gridContainer = document.querySelector('.grid')
const resetButton = document.querySelector('.reset')
const winnerTextResultEle = document.querySelector('.winner')
class TicTacToe {
    constructor(gridContainer, gridSize = 3) {
        this.gridContainer = gridContainer;
        this.gridSize = gridSize;
        this.grid = [];
        this.currentPlayer = 'X';
        this.createGrid();
        this.addEventListener();
    }

    createGrid() {
        for (let i = 0; i < this.gridSize * this.gridSize; i++) {
            const cell = this.createCell(i);
            this.gridContainer.append(cell);
        }
        for (let i = 0; i < this.gridSize; i++) {
            this.grid[i] = Array.from(this.gridContainer.children).slice(i * this.gridSize, i * this.gridSize + this.gridSize);
            // or
            // this.grid[i] = [...this.gridContainer.children].slice(i * this.gridSize, i * this.gridSize + this.gridSize);
        }
    }

    createCell(i) {
        const cell = document.createElement('button')
        cell.classList.add('cell')
        cell.dataset.id = i;
        return cell;
    }

    addEventListener() {
        this.gridContainer.addEventListener('click', e => {
            if (e.target.classList.contains('cell')) {
                this.play(e.target);
            }
        })
    }

    play(buttonCell) {
        if (buttonCell.textContent == '') {
            buttonCell.textContent = this.currentPlayer;
            if (this.isWinner()) {
                console.log('winner')
                // this.callResult(this.currentPlayer);
            } else if (this.cellFiled == this.gridSize * this.gridSize) {
                // this.callResult('Draw');
            }
            this.updatePlayer();
        }
    }

    isWinner() {
        return this.isRowHasWinner() || this.isColWinner() || this.isDiagonalWinner() || this.isReverseDiagonalWinner();
    }

    isRowHasWinner() {
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i].every(v => v.textContent === this.currentPlayer)) {
              return true;
            }
        }
        return false;
    }
    
    isColWinner() {
        for (let col = 0; col < this.grid[0].length; col++) {
            let isWinner = true;
            for (let row = 0; row < this.grid.length; row++) {
                if (this.grid[row][col].textContent !== this.currentPlayer) {
                    isWinner = false;
                    break;
                }
            }
            if (isWinner) return true;
        }
        return false;
    }

    isDiagonalWinner() {
        for (let i = 1; i < this.grid.length; i++) {
            if (this.grid[i][i].textContent != this.grid[0][0].textContent ||
                this.grid[0][0].textContent == ''
            ) return false;
        }
        return true;
    }
    
    isReverseDiagonalWinner() {
        let row = 0;
        for (let col = this.grid[0].length - 1; col >= 0; col--) {
                if (this.grid[row][col].textContent != this.currentPlayer 
                ) return false;
            row++;
        }
        return true;
    }
    
    updatePlayer() {
        this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
    }

}

const t3 = new TicTacToe(gridContainer);
console.log(t3.grid)
resetButton.addEventListener('click', e => {
    t3.reset();
    winnerTextResultEle.textContent = "";
})

