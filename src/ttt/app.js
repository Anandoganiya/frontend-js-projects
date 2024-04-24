const gridContainer = document.querySelector('.grid')
const resetButton = document.querySelector('.reset')
const winnerTextResultEle = document.querySelector('.winner')
class TicTacToe {
    constructor(gridContainer, gridSize = 3) {
        this.gridContainer = gridContainer;
        this.gridSize = gridSize;
        this.grid = [];
        this.currentPlayer = 'X';
        this.cellFiled = 0;
        this.result = false;
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
        if (this.result) return;
        if (buttonCell.textContent == '') {
            this.cellFiled += 1;
            buttonCell.textContent = this.currentPlayer;
            if (this.isWinner()) {
                this.result = true;
                this.callResult(this.currentPlayer);
            } else if (this.cellFiled == this.gridSize * this.gridSize) {
                this.result = true;
                this.callResult('Draw');
            }
            this.updatePlayer();
        }
    }

    callResult(winner) {
        switch (winner) {
            case 'X':
              document.getElementById('winner').textContent = 'Player X won!';
              break;
            case 'O':
              document.getElementById('winner').textContent = 'Player O won!';
              break;
            default:
              document.getElementById('winner').textContent = 'Draw!';
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
    
    reset() {
        this.grid.forEach(row => {
            row.forEach(cell => {
                cell.textContent = ''
            })
        })
        this.currentPlayer = 'X'
        this.cellFiled = 0;
        this.result = false;
    }

}

const t3 = new TicTacToe(gridContainer);
console.log(t3.grid)
resetButton.addEventListener('click', e => {
    t3.reset();
    winnerTextResultEle.textContent = "";
})

